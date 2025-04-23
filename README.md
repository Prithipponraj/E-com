# 🛍️ Haute-Hue E-commerce Platform

A full-stack luxury fashion e-commerce web application with powerful **Admin Dashboard** and user-friendly **Customer Interface**. Built with modern tech and secure payment integration, this app offers a seamless shopping experience.

---

## 🔥 Features

### 🧑‍💻 Admin Dashboard
- View all listed products
- Add new products with images, sizes, and description
- Remove products from the store
- View all customer orders

### 🛒 Customer Features
- Browse and view all products
- Filter by category/subcategory
- Sort products by price (Low to High / High to Low)
- View detailed product pages with images and size options
- Add products to cart
- View total cart price
- Place orders with:
  - Delivery Address input
  - Payment via **Stripe**, **Razorpay**, or **Cash on Delivery**
- Track order status after placing the order

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**
- **Tailwind CSS**
- **Framer Motion** (for animations)
- **React Router**
- **Axios**
- **Toastify** (for feedback alerts)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **Stripe** and **Razorpay** for secure payments
- **JWT Auth** for login/register

---

## 📦 Folder Structure

```bash
E-Com/
├── Admin/
│   └── # Admin panel code (product listing, order view, delete product)
├── Frontend/
│   └── # User interface (React + Tailwind)
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/haute-hue.git
cd haute-hue
```

### 2. Install Dependencies
```bash
# Frontend
cd Frontend
npm install

# Backend
cd ../Backend
npm install

# Admin (if applicable separately)
cd ../Admin
npm install
```

### 3. Add Environment Variables
Create a `.env` file in `/Backend`:
```env
MONGO_URL=your_mongodb_connection
PORT=3000
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
```

### 4. Run the App
```bash
# Backend
cd Backend
nodemon server.js

# Frontend (in a new terminal)
cd ../Frontend
npm run dev

# Admin Panel (in a new terminal if separate)
cd ../Admin
npm run dev
```


## 🌐 Live Demo

> (https://hautehue.netlify.app/)

---

## 📧 Contact

For support, reach out to:  
**Ponraj** – `prithipponrajofficial@gmail.com`

---

## 📄 License

MIT License  
© 2025 Haute-Hue
