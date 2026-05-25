/* ===== Crumble & Co. — Complete Application v3 ===== */

// ============================================================
// PRODUCTS DATABASE — 8 Products
// ============================================================
const PRODUCTS = {
  classic: {
    id: 'classic', name: 'كوكيز كلاسيك', nameEn: 'Classic Cookie',
    smallPrice: 0.50, largePrice: 5.00, stock: 30,
    image: '',
    category: 'classic', tag: 'كلاسيك', badge: null,
    ingredients: 'زبدة بلجيكية، دقيق فاخر، سكر بني، بيض، شوكولاتة بلجيكية داكنة 70%، فانيلا طبيعية',
    description: 'كوكيز الشوكولاتة الكلاسيكي بمذاق لا يُقاوم.. مقرمش من الخارج وطري من الداخل.',
    code: 'CRMBL-CLC', codeSuffix: '050'
  },
  chocolate: {
    id: 'chocolate', name: 'كوكيز شوكولاتة', nameEn: 'Chocolate Cookie',
    smallPrice: 0.60, largePrice: 6.00, stock: 25,
    image: '',
    category: 'classic', tag: 'شوكولاتة', badge: null,
    ingredients: 'كاكاو بلجيكي، زبدة، سكر، بيض، شوكولاتة حليبية، شوكولاتة بيضاء، دقيق',
    description: 'غني بالشوكولاتة البلجيكية الفاخرة مع قطع الكاكاو المقرمشة لتجربة غنية.',
    code: 'CRMBL-BLC', codeSuffix: '060'
  },
  oreo: {
    id: 'oreo', name: 'كوكيز أوريو', nameEn: 'Oreo Cookie',
    smallPrice: 0.75, largePrice: 7.00, stock: 28,
    image: '',
    category: 'special', tag: 'أوريو', badge: { text: 'الأكثر طلباً', type: 'premium' },
    ingredients: 'زبدة، سكر، دقيق، بيض، قطع أوريو، شوكولاتة بيضاء، كريمة',
    description: 'مليء بقطع الأوريو المقرمشة والكريمة البيضاء الناعمة.. طعم لا يُقاوم.',
    code: 'CRMBL-ORC', codeSuffix: '075'
  },
  nutella: {
    id: 'nutella', name: 'كوكيز محشي نوتيلا', nameEn: 'Nutella Stuffed',
    smallPrice: 1.00, largePrice: 8.00, stock: 22,
    image: '',
    category: 'special', tag: 'نوتيلا', badge: { text: 'حشوة سائلة', type: 'signature' },
    ingredients: 'زبدة، سكر، دقيق، بيض، نوتيلا أصلية، بندق محمص',
    description: 'قلب من نوتيلا سائلة تنساب مع كل قضمة.. تجربة شوكولاتة بندق فاخرة.',
    code: 'CRMBL-NTS', codeSuffix: '100'
  },
  hearts: {
    id: 'hearts', name: 'كوكيز قلوب (مناسبات)', nameEn: 'Heart Cookies',
    smallPrice: 1.25, largePrice: 10.00, stock: 20,
    image: '',
    category: 'premium', tag: 'قلوب', badge: { text: '♥ هدية مثالية', type: 'signature' },
    ingredients: 'كوكيز مخمل أحمر، شوكولاتة بيضاء، جبن كريمي، توت بري مجفف',
    description: 'قلوب وردية مخملية بطبقة تشيز كريم فاخرة.. هدية مثالية بالعلبة المخملية.',
    code: 'CRMBL-HRT', codeSuffix: '125'
  },
  kaitlyn: {
    id: 'kaitlyn', name: 'تصاميم مخصصة (Kaitlyn)', nameEn: "Kaitlyn's Custom",
    smallPrice: 2.00, largePrice: 15.00, stock: 24,
    image: '',
    category: 'premium', tag: 'تصاميم', badge: { text: 'حسب الطلب', type: 'premium' },
    ingredients: 'مكونات أساسية فاخرة مع إضافات حسب التصميم المختار',
    description: 'تصاميم مخصصة بألوان ونكهات مختلفة تناسب جميع المناسبات والأذواق.',
    code: 'CRMBL-KTL', codeSuffix: '200'
  },
  cookiecake: {
    id: 'cookiecake', name: 'كيكة كوكيز بالكندر', nameEn: 'Kinder Cookie Cake',
    smallPrice: 12.00, largePrice: null, stock: 32,
    image: '',
    category: 'cake', tag: 'كيكة', badge: { text: 'مقاس واحد', type: 'premium' },
    singleOnly: true,
    ingredients: 'كوكيز طري، كريمة كندر، شوكولاتة حليبية، قطع كندر، زبدة، دقيق',
    description: 'كيكة كوكيز ضخمة بالكندر تكفي 6-8 أشخاص! مثالية للمشاركة.',
    code: 'CRMBL-CKC', codeSuffix: '1200'
  }
};

// ============================================================
// RAW MATERIALS
// ============================================================
const RAW_MATERIALS = {
  butter: { name: 'زبدة طبيعية بلجيكية', qty: 12.4, unit: 'كغم', refill: 5 },
  choco: { name: 'شوكولاتة قطع بلجيكية فاخرة', qty: 8.8, unit: 'كغم', refill: 5 },
  lotus: { name: 'زبدة اللوتس الذهبية', qty: 3.2, unit: 'كغم', refill: 3 },
  cranberry: { name: 'توت بري مجفف', qty: 2.1, unit: 'كغم', refill: 2 },
  flour: { name: 'طحين فاخر ومكونات جافة', qty: 24.5, unit: 'كغم', refill: 10 }
};

// ============================================================
// CATEGORY INGREDIENTS (for label generator)
// ============================================================
const CATEGORY_INGREDIENTS = {
  classic: 'زبدة بلجيكية، دقيق فاخر، سكر بني، بيض، شوكولاتة بلجيكية داكنة 70%، فانيلا طبيعية',
  special: 'زبدة، سكر، دقيق، بيض، شوكولاتة بلجيكية، إضافات خاصة حسب النوع',
  premium: 'زبدة بلجيكية فاخرة، دقيق إيطالي، سكر عضوي، بيض حر، شوكولاتة بلجيكية 85%',
  cake: 'كوكيز طري طازج، كريمة كندر، شوكولاتة حليبية، قطع كندر، زبدة، دقيق، سكر'
};

// ============================================================
// REVIEWS DATA
// ============================================================
const REVIEWS = [
  { name: 'سارة أحمد', rating: 5, text: 'الكوكيز طعم خرافي! والتغليف المخملي يجنن. أنصح الجميع بتجربة النوتيلا ستافد.', avatar: 'SA' },
  { name: 'محمد علي', rating: 5, text: 'طلبنا كيكة الكوكيز بالكندر للمناسبة كانت رائعة. الكل انبهر بالطعم.', avatar: 'MA' },
  { name: 'لمى خالد', rating: 4, text: 'القلوب الوردية هدية مثالية لصديقتي. التصميم فخم والمكونات طازة', avatar: 'LK' },
  { name: 'عمر ناصر', rating: 5, text: 'أفضل كوكيز ذقته في حياتي! الأوريو كرانتش إدمان.', avatar: 'ON' },
  { name: 'نور سامي', rating: 4, text: 'التوصيل كان سريع والكوكيز لسه ساخن. الفيزا مدعومة ومريحة.', avatar: 'NS' },
  { name: 'ديما فايز', rating: 5, text: 'تعامل راقي وجودة ممتازة. العلبة المخملية تحفة فنية.', avatar: 'DF' }
];

// ============================================================
// STATE
// ============================================================
let cart = [];
let orderCount = 135;
let isOvenBaking = false;
let financeRevenue = 272.70;
let financeCosts = 145.00;
const FIXED_COST = 40.00;
const VAR_COST_PER_UNIT = 0.45;

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function getSelectedSize(productId) {
  var radios = document.querySelectorAll('input[name="size-' + productId + '"]');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return 'small';
}

function getPrice(productId) {
  var p = PRODUCTS[productId];
  if (!p) return 0;
  if (p.singleOnly) return p.smallPrice;
  var size = getSelectedSize(productId);
  return size === 'large' ? (p.largePrice || p.smallPrice) : p.smallPrice;
}

function getStock(productId) {
  return PRODUCTS[productId] ? PRODUCTS[productId].stock : 0;
}

function setStock(productId, val) {
  if (PRODUCTS[productId]) PRODUCTS[productId].stock = Math.max(0, val);
}

function formatCurrency(val) {
  return Number(val).toFixed(2) + ' د.أ';
}

function generateRefNumber() {
  orderCount++;
  return 'CRMBL-' + String(orderCount).padStart(6, '0');
}

// ============================================================
// RENDER PRODUCTS
// ============================================================
function renderProducts() {
  var container = document.getElementById('products-grid-container');
  if (!container) return;
  var html = '';
  var ids = Object.keys(PRODUCTS);
  for (var i = 0; i < ids.length; i++) {
    var p = PRODUCTS[ids[i]];
    if (!p) continue;
    var isSignature = p.badge && p.badge.type === 'signature';
    var cardClass = 'product-card' + (isSignature ? ' signature-card' : '');

    html += '<div class="' + cardClass + '">';
    html += '<div class="product-image-container">';
    html += '<img class="product-image" src="' + p.image + '" alt="' + p.name + '" loading="lazy" onerror="this.style.display=\'none\'">';
    if (p.badge) {
      var badgeClass = p.badge.type === 'premium' ? 'premium-badge' : 'signature-badge';
      html += '<span class="product-badge ' + badgeClass + '">' + p.badge.text + '</span>';
    }
    html += '</div>';
    html += '<div class="product-details">';
    html += '<span class="product-category">' + p.tag + '</span>';
    html += '<h4 class="product-title">' + p.name + '</h4>';
    html += '<p class="product-desc">' + p.description + '</p>';
    html += '<div class="product-options">';

    if (p.singleOnly) {
      html += '<div class="size-option single-size">';
      html += '<span class="size-label">مقاس واحد</span>';
      html += '<span class="size-price">' + formatCurrency(p.smallPrice) + '</span>';
      html += '</div>';
    } else {
      html += '<label class="size-option">';
      html += '<input type="radio" name="size-' + p.id + '" value="small" checked onchange="updateProductPriceDisplay(\'' + p.id + '\')">';
      html += '<span class="size-label">صغير</span>';
      html += '<span class="size-price">' + formatCurrency(p.smallPrice) + '</span>';
      html += '</label>';
      html += '<label class="size-option">';
      html += '<input type="radio" name="size-' + p.id + '" value="large" onchange="updateProductPriceDisplay(\'' + p.id + '\')">';
      html += '<span class="size-label">كبير (عائلي)</span>';
      html += '<span class="size-price">' + formatCurrency(p.largePrice) + '</span>';
      html += '</label>';
    }

    html += '</div>';
    html += '<div class="product-card-footer">';
    html += '<div class="price-display"><span class="price-val" id="price-' + p.id + '">' + p.smallPrice.toFixed(2) + '</span> د.أ</div>';
    html += '<span class="stock-indicator" id="stock-badge-' + p.id + '">متوفر: <span id="stock-count-' + p.id + '">' + p.stock + '</span> قطعة</span>';
    html += '<button class="btn-add-cart' + (isSignature ? ' btn-signature' : '') + '" onclick="addToCart(\'' + p.id + '\')"><i class="fa-solid fa-plus"></i> أضف</button>';
    html += '</div></div></div>';
  }
  container.innerHTML = html;
}

// ============================================================
// RENDER REVIEWS
// ============================================================
function renderReviews() {
  var container = document.getElementById('reviews-container');
  if (!container) return;
  var html = '';
  for (var i = 0; i < REVIEWS.length; i++) {
    var r = REVIEWS[i];
    var stars = '';
    for (var s = 0; s < 5; s++) {
      stars += s < r.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    html += '<div class="review-card">';
    html += '<div class="review-avatar">' + r.avatar + '</div>';
    html += '<div class="review-body">';
    html += '<div class="review-stars">' + stars + '</div>';
    html += '<p class="review-text">"' + r.text + '"</p>';
    html += '<span class="review-author">— ' + r.name + '</span>';
    html += '</div></div>';
  }
  container.innerHTML = html;
}

// ============================================================
// POPULATE DROPDOWNS (oven + label)
// ============================================================
function populateDropdowns() {
  var ovenSelect = document.getElementById('oven-product-select');
  var labelSelect = document.getElementById('label-product');
  var ids = Object.keys(PRODUCTS);
  for (var i = 0; i < ids.length; i++) {
    var p = PRODUCTS[ids[i]];
    if (!p) continue;
    if (ovenSelect) {
      var opt1 = document.createElement('option');
      opt1.value = p.id;
      opt1.textContent = p.name;
      ovenSelect.appendChild(opt1);
    }
    if (labelSelect) {
      var opt2 = document.createElement('option');
      opt2.value = p.id;
      opt2.textContent = p.name;
      labelSelect.appendChild(opt2);
    }
  }
}

// ============================================================
// PRODUCT PRICE DISPLAY
// ============================================================
function updateProductPriceDisplay(productId) {
  var priceSpan = document.getElementById('price-' + productId);
  if (!priceSpan) return;
  priceSpan.textContent = getPrice(productId).toFixed(2);
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================
function showNotification(message, type) {
  var container = document.getElementById('notification-container');
  if (!container) return;
  var icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', info: 'fa-circle-info', warning: 'fa-triangle-exclamation' };
  var el = document.createElement('div');
  el.className = 'notification-item ' + (type || 'success');
  el.innerHTML = '<i class="fa-solid ' + (icons[type] || icons.info) + '"></i> ' + message;
  container.appendChild(el);
  setTimeout(function () {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-10px)';
    el.style.transition = 'all 0.3s ease';
  }, 3000);
  setTimeout(function () { el.remove(); }, 3500);
}

// ============================================================
// CART SYSTEM
// ============================================================
function addToCart(productId) {
  if (!PRODUCTS[productId]) return;
  if (getStock(productId) <= 0) {
    showNotification('عذراً، ' + PRODUCTS[productId].name + ' نفد من المخزون!', 'error');
    return;
  }
  var size = PRODUCTS[productId].singleOnly ? 'single' : getSelectedSize(productId);
  var price = getPrice(productId);

  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId && cart[i].size === size) {
      cart[i].qty += 1;
      found = true;
      break;
    }
  }
  if (!found) {
    cart.push({ id: productId, size: size, price: price, qty: 1 });
  }

  setStock(productId, getStock(productId) - 1);
  updateAllStockUI();
  updateCartUI();
  updateFinancialData();
  showNotification('تمت إضافة ' + PRODUCTS[productId].name + ' إلى السلة!', 'success');
}

function removeFromCart(productId, size) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId && cart[i].size === size) {
      setStock(productId, getStock(productId) + cart[i].qty);
      cart.splice(i, 1);
      break;
    }
  }
  updateAllStockUI();
  updateCartUI();
  updateFinancialData();
}

function changeCartQty(productId, size, delta) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId && cart[i].size === size) {
      if (delta > 0) {
        if (getStock(productId) < delta) {
          showNotification('المخزون غير كافٍ!', 'error');
          return;
        }
        setStock(productId, getStock(productId) - delta);
        cart[i].qty += delta;
      } else {
        var removeQty = Math.min(cart[i].qty, -delta);
        setStock(productId, getStock(productId) + removeQty);
        cart[i].qty -= removeQty;
        if (cart[i].qty <= 0) {
          cart.splice(i, 1);
        }
      }
      break;
    }
  }
  updateAllStockUI();
  updateCartUI();
  updateFinancialData();
}

function updateCartUI() {
  var list = document.getElementById('cart-items-list');
  var totalSpan = document.getElementById('cart-total-sum');
  var badgeCount = document.getElementById('cart-count');
  var badgeTotal = document.getElementById('cart-total-badge');
  var checkoutBtn = document.getElementById('btn-goto-checkout');
  var deliveryFeeDisplay = document.getElementById('cart-delivery-fee-display');

  if (cart.length === 0) {
    list.innerHTML = '<div class="empty-cart-message"><i class="fa-solid fa-cookie"></i><p>سلتك فارغة تماماً الآن..</p><span>ابدأ بإضافة كوكيز Crumble اللذيذة!</span></div>';
    totalSpan.textContent = '0.00 د.أ';
    badgeCount.textContent = '0';
    badgeTotal.textContent = '0.00 د.أ';
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (deliveryFeeDisplay) deliveryFeeDisplay.innerHTML = '';
    return;
  }

  var html = '';
  var total = 0;
  var totalQty = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var prod = PRODUCTS[item.id];
    if (!prod) continue;
    var subtotal = item.price * item.qty;
    total += subtotal;
    totalQty += item.qty;
    var sizeLabel = item.size === 'large' ? 'كبير (عائلي)' : (item.size === 'single' ? 'مقاس واحد' : 'صغير');
    html += '<div class="cart-item-card">';
    html += '<div class="cart-item-info">';
    html += '<h5>' + prod.name + '</h5>';
    html += '<span class="item-size">' + sizeLabel + ' · ' + formatCurrency(item.price) + '</span>';
    html += '<div class="cart-item-qty">';
    html += '<button class="qty-btn" onclick="changeCartQty(\'' + item.id + '\',\'' + item.size + '\',-1)">−</button>';
    html += '<span>' + item.qty + '</span>';
    html += '<button class="qty-btn" onclick="changeCartQty(\'' + item.id + '\',\'' + item.size + '\',1)">+</button>';
    html += '<span class="cart-item-price">' + formatCurrency(subtotal) + '</span>';
    html += '</div></div>';
    html += '<button class="cart-item-remove" onclick="removeFromCart(\'' + item.id + '\',\'' + item.size + '\')"><i class="fa-solid fa-xmark"></i></button>';
    html += '</div>';
  }

  list.innerHTML = html;
  totalSpan.textContent = formatCurrency(total);
  badgeCount.textContent = totalQty;
  badgeTotal.textContent = formatCurrency(total);

  // Update delivery fee in cart sidebar
  var deliveryMethod = document.getElementById('checkout-delivery-method');
  var fee = 0;
  if (deliveryMethod) {
    var method = deliveryMethod.value;
    if (method === 'campus') fee = 0.50;
    else if (method === 'external') fee = 1.50;
  }
  if (deliveryFeeDisplay) {
    if (fee > 0) {
      deliveryFeeDisplay.innerHTML = '<span>رسوم التوصيل:</span> <strong>' + formatCurrency(fee) + '</strong>';
    } else {
      deliveryFeeDisplay.innerHTML = '<span>رسوم التوصيل:</span> <strong class="color-success">مجاناً</strong>';
    }
  }

  if (checkoutBtn) checkoutBtn.disabled = false;
}

// ============================================================
// UPDATE ALL STOCK UI
// ============================================================
function updateAllStockUI() {
  var ids = Object.keys(PRODUCTS);
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i];
    var stock = getStock(id);
    var stockEl = document.getElementById('stock-count-' + id);
    var badgeEl = document.getElementById('stock-badge-' + id);
    var invQty = document.getElementById('inv-qty-' + id);
    var invStatus = document.getElementById('inv-status-' + id);

    if (stockEl) stockEl.textContent = stock;
    if (badgeEl) {
      if (stock <= 0) {
        badgeEl.textContent = 'نفد من المخزون';
        badgeEl.style.background = '#FFEBEE';
        badgeEl.style.color = '#C62828';
      } else if (stock <= 5) {
        badgeEl.innerHTML = 'محدود: <span id="stock-count-' + id + '">' + stock + '</span> قطعة';
        badgeEl.style.background = '#FFF8E1';
        badgeEl.style.color = '#B76E00';
      } else {
        badgeEl.innerHTML = 'متوفر: <span id="stock-count-' + id + '">' + stock + '</span> قطعة';
        badgeEl.style.background = '#E8F5E9';
        badgeEl.style.color = '#1F9D57';
      }
    }
    if (invQty) invQty.textContent = stock;
    if (invStatus) {
      if (stock <= 0) { invStatus.textContent = 'نفد'; invStatus.className = 'status-pill red'; }
      else if (stock <= 5) { invStatus.textContent = 'منخفض'; invStatus.className = 'status-pill yellow'; }
      else { invStatus.textContent = 'متوفر'; invStatus.className = 'status-pill green'; }
    }
  }
}

function updateCartBadge() {
  var count = 0;
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    count += cart[i].qty;
    total += cart[i].price * cart[i].qty;
  }
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total-badge').textContent = formatCurrency(total);
}

// ============================================================
// CART SIDEBAR
// ============================================================
function openCartSidebar() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-sidebar-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-sidebar-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// CHECKOUT MODAL
// ============================================================
function openCheckoutModal() {
  if (cart.length === 0) { showNotification('السلة فارغة!', 'warning'); return; }
  populateCheckoutSummary();
  document.getElementById('checkout-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  flipVisaCard(false);
  selectPayment('cash');
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function populateCheckoutSummary() {
  var list = document.getElementById('checkout-items-list');
  var subtotalEl = document.getElementById('checkout-subtotal');
  var totalEl = document.getElementById('checkout-total');
  if (!list) return;

  var html = '';
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var prod = PRODUCTS[item.id];
    if (!prod) continue;
    var lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    var sizeLabel = item.size === 'large' ? 'كبير' : (item.size === 'single' ? 'مقاس واحد' : 'صغير');
    html += '<div class="checkout-item-row"><span>' + prod.name + ' × ' + item.qty + ' (' + sizeLabel + ')</span><strong>' + formatCurrency(lineTotal) + '</strong></div>';
  }
  list.innerHTML = html;
  subtotalEl.textContent = formatCurrency(subtotal);

  // Calculate delivery fee
  var method = document.getElementById('checkout-delivery-method').value;
  var fee = 0;
  if (method === 'campus') fee = 0.50;
  else if (method === 'external') fee = 1.50;
  document.getElementById('checkout-delivery-fee').textContent = formatCurrency(fee);
  totalEl.textContent = formatCurrency(subtotal + fee);
}

// ============================================================
// PAYMENT SELECTION
// ============================================================
function selectPayment(method) {
  var visaSection = document.getElementById('visa-card-section');
  var cashLabel = document.getElementById('payment-cash-label');
  var visaLabel = document.getElementById('payment-visa-label');
  if (!visaSection || !cashLabel || !visaLabel) return;

  var cashRadio = cashLabel.querySelector('input[type="radio"]');
  var visaRadio = visaLabel.querySelector('input[type="radio"]');

  if (method === 'cash') {
    visaSection.style.display = 'none';
    cashLabel.classList.add('active');
    visaLabel.classList.remove('active');
    if (cashRadio) cashRadio.checked = true;
    if (visaRadio) visaRadio.checked = false;
  } else {
    visaSection.style.display = 'block';
    visaLabel.classList.add('active');
    cashLabel.classList.remove('active');
    if (visaRadio) visaRadio.checked = true;
    if (cashRadio) cashRadio.checked = false;
  }
}

// ============================================================
// DELIVERY FEE
// ============================================================
function updateDeliveryFee() {
  var method = document.getElementById('checkout-delivery-method');
  if (!method) return;
  var val = method.value;
  var fee = 0;
  if (val === 'campus') fee = 0.50;
  else if (val === 'external') fee = 1.50;

  document.getElementById('checkout-delivery-fee').textContent = formatCurrency(fee);

  // Update cart sidebar delivery fee
  var cartFeeDisplay = document.getElementById('cart-delivery-fee-display');
  if (cartFeeDisplay) {
    if (fee > 0) {
      cartFeeDisplay.innerHTML = '<span>رسوم التوصيل:</span> <strong>' + formatCurrency(fee) + '</strong>';
    } else {
      cartFeeDisplay.innerHTML = '<span>رسوم التوصيل:</span> <strong class="color-success">مجاناً</strong>';
    }
  }

  // Recalculate total
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) subtotal += cart[i].price * cart[i].qty;
  document.getElementById('checkout-subtotal').textContent = formatCurrency(subtotal);
  document.getElementById('checkout-total').textContent = formatCurrency(subtotal + fee);
}

// ============================================================
// PLACE ORDER
// ============================================================
function placeOrder() {
  var name = document.getElementById('checkout-name').value.trim();
  var phone = document.getElementById('checkout-phone').value.trim();
  var address = document.getElementById('checkout-address').value.trim();
  var deliverySelect = document.getElementById('checkout-delivery-method');
  var deliveryLabel = deliverySelect.options[deliverySelect.selectedIndex].text;
  var deliveryVal = deliverySelect.value;
  var paymentMethod = document.querySelector('input[name="payment-method"]:checked');
  if (!paymentMethod) { showNotification('الرجاء اختيار طريقة الدفع', 'error'); return; }
  var paymentVal = paymentMethod.value;

  if (!name) { showNotification('الرجاء إدخال الاسم', 'error'); return; }
  if (!phone) { showNotification('الرجاء إدخال رقم الهاتف', 'error'); return; }
  if (!address) { showNotification('الرجاء إدخال عنوان التوصيل', 'error'); return; }

  if (paymentVal === 'visa') {
    var cardNum = document.getElementById('card-number').value.replace(/\D/g, '');
    if (cardNum.length < 13) { showNotification('الرجاء إدخال رقم بطاقة صحيح', 'error'); return; }
  }

  var subtotal = 0;
  var cartUnits = 0;
  for (var i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
    cartUnits += cart[i].qty;
  }

  var deliveryFee = 0;
  if (deliveryVal === 'campus') deliveryFee = 0.50;
  else if (deliveryVal === 'external') deliveryFee = 1.50;

  var total = subtotal + deliveryFee;
  var ref = generateRefNumber();

  financeRevenue += total;
  financeCosts += cartUnits * VAR_COST_PER_UNIT;
  updateFinancialData();

  // Populate invoice
  document.getElementById('inv-ref-num').textContent = ref;
  document.getElementById('inv-full-date').textContent = new Date().toLocaleDateString('ar-JO', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('inv-client-name').textContent = name;
  document.getElementById('inv-client-phone').textContent = phone;
  document.getElementById('inv-client-address').textContent = address;
  document.getElementById('inv-payment-method').textContent = paymentVal === 'cash' ? 'الدفع عند الاستلام' : 'بطاقة فيزا';
  document.getElementById('inv-delivery-method').textContent = deliveryLabel;

  var tbody = document.getElementById('invoice-items-body');
  var rows = '';
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var prod = PRODUCTS[item.id];
    if (!prod) continue;
    var sizeLabel = item.size === 'large' ? 'كبير' : (item.size === 'single' ? 'مقاس واحد' : 'صغير');
    rows += '<tr><td>' + prod.name + '</td><td>' + sizeLabel + '</td><td>' + item.qty + '</td><td>' + formatCurrency(item.price) + '</td><td>' + formatCurrency(item.price * item.qty) + '</td></tr>';
  }
  if (deliveryFee > 0) {
    rows += '<tr><td colspan="4">رسوم التوصيل</td><td>' + formatCurrency(deliveryFee) + '</td></tr>';
  }
  tbody.innerHTML = rows;

  document.getElementById('inv-total-amount').textContent = formatCurrency(total);

  addDbLog('[ORDER] Order placed — Ref: ' + ref + ' | Total: ' + formatCurrency(total), 'success-log');
  addDbLog('[INFO] Inventory updated — ' + cart.length + ' products deducted.', 'info-log');

  sendWhatsAppOrder(name, phone, address, ref, total, paymentVal, deliveryLabel);
  
  cart = [];
  updateCartUI();
  updateAllStockUI();
  updateCartBadge();

  closeCheckoutModal();
  document.getElementById('success-modal-overlay').classList.add('open');
  showNotification('✅ تم تأكيد الطلب بنجاح!', 'success');
}

function sendWhatsAppOrder(name, phone, address, ref, total, payment, delivery) {
  var items = '';
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var prod = PRODUCTS[item.id];
    if (!prod) continue;
    var sizeLabel = item.size === 'large' ? '\u0639\u0627\u0626\u0644\u064a' : (item.size === 'single' ? '\u0645\u0642\u0627\u0633 \u0648\u0627\u062d\u062f' : '\u0635\u063a\u064a\u0631');
    items += '\u2022 ' + prod.name + ' x' + item.qty + ' (' + sizeLabel + ')\n';
  }
  var payMethod = payment === 'cash' ? '\u0643\u0627\u0634' : '\u062a\u062d\u0648\u064a\u0644 \u0641\u064a\u0632\u0627';
  var msg = '\ud83d\uded2 \u0637\u0644\u0628 \u062c\u062f\u064a\u062f - Crumble & Co.\n'
    + '--------------------------------\n'
    + '\ud83d\udccb \u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u062a\u0648\u0631\u0629: ' + ref + '\n'
    + '\ud83d\udc64 \u0627\u0644\u0627\u0633\u0645: ' + name + '\n'
    + '\ud83d\udcde \u0627\u0644\u0647\u0627\u062a\u0641: ' + phone + '\n'
    + '\ud83d\udccd \u0627\u0644\u0639\u0646\u0648\u0627\u0646: ' + address + '\n'
    + '\ud83d\ude9a \u0627\u0644\u062a\u0648\u0635\u064a\u0644: ' + delivery + '\n'
    + '\ud83d\udcb3 \u0627\u0644\u062f\u0641\u0639: ' + payMethod + '\n'
    + '--------------------------------\n'
    + '\ud83d\uded0 \u0627\u0644\u0637\u0644\u0628\u0627\u062a:\n' + items + '\n'
    + '\ud83d\udcb0 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a: ' + formatCurrency(total);

  var a = document.createElement('a');
  a.href = 'https://wa.me/962780028321?text=' + encodeURIComponent(msg);
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function closeSuccessModal() {
  document.getElementById('success-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function printInvoice() {
  var invoiceContent = document.getElementById('printable-invoice-element').cloneNode(true);
  var win = window.open('', '', 'width=600,height=700');
  win.document.write('<html><head><title>فاتورة Crumble & Co.</title>');
  win.document.write('<style>body{font-family:sans-serif;padding:20px;direction:rtl;text-align:right}table{width:100%;border-collapse:collapse}th,td{padding:6px 8px;border-bottom:1px solid #ddd;text-align:right}th{background:#f5f0eb;font-size:12px}hr{border-top:1px dashed #ccc}.total{font-size:18px;font-weight:bold;text-align:left;margin-top:12px}.header{display:flex;justify-content:space-between;margin-bottom:12px}.footer{text-align:center;margin-top:16px;font-size:12px;color:#888}</style></head><body>');
  win.document.write(invoiceContent.innerHTML);
  win.document.write('</body></html>');
  win.document.close();
  setTimeout(function () { win.print(); }, 500);
}

function printStickerLabel() {
  var stickerContent = document.querySelector('.premium-tag-sticker');
  if (!stickerContent) return;
  stickerContent = stickerContent.cloneNode(true);
  var win = window.open('', '', 'width=400,height=500');
  win.document.write('<html><head><title>ملصق Crumble & Co.</title>');
  win.document.write('<style>body{font-family:sans-serif;padding:20px;direction:rtl;text-align:right}*{box-sizing:border-box}.sticker-border{border:2px dashed #C9A96E;border-radius:13px;padding:16px}.sticker-header{text-align:center;margin-bottom:12px}.sticker-body{text-align:center}.sticker-footer{display:flex;align-items:center;gap:12px;justify-content:center;margin-top:12px}.sticker-details-row{display:flex;justify-content:center;gap:20px;font-size:13px}.sticker-ingredients{font-size:12px;color:#888}.small-code{font-family:monospace;color:#aaa;font-size:11px}</style></head><body>');
  win.document.write(stickerContent.outerHTML);
  win.document.write('</body></html>');
  win.document.close();
  setTimeout(function () { win.print(); }, 500);
}

// ============================================================
// VISA CARD GRAPHICS
// ============================================================
function updateVisaCardGraphics() {
  var nameInput = document.getElementById('card-holder-name');
  var numInput = document.getElementById('card-number');
  var expiryInput = document.getElementById('card-expiry');
  var cvvInput = document.getElementById('card-cvv');

  document.getElementById('card-name-disp').textContent = (nameInput ? nameInput.value.toUpperCase() : '') || 'CRUMBLE CUSTOMER';

  var num = (numInput ? numInput.value.replace(/\D/g, '').slice(0, 16) : '');
  var formatted = '';
  for (var i = 0; i < num.length; i++) {
    if (i > 0 && i % 4 === 0) formatted += ' ';
    formatted += num[i];
  }
  document.getElementById('card-num-disp').textContent = formatted || '\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022';

  var exp = expiryInput ? expiryInput.value : '';
  if (exp.length === 2 && exp.indexOf('/') === -1) {
    exp = exp + '/';
    if (expiryInput) expiryInput.value = exp;
  }
  document.getElementById('card-expiry-disp').textContent = exp || 'MM/YY';

  var cvv = cvvInput ? cvvInput.value : '';
  document.getElementById('card-cvv-disp').textContent = cvv || '\u2022\u2022\u2022';
}

function flipVisaCard(flip) {
  var card = document.getElementById('visa-card-element');
  if (card) card.classList.toggle('flipped', !!flip);
}

// ============================================================
// ORG CHART
// ============================================================
var ORG_DETAILS = {
  ceo: { title: 'المدير العام', tasks: 'الإشراف العام على جميع أقسام المشروع، اتخاذ القرارات الاستراتيجية، مراقبة الأداء المالي والإداري، وتمثيل المشروع في فعاليات اليوم العلمي.', kpi: 'مؤشرات الأداء: تحقيق أهداف المبيعات، رضا الفريق، الالتزام بالميزانية.' },
  ops: { title: 'مدير العمليات', tasks: 'متابعة خطوط الإنتاج والإشراف على عملية الخبز اليومية، ضمان جودة المنتج النهائي، إدارة جداول العمل.', kpi: 'مؤشرات الأداء: عدد الكوكيز المنتج يومياً، نسبة الهدر، الالتزام بمواعيد التسليم.' },
  sales: { title: 'مدير التسويق والمبيعات', tasks: 'قيادة خطط الترويج في المعرض، إدارة حملات العينات المجانية، التفاعل مع العملاء، تطوير هوية العلامة.', kpi: 'مؤشرات الأداء: نمو المتابعين، معدل التحويل، عدد الطلبات المخصصة.' },
  finance: { title: 'مدير المالية والمحاسبة', tasks: 'إدارة التدفقات النقدية، تسعير المنتجات، حساب التكاليف والأرباح، إعداد التقارير المالية.', kpi: 'مؤشرات الأداء: هامش الربح، نقطة التعادل، دقة التسعير.' },
  it: { title: 'مدير تكنولوجيا المعلومات', tasks: 'تطوير وصيانة التطبيق الإلكتروني والتطبيقات، إدارة قاعدة البيانات، تحليلات الزوار والتحويل.', kpi: 'مؤشرات الأداء: وقت تشغيل التطبيق، سرعة التحميل، رضا المستخدم.' },
  prod_sup: { title: 'مشرف الإنتاج', tasks: 'الإشراف على مراحل العجن والتشكيل والخبز، التأكد من نظافة المعدات، تدريب العمال.', kpi: 'مؤشرات الأداء: معدل الإنتاج، جودة المنتج.' },
  log_sup: { title: 'مشرف اللوجستيات', tasks: 'إدارة المخزون، تتبع المواد الخام، تجهيز الطلبات للتسليم.', kpi: 'مؤشرات الأداء: دقة المخزون، وقت التجهيز.' },
  cs_sup: { title: 'مشرف خدمة العملاء', tasks: 'استقبال الطلبات، الرد على الاستفسارات عبر التطبيق، متابعة رضا العملاء.', kpi: 'مؤشرات الأداء: وقت الاستجابة، تقييم العملاء.' },
  qa_lead: { title: 'رئيس قسم الجودة', tasks: 'فحص جودة المواد الخام والمنتج النهائي، التأكد من مطابقة المواصفات.', kpi: 'مؤشرات الأداء: نسبة المطابقة، تقارير الجودة.' },
  hr_lead: { title: 'رئيس قسم الموارد البشرية', tasks: 'إدارة فريق العمل، جدولة المناوبات، حل النزاعات.', kpi: 'مؤشرات الأداء: رضا الفريق، نسبة الغياب.' }
};

function showOrgDetails(role) {
  var box = document.getElementById('org-details-box');
  var data = ORG_DETAILS[role];
  if (!data) { box.innerHTML = '<i class="fa-solid fa-circle-info"></i> اختر منصباً لعرض التفاصيل.'; return; }
  box.innerHTML = '<strong>' + data.title + '</strong><br><br><strong>المهام:</strong> ' + data.tasks + '<br><br><strong>' + data.kpi + '</strong>';
  box.style.borderRightColor = '#C9A96E';
}

// ============================================================
// FLOW DETAILS
// ============================================================
var FLOW_INFO = {
  1: { title: 'التجهيز واستلام المواد', detail: 'يتم فحص المواد الخام عند الاستلام: التحقق من تاريخ صلاحية الزبدة البلجيكية، وزن الطحين والكاكاو، ودرجة حرارة التخزين. يجب تسجيل كل شحنة واردة في سجل المخزون.' },
  2: { title: 'الخلط والدمج', detail: 'تخلط الزبدة مع السكر أولاً لمدة 5 دقائق حتى يصبح القوام كريمياً فاتحاً. ثم يُضاف البيض والفانيلا، وبعدها المكونات الجافة بالتدريج. لا تزيد مدة الخلط عن 8 دقائق.' },
  3: { title: 'التشكيل والتوزيع', detail: 'تُقطع العجينة إلى كرات متساوية وزن 50 غراماً للقطعة الصغيرة و 250 غراماً للقطعة العائلية. توضع في صوانٍ مبطنة بورق الزبدة مع مسافات متساوية.' },
  4: { title: 'الخبز بالفرن', detail: 'يسخن الفرن إلى 170 درجة مئوية. تخبز القطع الصغيرة لمدة 10-12 دقيقة. يجب مراقبة اللون الذهبي عند الأطراف مع بقاء القلب طرياً.' },
  5: { title: 'التبريد والجودة', detail: 'تترك الكوكيز لتبرد على الرف لمدة 15 دقيقة كاملة قبل التغليف. يتم فحص عينة من كل دفعة: القوام، الطعم، المظهر العام.' }
};

function showFlowDetails(step) {
  var box = document.getElementById('flow-details-box');
  var data = FLOW_INFO[step];
  if (data) box.innerHTML = '<strong>' + data.title + '</strong><br>' + data.detail;
}

// ============================================================
// BREAK-EVEN CALCULATOR
// ============================================================
function calculateBreakEven() {
  var fixed = parseFloat(document.getElementById('slider-fixed-costs').value);
  var varCost = parseFloat(document.getElementById('slider-var-cost').value);
  var sellPrice = parseFloat(document.getElementById('slider-sell-price').value);

  document.getElementById('val-fixed-costs').textContent = fixed.toFixed(2);
  document.getElementById('val-var-cost').textContent = varCost.toFixed(2);
  document.getElementById('val-sell-price').textContent = sellPrice.toFixed(2);

  var contribution = sellPrice - varCost;
  var beQty = 0;
  if (contribution > 0) beQty = Math.ceil(fixed / contribution);
  var beSales = beQty * sellPrice;

  document.getElementById('calc-be-qty').textContent = beQty;
  document.getElementById('calc-be-sales').textContent = beSales.toFixed(2);
}

// ============================================================
// PUSH NOTIFICATION SIMULATOR
// ============================================================
function sendMockPushNotification() {
  var title = document.getElementById('push-title').value || 'إشعار ترويجي';
  var message = document.getElementById('push-message').value || 'وصلت عروض جديدة!';
  showNotification('\uD83D\uDCE2 ' + title + ': ' + message, 'info');
  addDbLog('[PUSH] Notification sent: "' + title + '"', 'info-log');
  addChatMessage('النظام', '\uD83D\uDCE2 ' + title + ' — ' + message, 'system');
}

// ============================================================
// DB LOG
// ============================================================
function addDbLog(message, type) {
  var container = document.getElementById('db-dynamic-logs');
  if (!container) return;
  var el = document.createElement('div');
  el.className = 'log-line ' + (type || 'success-log');
  var now = new Date();
  el.textContent = '[' + now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0') + ':' + now.getSeconds().toString().padStart(2,'0') + '] ' + message;
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

// ============================================================
// OVEN SIMULATION
// ============================================================
function startBakeSimulation() {
  if (isOvenBaking) { showNotification('الفرن مشغول بالفعل!', 'warning'); return; }
  isOvenBaking = true;
  var btn = document.getElementById('btn-start-bake');
  var timerDisplay = document.getElementById('oven-timer');
  var glowEl = document.getElementById('oven-glow-element');
  var logEl = document.getElementById('oven-log');
  var cookies = document.querySelectorAll('.raw-cookie');
  var selectEl = document.getElementById('oven-product-select');
  var tempEl = document.getElementById('oven-temp');
  var productId = selectEl.value;
  var temp = tempEl.value;

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جاري الخبز...';
  glowEl.classList.add('active');
  logEl.textContent = '\uD83D\uDD25 بدء دورة الخبز لـ ' + PRODUCTS[productId].name + ' عند ' + temp + '°م...';
  addDbLog('[OVEN] Baking started: ' + PRODUCTS[productId].name + ' @ ' + temp + '°C', 'info-log');

  var seconds = 10;
  timerDisplay.textContent = seconds + 's';
  var interval = setInterval(function () {
    seconds--;
    timerDisplay.textContent = seconds + 's';
    if (seconds <= 0) {
      clearInterval(interval);
      for (var i = 0; i < cookies.length; i++) cookies[i].classList.add('baked');
      glowEl.classList.remove('active');
      timerDisplay.textContent = 'DONE!';
      logEl.textContent = '\u2705 اكتملت دورة الخبز! تمت إضافة 5 وحدات من ' + PRODUCTS[productId].name + ' إلى المخزون.';
      addDbLog('[OVEN] Batch complete: +5 ' + PRODUCTS[productId].name, 'success-log');
      setStock(productId, getStock(productId) + 5);
      updateAllStockUI();
      updateFinancialData();
      showNotification('\uD83D\uDD25 تم خبز 5 حبات من ' + PRODUCTS[productId].name + '!', 'success');
      setTimeout(function () {
        for (var i = 0; i < cookies.length; i++) cookies[i].classList.remove('baked');
        timerDisplay.textContent = 'READY';
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-fire"></i> ابدأ الخبز';
        isOvenBaking = false;
      }, 1500);
    }
  }, 1000);
}

// ============================================================
// INVENTORY TABLE
// ============================================================
function renderInventoryTable() {
  var tbody = document.getElementById('inventory-products-body');
  if (!tbody) return;
  var html = '';
  var ids = Object.keys(PRODUCTS);
  for (var i = 0; i < ids.length; i++) {
    var p = PRODUCTS[ids[i]];
    if (!p) continue;
    var stock = p.stock;
    var statusClass = stock <= 0 ? 'red' : (stock <= 5 ? 'yellow' : 'green');
    var statusText = stock <= 0 ? 'نفد' : (stock <= 5 ? 'منخفض' : 'متوفر');
    html += '<tr>';
    html += '<td class="bold-text">' + p.name + '</td>';
    html += '<td id="inv-qty-' + p.id + '">' + stock + '</td>';
    html += '<td><span class="status-pill ' + statusClass + '" id="inv-status-' + p.id + '">' + statusText + '</span></td>';
    html += '<td>';
    html += '<button class="btn-inv-adjust minus" onclick="adjustInventory(\'' + p.id + '\',-1)">−</button>';
    html += '<button class="btn-inv-adjust plus" onclick="adjustInventory(\'' + p.id + '\',1)">+</button>';
    html += '</td></tr>';
  }
  tbody.innerHTML = html;
}

function adjustInventory(productId, delta) {
  var newStock = Math.max(0, getStock(productId) + delta);
  setStock(productId, newStock);
  updateAllStockUI();
  var sign = delta > 0 ? '+' : '';
  addDbLog('[INV] Adjusted ' + sign + delta + ' ' + PRODUCTS[productId].name + ' (stock: ' + newStock + ')', 'info-log');
}

// ============================================================
// RAW MATERIALS
// ============================================================
function refillRawMaterial(material) {
  var mat = RAW_MATERIALS[material];
  if (!mat) return;
  mat.qty += mat.refill;
  var el = document.getElementById('raw-' + material);
  if (el) el.textContent = mat.qty.toFixed(1) + ' ' + mat.unit;
  addDbLog('[RAW] Refilled ' + mat.name + ' +' + mat.refill + ' ' + mat.unit + ' (total: ' + mat.qty.toFixed(1) + ')', 'info-log');
  showNotification('تم تموين ' + mat.name + ' بنجاح!', 'success');
}

// ============================================================
// LABEL GENERATOR
// ============================================================
function generateProductLabel() {
  var select = document.getElementById('label-product');
  var weight = document.getElementById('label-weight').value;
  var date = document.getElementById('label-date').value;
  var prodId = select.value;
  var prod = PRODUCTS[prodId];
  if (!prod) return;

  document.getElementById('sticker-title').textContent = prod.name;
  document.getElementById('sticker-weight').textContent = weight;
  document.getElementById('sticker-date').textContent = date;
  document.getElementById('sticker-ingredients-text').textContent = CATEGORY_INGREDIENTS[prod.category] || prod.ingredients;
  var codeEl = document.querySelector('.small-code');
  if (codeEl) codeEl.textContent = 'CODE: ' + prod.code + '-' + (prod.codeSuffix || '250');
}

// ============================================================
// CHAT SIMULATOR
// ============================================================
function addChatMessage(sender, text, type) {
  var container = document.getElementById('chat-messages-container');
  if (!container) return;
  var el = document.createElement('div');
  el.className = 'chat-msg ' + (type || 'incoming');
  if (type === 'system') {
    el.innerHTML = text;
  } else {
    el.innerHTML = '<strong>' + sender + ':</strong><p>' + text + '</p><span class="chat-time">قبل لحظات</span>';
  }
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

function sendChatReply(replyKey) {
  var replies = {
    'rose-available': 'نعم متوفرة وطازجة وسعر الكبير 7 د.أ.. تفضل للجناح!',
    'visa-ok': 'أهلاً بك! نعم ندعم الدفع الإلكتروني ببطاقات الفيزا عبر التطبيق.',
    'hot-cookie': 'الكوكيز تخرج ساخنة من الفرن الآن وننتظرك لتذوقها!'
  };
  var text = replies[replyKey] || 'شكراً لتواصلك مع Crumble & Co.';
  addChatMessage('فريق Crumble', text, 'outgoing');
  addDbLog('[CHAT] Auto-reply sent: "' + text.slice(0, 30) + '..."', 'info-log');
}

// ============================================================
// LOYALTY CALCULATOR
// ============================================================
function calculateLoyaltyPoints() {
  var spend = parseFloat(document.getElementById('loyalty-spend').value) || 0;
  var points = Math.floor(spend * 10);
  document.getElementById('loyalty-points').textContent = points + ' نقطة';
  var awardEl = document.getElementById('loyalty-award-title');
  if (!awardEl) return;
  if (points >= 500) awardEl.textContent = '\uD83C\uDFC6 قسيمة خصم 20%!';
  else if (points >= 300) awardEl.textContent = '\uD83C\uDF81 علبة كيكة مجانية!';
  else if (points >= 150) awardEl.textContent = '\uD83C\uDF6A حبة كوكيز كلاسيك مجانية!';
  else if (points >= 50) awardEl.textContent = '\uD83C\uDF89 خصم 10% على الطلب التالي!';
  else awardEl.textContent = '\uD83D\uDCA9 اجمع 50+ نقطة للمكافآت!';
}

// ============================================================
// FINANCIAL DATA
// ============================================================
function updateFinancialData() {
  var totalSales = 0;
  for (var i = 0; i < cart.length; i++) totalSales += cart[i].price * cart[i].qty;
  var currentRevenue = 272.70 + totalSales;
  var cartUnits = 0;
  for (var i = 0; i < cart.length; i++) cartUnits += cart[i].qty;
  var currentCosts = 145.00 + (cartUnits * VAR_COST_PER_UNIT);
  var netProfit = currentRevenue - currentCosts;
  var roi = currentCosts > 0 ? (netProfit / currentCosts) * 100 : 0;

  document.getElementById('fin-total-revenue').textContent = formatCurrency(currentRevenue);
  document.getElementById('fin-total-costs').textContent = formatCurrency(currentCosts);
  document.getElementById('fin-net-profit').textContent = formatCurrency(netProfit);
  document.getElementById('fin-roi').textContent = roi.toFixed(1) + '%';

  document.getElementById('p-rev-sales').textContent = '+' + currentRevenue.toFixed(2);
  document.getElementById('p-rev-total').textContent = currentRevenue.toFixed(2);
  var varCosts = 60.75 + (cartUnits * VAR_COST_PER_UNIT);
  document.getElementById('p-cost-fixed').textContent = '-' + FIXED_COST.toFixed(2);
  document.getElementById('p-cost-var').textContent = '-' + varCosts.toFixed(2);
  var totalCosts = FIXED_COST + varCosts;
  document.getElementById('p-cost-total').textContent = totalCosts.toFixed(2);
  document.getElementById('p-net-profit').textContent = formatCurrency(currentRevenue - totalCosts);
  var margin = currentRevenue > 0 ? ((currentRevenue - totalCosts) / currentRevenue * 100) : 0;
  document.getElementById('p-profit-margin').textContent = margin.toFixed(1) + '%';
}

function resetFinanceSimulator() {
  financeRevenue = 272.70;
  financeCosts = 145.00;
  orderCount = 152;
  cart = [];
  var defaults = {
    classic: 30, chocolate: 25, oreo: 28, nutella: 22,
    hearts: 20, kaitlyn: 24, cookiecake: 32
  };
  var keys = Object.keys(defaults);
  for (var i = 0; i < keys.length; i++) {
    if (PRODUCTS[keys[i]]) PRODUCTS[keys[i]].stock = defaults[keys[i]];
  }
  updateAllStockUI();
  updateCartUI();
  updateCartBadge();
  updateFinancialData();
  addDbLog('[FINANCE] Simulator reset to default values.', 'header-log');
  showNotification('تم إعادة تصفير المحاسبة!', 'info');
}

// ============================================================
// OPERATING HOURS
// ============================================================
function updateOperatingHoursCalculations() {
  var hours = parseInt(document.getElementById('slider-operating-hours').value);
  document.getElementById('display-op-hours').textContent = hours;
  document.getElementById('target-total-capacity').textContent = (hours * 15) + ' قطعة';
  document.getElementById('actual-total-baked').textContent = Math.round(hours * 15 * 1.5) + ' قطعة';
}

// ============================================================
// NAVIGATION TABS
// ============================================================
(function () {
  var navTabs = document.querySelectorAll('.nav-tab');
  for (var i = 0; i < navTabs.length; i++) {
    navTabs[i].addEventListener('click', function () {
      var targetId = this.getAttribute('data-target');
      var allTabs = document.querySelectorAll('.nav-tab');
      for (var j = 0; j < allTabs.length; j++) allTabs[j].classList.remove('active');
      var allContent = document.querySelectorAll('.tab-content');
      for (var j = 0; j < allContent.length; j++) allContent[j].classList.remove('active');
      this.classList.add('active');
      var target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  }

  var sideTabs = document.querySelectorAll('.side-tab');
  for (var i = 0; i < sideTabs.length; i++) {
    sideTabs[i].addEventListener('click', function () {
      var subId = this.getAttribute('data-sub');
      var allSide = document.querySelectorAll('.side-tab');
      for (var j = 0; j < allSide.length; j++) allSide[j].classList.remove('active');
      var allSub = document.querySelectorAll('.sub-tab-content');
      for (var j = 0; j < allSub.length; j++) allSub[j].classList.remove('active');
      this.classList.add('active');
      var target = document.getElementById(subId);
      if (target) target.classList.add('active');
    });
  }

  var cartBtn = document.getElementById('cart-trigger-btn');
  if (cartBtn) cartBtn.addEventListener('click', openCartSidebar);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (document.getElementById('success-modal-overlay').classList.contains('open')) closeSuccessModal();
      else if (document.getElementById('checkout-modal-overlay').classList.contains('open')) closeCheckoutModal();
      else if (document.getElementById('cart-sidebar').classList.contains('open')) closeCartSidebar();
    }
  });
})();

// ============================================================
// QR CODE
// ============================================================
function downloadQR() {
  var a = document.createElement('a');
  a.href = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=file:///C:/Users/abood/AppData/Local/Temp/opencode/index.html';
  a.download = 'crumble-qr.png';
  a.click();
  showNotification('تم تحميل QR Code', 'success');
}

function shareSite() {
  var msg = '🍪 جرب كوكيز Crumble & Co. الطازج!\nhttps://wa.me/962780028321';
  var a = document.createElement('a');
  a.href = 'https://wa.me/?text=' + encodeURIComponent(msg);
  a.target = '_blank';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ============================================================
// COMMENTS SYSTEM
// ============================================================
var commentsData = JSON.parse(localStorage.getItem('crumbleComments') || '[]');
var commentStarRating = 0;

function initCommentStars() {
  var container = document.getElementById('comment-star-rating');
  if (!container) return;
  var stars = container.querySelectorAll('i');
  for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function() {
      commentStarRating = parseInt(this.getAttribute('data-star'));
      updateCommentStars(commentStarRating);
    });
    stars[i].addEventListener('mouseenter', function() {
      updateCommentStars(parseInt(this.getAttribute('data-star')));
    });
    stars[i].addEventListener('mouseleave', function() {
      updateCommentStars(commentStarRating);
    });
  }
}

function updateCommentStars(rating) {
  var container = document.getElementById('comment-star-rating');
  if (!container) return;
  var stars = container.querySelectorAll('i');
  for (var i = 0; i < stars.length; i++) {
    var starVal = parseInt(stars[i].getAttribute('data-star'));
    if (starVal <= rating) {
      stars[i].className = 'fa-solid fa-star active-star';
    } else {
      stars[i].className = 'fa-regular fa-star';
    }
  }
}

function addComment() {
  var name = document.getElementById('comment-name').value.trim();
  var text = document.getElementById('comment-text').value.trim();
  if (!name) { showNotification('الرجاء إدخال الاسم', 'error'); return; }
  if (!text) { showNotification('الرجاء كتابة التعليق', 'error'); return; }
  if (commentStarRating === 0) { showNotification('الرجاء اختيار التقييم', 'error'); return; }

  var comment = {
    id: Date.now(),
    name: name,
    text: text,
    rating: commentStarRating,
    date: new Date().toLocaleDateString('ar-JO', { year: 'numeric', month: 'long', day: 'numeric' })
  };

  commentsData.unshift(comment);
  localStorage.setItem('crumbleComments', JSON.stringify(commentsData));

  document.getElementById('comment-name').value = '';
  document.getElementById('comment-text').value = '';
  commentStarRating = 0;
  updateCommentStars(0);

  renderComments();
  showNotification('تم نشر تعليقك! شكراً لك 🎉', 'success');
}

function deleteComment(id) {
  commentsData = commentsData.filter(function(c) { return c.id !== id; });
  localStorage.setItem('crumbleComments', JSON.stringify(commentsData));
  renderComments();
  showNotification('تم حذف التعليق', 'info');
}

function renderComments() {
  var container = document.getElementById('comments-list');
  if (!container) return;
  if (commentsData.length === 0) {
    container.innerHTML = '<p class="no-comments">لا توجد تعليقات بعد.. كن أول من يعلق!</p>';
    return;
  }
  var html = '';
  for (var i = 0; i < commentsData.length; i++) {
    var c = commentsData[i];
    var stars = '';
    for (var s = 1; s <= 5; s++) {
      stars += s <= c.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    html += '<div class="comment-card">'
      + '<div class="comment-header">'
      + '<span class="comment-avatar">' + c.name.charAt(0) + '</span>'
      + '<div>'
      + '<h5>' + c.name + '</h5>'
      + '<div class="comment-stars">' + stars + '</div>'
      + '</div>'
      + '<span class="comment-date">' + c.date + '</span>'
      + '<button class="comment-delete-btn" onclick="deleteComment(' + c.id + ')" title="حذف"><i class="fa-solid fa-trash-can"></i></button>'
      + '</div>'
      + '<p class="comment-text">' + c.text + '</p>'
      + '</div>';
  }
  container.innerHTML = html;
}

// ============================================================
// INIT
// ============================================================
(function init() {
  renderProducts();
  renderReviews();
  renderComments();
  initCommentStars();
  populateDropdowns();
  renderInventoryTable();
  updateAllStockUI();
  updateCartUI();
  updateFinancialData();
  calculateBreakEven();
  calculateLoyaltyPoints();
  updateOperatingHoursCalculations();
  generateProductLabel();
  selectPayment('cash');
  document.getElementById('visa-card-section').style.display = 'none';
  addDbLog('[SYSTEM] Application initialized successfully.', 'header-log');
  addDbLog('[INFO] Crumble & Co. v3.0 — Science Day 2026', 'info-log');
})();
