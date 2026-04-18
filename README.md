# 🛍️ ShopWave — Full-Stack E-Commerce Website

A complete, production-quality static e-commerce website built with HTML5, CSS3, and vanilla JavaScript. Deployable for free on GitHub Pages, Netlify, or Vercel.

## 📁 Project Structure

```
ecommerce/
├── index.html          # Landing page
├── products.html       # Product listing with filters
├── product.html        # Product detail page
├── cart.html           # Shopping cart
├── checkout.html       # Multi-step checkout
├── account.html        # Login / Register / Dashboard
├── wishlist.html       # Wishlist page
├── admin.html          # Admin dashboard
├── css/
│   └── style.css       # Complete design system
├── js/
│   └── app.js          # Core logic (cart, data, utilities)
└── README.md
```

## ✨ Features

### Pages
- 🏠 **Landing Page** — Hero, categories, trending products, promo banner, testimonials, newsletter
- 📦 **Product Listing** — Filters (category, price, brand, rating), sort, grid/list view, pagination
- 🔍 **Product Detail** — Image gallery, variants (size/color), quantity, delivery check, reviews, related
- 🛒 **Cart** — Persistent cart, coupon codes, order summary, recommendations
- 💳 **Checkout** — 4-step flow: Address → Shipping → Payment → Confirmation
- 👤 **Account** — Login, register, orders, wishlist, addresses, profile
- ❤️ **Wishlist** — Save products, add to cart
- 🛠️ **Admin Panel** — Dashboard with charts, product/order/customer/coupon/inventory management

### Technical Features
- ✅ Fully responsive (mobile-first)
- ✅ Cart & wishlist persist via localStorage
- ✅ Coupon code system (try: SAVE20, FLAT10, WELCOME15)
- ✅ URL-based search and category filtering
- ✅ Toast notifications
- ✅ Countdown timer for flash sales
- ✅ Review system with star ratings
- ✅ Pincode delivery checker
- ✅ Password strength indicator
- ✅ Revenue & category charts (Chart.js)
- ✅ Admin order status management

## 🚀 Local Setup

1. **Download** the project files (unzip the `.zip` file)
2. **Open** `index.html` in your browser — that's it!  
   > No build tools, npm install, or server required.

For a local dev server (optional, for live reload):
```bash
# Python (built-in)
python -m http.server 8000

# Node.js (npx)
npx serve .
```
Then open `http://localhost:8000`

## 🌐 Deploy on GitHub Pages (FREE)

See the step-by-step guide below 👇

---

## 🔌 Connecting a Real Backend (Optional)

This is a fully functional frontend. To connect real services, update `js/app.js`:

| Feature | Service | What to do |
|---------|---------|-----------|
| Database | Supabase (free) | Replace localStorage with Supabase calls |
| Auth | Firebase Auth | Wrap login/register with Firebase SDK |
| Payments | Razorpay | Add Razorpay script & replace mock in checkout.html |
| Shipping | Shiprocket API | Call from a backend proxy (Node/Express) |
| Images | Cloudinary | Upload images & replace Unsplash URLs |
| Email | EmailJS | Add form submissions with EmailJS SDK |

## 🎨 Customization

**Change the brand name/colors:** Edit `css/style.css` root variables:
```css
:root {
  --primary: #1a1a2e;    /* Dark navy */
  --accent: #e63946;     /* Red */
  --gold: #ffd166;       /* Gold */
}
```

**Add products:** Edit the `PRODUCTS` array in `js/app.js`.

**Change currency:** Replace `₹` and `formatPrice()` in `js/app.js`.
