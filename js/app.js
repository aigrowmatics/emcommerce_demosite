// ===== PRODUCT DATA =====
const PRODUCTS = [
  { id:1, name:"Premium Wireless Headphones", category:"Electronics", price:2999, mrp:5999, discount:50, rating:4.8, reviews:2341, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", badge:"Bestseller", colors:["#1a1a2e","#e63946","#fff"], sizes:[], brand:"SoundPro", stock:45, description:"Experience premium audio with our wireless headphones featuring active noise cancellation, 30-hour battery life, and studio-quality sound.", specs:{Driver:"40mm Dynamic","Frequency Response":"20Hz–20kHz","Battery":"30 Hours","Connectivity":"Bluetooth 5.2","Weight":"250g"} },
  { id:2, name:"Slim Fit Cotton Shirt", category:"Fashion", price:799, mrp:1499, discount:47, rating:4.5, reviews:876, image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", badge:"New", colors:["#fff","#4cc9f0","#1a1a2e"], sizes:["S","M","L","XL","XXL"], brand:"StyleHub", stock:120, description:"Crafted from 100% organic cotton, this slim-fit shirt offers unmatched comfort and style for any occasion.", specs:{Material:"100% Cotton",Fit:"Slim Fit",Occasion:"Casual/Formal","Care":"Machine Wash"} },
  { id:3, name:"Smart Running Shoes", category:"Sports", price:3499, mrp:5499, discount:36, rating:4.7, reviews:1203, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", badge:"Hot", colors:["#ff6b35","#1a1a2e","#fff"], sizes:["6","7","8","9","10","11"], brand:"RunMax", stock:67, description:"Engineered for peak performance with advanced cushioning technology, breathable mesh upper, and durable rubber outsole.", specs:{Upper:"Breathable Mesh",Sole:"Rubber",Technology:"AirCushion Pro",Weight:"280g",Waterproof:"Yes"} },
  { id:4, name:"Stainless Steel Water Bottle", category:"Home", price:599, mrp:999, discount:40, rating:4.6, reviews:3421, image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80", badge:"Top Rated", colors:["#silver","#e63946","#06d6a0"], sizes:["500ml","750ml","1L"], brand:"HydraLife", stock:200, description:"Keep your beverages at the perfect temperature for 24 hours cold or 12 hours hot with our double-walled insulated bottle.", specs:{Material:"304 Stainless Steel","Capacity":"750ml",Insulation:"Double Wall",BPA:"Free","Warranty":"Lifetime"} },
  { id:5, name:"Mechanical Gaming Keyboard", category:"Electronics", price:4499, mrp:7999, discount:44, rating:4.9, reviews:892, image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80", badge:"Pro Pick", colors:["#1a1a2e"], sizes:[], brand:"KeyMaster", stock:34, description:"Dominate every game with ultra-responsive mechanical switches, customizable RGB backlighting, and anti-ghosting technology.", specs:{Switches:"Cherry MX Red",Layout:"TKL",RGB:"16.7M Colors","Connection":"USB-C","Warranty":"3 Years"} },
  { id:6, name:"Yoga Mat Premium", category:"Sports", price:1299, mrp:2499, discount:48, rating:4.4, reviews:567, image:"https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80", badge:"Eco", colors:["#06d6a0","#e63946","#4cc9f0"], sizes:["Standard","Wide"], brand:"ZenFit", stock:89, description:"Our eco-friendly premium yoga mat provides exceptional grip, cushioning, and durability for all yoga styles and fitness routines.", specs:{Material:"Natural Rubber",Thickness:"6mm",Texture:"Anti-Slip",Size:'68" x 24"',Care:"Wipe Clean"} },
  { id:7, name:"Designer Tote Bag", category:"Fashion", price:1899, mrp:3499, discount:46, rating:4.3, reviews:445, image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80", badge:"Trending", colors:["#c8a26e","#1a1a2e","#fff"], sizes:[], brand:"LuxCarry", stock:56, description:"Elevate your everyday style with this spacious designer tote crafted from genuine vegan leather with gold-tone hardware.", specs:{Material:"Vegan Leather",Dimensions:'15" x 12" x 4"',Lining:"Polyester",Pockets:"4 Internal, 1 External","Closure":"Magnetic Snap"} },
  { id:8, name:"Smart Fitness Watch", category:"Electronics", price:5999, mrp:9999, discount:40, rating:4.7, reviews:1876, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", badge:"Smart", colors:["#1a1a2e","#silver","#e63946"], sizes:["S/M","L/XL"], brand:"FitTrack", stock:23, description:"Track your health metrics 24/7 with GPS, heart rate monitor, sleep tracking, SpO2 sensor, and 7-day battery life.", specs:{Display:"1.4\" AMOLED","Battery":"7 Days","Water Resistance":"50m ATM",Sensors:"HR, SpO2, GPS","Compatibility":"iOS & Android"} },
  { id:9, name:"Ceramic Coffee Mug Set", category:"Home", price:899, mrp:1799, discount:50, rating:4.5, reviews:234, image:"https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80", badge:"Gift Ready", colors:["#fff","#1a1a2e","#e63946"], sizes:["Set of 2","Set of 4","Set of 6"], brand:"BrewLove", stock:112, description:"Handcrafted ceramic mugs perfect for your morning ritual. Each set comes beautifully packaged, making them the perfect gift.", specs:{Material:"Food-grade Ceramic","Capacity":"350ml",Dishwasher:"Safe",Microwave:"Safe","Set Includes":"Mugs + Coasters"} },
  { id:10, name:"Running Shorts Pro", category:"Sports", price:699, mrp:1299, discount:46, rating:4.2, reviews:789, image:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80", badge:"Active", colors:["#1a1a2e","#e63946","#4cc9f0"], sizes:["XS","S","M","L","XL"], brand:"SpeedRun", stock:145, description:"Lightweight, moisture-wicking running shorts with built-in liner, reflective details, and zippered pocket for your essentials.", specs:{Material:"87% Polyester, 13% Elastane",Lining:"Built-in",Pockets:"2 Side + 1 Zip","Length":"7-inch",Feature:"Quick Dry"} },
  { id:11, name:"Bamboo Desk Organizer", category:"Home", price:1199, mrp:1999, discount:40, rating:4.6, reviews:312, image:"https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80", badge:"Eco-Friendly", colors:["#natural"], sizes:[], brand:"GreenDesk", stock:78, description:"Keep your workspace tidy with this sustainable bamboo desk organizer featuring 8 compartments, a phone stand, and cable management.", specs:{Material:"Sustainable Bamboo",Compartments:"8",Dimensions:'12" x 8" x 5"',Assembly:"Tool-Free",Finish:"Natural Lacquer"} },
  { id:12, name:"Polarized Sunglasses", category:"Fashion", price:1499, mrp:2999, discount:50, rating:4.4, reviews:654, image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80", badge:"UV400", colors:["#1a1a2e","#c8a26e"], sizes:[], brand:"SunShield", stock:92, description:"Protect your eyes in style with 100% UV400 polarized lenses that reduce glare while delivering crystal-clear vision.", specs:{"Lens Material":"Polycarbonate","Frame Material":"Acetate","UV Protection":"400","Polarized":"Yes","Case":"Included"} },
];

const CATEGORIES = [
  { name:"Electronics", emoji:"💻", count:148 },
  { name:"Fashion", emoji:"👗", count:324 },
  { name:"Sports", emoji:"⚽", count:89 },
  { name:"Home", emoji:"🏠", count:213 },
  { name:"Beauty", emoji:"💄", count:167 },
  { name:"Books", emoji:"📚", count:92 },
];

// ===== CART =====
const Cart = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  save() { localStorage.setItem('cart', JSON.stringify(this.items)); Cart.updateUI(); },
  add(productId, qty=1, variant='') {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const key = `${productId}-${variant}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) { existing.qty += qty; } 
    else { this.items.push({ key, productId, name:product.name, price:product.price, image:product.image, variant, qty }); }
    this.save();
    Toast.show(`"${product.name}" added to cart!`, 'success');
  },
  remove(key) { this.items = this.items.filter(i => i.key !== key); this.save(); },
  updateQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (item) { item.qty = Math.max(1, qty); this.save(); }
  },
  getTotal() { return this.items.reduce((s, i) => s + i.price * i.qty, 0); },
  getCount() { return this.items.reduce((s, i) => s + i.qty, 0); },
  clear() { this.items = []; this.save(); },
  updateUI() {
    const count = Cart.getCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ===== WISHLIST =====
const Wishlist = {
  items: JSON.parse(localStorage.getItem('wishlist') || '[]'),
  save() { localStorage.setItem('wishlist', JSON.stringify(this.items)); },
  toggle(productId) {
    const idx = this.items.indexOf(productId);
    if (idx > -1) { this.items.splice(idx, 1); Toast.show('Removed from wishlist'); }
    else { this.items.push(productId); Toast.show('Added to wishlist ❤️', 'success'); }
    this.save();
  },
  has(productId) { return this.items.includes(productId); }
};

// ===== TOAST =====
const Toast = {
  show(msg, type='info') {
    let container = document.querySelector('.toast-container');
    if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.animation = 'slideOut 0.3s ease forwards'; setTimeout(() => toast.remove(), 300); }, 3000);
  }
};

// ===== HELPERS =====
function formatPrice(n) { return '₹' + n.toLocaleString('en-IN'); }
function getStars(r) { const full=Math.floor(r), half=r%1>=0.5?1:0, empty=5-full-half; return '★'.repeat(full)+(half?'½':'')+'☆'.repeat(empty); }

function renderProductCard(p, compact=false) {
  const inWishlist = Wishlist.has(p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-actions">
        <button class="product-action-btn wishlist-btn" onclick="toggleWishlist(${p.id},this)" title="Wishlist">
          <span>${inWishlist ? '❤️' : '🤍'}</span>
        </button>
        <button class="product-action-btn" onclick="quickView(${p.id})" title="Quick View">👁️</button>
      </div>
      ${p.badge ? `<div class="product-badge"><span class="badge badge-accent">${p.badge}</span></div>` : ''}
    </div>
    <div class="product-body">
      <div class="product-cat">${p.category}</div>
      <div class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
        <span class="rating-count">(${p.reviews.toLocaleString()})</span>
      </div>
      <div class="product-price">
        <span class="price-current">${formatPrice(p.price)}</span>
        <span class="price-original">${formatPrice(p.mrp)}</span>
        <span class="price-discount">${p.discount}% off</span>
      </div>
      <button class="product-add-btn" onclick="Cart.add(${p.id})">🛒 Add to Cart</button>
    </div>
  </div>`;
}

function toggleWishlist(id, btn) {
  Wishlist.toggle(id);
  btn.querySelector('span').textContent = Wishlist.has(id) ? '❤️' : '🤍';
}
function quickView(id) {
  window.location.href = `product.html?id=${id}`;
}

// ===== HEADER =====
function buildHeader(activePage='') {
  const navLinks = [
    {name:'Home', href:'index.html'},
    {name:'Electronics', href:'products.html?cat=Electronics'},
    {name:'Fashion', href:'products.html?cat=Fashion'},
    {name:'Sports', href:'products.html?cat=Sports'},
    {name:'Home & Living', href:'products.html?cat=Home'},
    {name:'Deals', href:'products.html?sort=discount'},
    {name:'New Arrivals', href:'products.html?sort=new'},
  ];
  return `
  <header class="header">
    <div class="header-top">🚚 Free shipping on orders above <span>₹999</span> | Use code <span>SAVE20</span> for 20% off!</div>
    <div class="header-main">
      <a href="index.html" class="logo"><div class="logo-icon"><img src="AIGrowmatics_logo.jpg" alt="AIGrowmatics logo"></div></a>
      <div class="search-bar">
        <input type="text" placeholder="Search for products, brands and more..." id="searchInput" onkeydown="handleSearch(event)">
        <button onclick="goSearch()">🔍</button>
      </div>
      <div class="header-actions">
        <button class="header-icon" onclick="window.location.href='account.html'" title="Account">👤</button>
        <button class="header-icon" onclick="window.location.href='wishlist.html'" title="Wishlist">❤️</button>
        <button class="header-icon" onclick="window.location.href='cart.html'" title="Cart" style="position:relative">
          🛒<span class="cart-badge" style="display:none">0</span>
        </button>
      </div>
    </div>
    <nav class="nav">
      <div class="nav-inner">
        ${navLinks.map(l => `<a href="${l.href}" class="nav-link ${activePage===l.name?'active':''}">${l.name}</a>`).join('')}
      </div>
    </nav>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo" style="color:white"><div class="logo-icon"><img src="AIGrowmatics_logo.png" alt="AIGrowmatics logo"></div></a>
        <p>Your one-stop destination for quality products at unbeatable prices. Shop with confidence with our secure payment gateway and easy returns.</p>
        <div class="footer-social">
          <div class="social-btn" title="Facebook">📘</div>
          <div class="social-btn" title="Instagram">📷</div>
          <div class="social-btn" title="Twitter">🐦</div>
          <div class="social-btn" title="YouTube">▶️</div>
        </div>
      </div>
      <div>
        <div class="footer-heading">Quick Links</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="cart.html">Cart</a></li>
          <li><a href="account.html">My Account</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Customer Service</div>
        <ul class="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Returns Policy</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Contact</div>
        <ul class="footer-links">
          <li><a href="#">📧 support@aigrowmatics.com</a></li>
          <li><a href="#">📞 0000-000-0000</a></li>
          <li><a href="#">📍 Bengaluru, India</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 AIGROWMATICS. All rights reserved. | Powered by passion & code.</p>
      <p style="margin-top:8px">💳 We accept: Visa • MasterCard • UPI • Net Banking • Wallets</p>
    </div>
  </footer>`;
}

function handleSearch(e) { if (e.key === 'Enter') goSearch(); }
function goSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
}

// ===== COUNTDOWN =====
function startCountdown(elementId, hours=8, minutes=34, seconds=12) {
  let total = hours*3600 + minutes*60 + seconds;
  const el = document.getElementById(elementId);
  if (!el) return;
  const tick = () => {
    if (total <= 0) { el.innerHTML = '<span>Sale Ended</span>'; return; }
    const h = Math.floor(total/3600), m = Math.floor((total%3600)/60), s = total%60;
    el.innerHTML = `
      <div class="count-box"><div class="count-num">${String(h).padStart(2,'0')}</div><div class="count-label">Hours</div></div>
      <div class="count-box"><div class="count-num">${String(m).padStart(2,'0')}</div><div class="count-label">Mins</div></div>
      <div class="count-box"><div class="count-num">${String(s).padStart(2,'0')}</div><div class="count-label">Secs</div></div>`;
    total--; setTimeout(tick, 1000);
  };
  tick();
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateUI();

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      if (link.hash) {
        e.preventDefault();
        document.querySelector(link.hash)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
