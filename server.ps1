param()
$port = 8765
$root = "C:\Users\abood\AppData\Local\Temp\opencode"

$tcpListener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Loopback, $port)
$tcpListener.Start()
Write-Host "http://localhost:$port"
Start-Process "http://localhost:$port"

while ($true) {
  $client = $tcpListener.AcceptTcpClient()
  $stream = $client.GetStream()
  $buffer = New-Object byte[] 4096
  $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
  $raw = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)
  $lines = $raw -split "`r`n"
  $requestLine = $lines[0]
  if (-not $requestLine) { $stream.Close(); $client.Close(); continue }

  $parts = $requestLine.Split(' ')
  $method = $parts[0]
  $path = $parts[1]

  $contentLength = 0
  $i = 1
  for (; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^Content-Length:\s*(\d+)') { $contentLength = [int]$matches[1] }
    if ($lines[$i] -eq '') { break }
  }

  $bodyStart = $i + 1
  $body = ''
  if ($contentLength -gt 0 -and $bodyStart -lt $lines.Length) {
    $body = $lines[$bodyStart..($lines.Length-1)] -join "`r`n"
  }

  if ($method -eq 'POST' -and $path -eq '/api/order') {
    try {
      $data = $body | ConvertFrom-Json
      $customerName = $data.name
      $orderRef = $data.ref
      Write-Host "Order: $customerName - $orderRef" -ForegroundColor Green
      try {
        $whatsappMsg = [System.Uri]::EscapeDataString($data.message)
        $waUrl = "https://api.callmebot.com/whatsapp.php?phone=962780028321&text=$whatsappMsg&apikey=123456"
        Invoke-WebRequest -Uri $waUrl -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop | Out-Null
      } catch { }
    } catch {
      Write-Host "Parse error" -ForegroundColor Yellow
    }
    $resp = "HTTP/1.1 200 OK`r`nContent-Type: application/json`r`nConnection: close`r`n`r`n"
    $respBytes = [System.Text.Encoding]::UTF8.GetBytes($resp)
    $stream.Write($respBytes, 0, $respBytes.Length)
    $stream.Close()
    $client.Close()
    continue
  }

  if ($path -eq '/' -or $path -eq '') { $path = '/index.html' }
  $filePath = $root + $path.Replace('/', '\')
  $ext = [System.IO.Path]::GetExtension($filePath)
  $mimeTypes = @{'.html'='text/html; charset=utf-8';'.css'='text/css; charset=utf-8';'.js'='application/javascript; charset=utf-8';'.png'='image/png';'.jpg'='image/jpeg'}
  $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }

  if (Test-Path $filePath) {
    $content = [System.IO.File]::ReadAllBytes($filePath)
    $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($content.Length)`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($content, 0, $content.Length)
  } else {
    $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404")
    $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($errBytes.Length)`r`nConnection: close`r`n`r`n"
    $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($errBytes, 0, $errBytes.Length)
  }
  $stream.Close()
  $client.Close()
}
