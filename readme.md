# 🛒 FreshCart — Grocery Delivery App

> A full-stack grocery delivery web application built with the **MERN stack**, featuring real-time cart management, secure payments, cloud image uploads, and a seamless shopping experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![MongoDB](https://img.shields.io/badge/database-MongoDB-green)
![Stripe](https://img.shields.io/badge/payments-Stripe-blueviolet)

---

## 🌐 Live Demo

> **[View Live App →](#)** _(Replace with your deployment URL)_

| Credential | Value                 |
| ---------- | --------------------- |
| Test Card  | `4242 4242 4242 4242` |
| Expiry     | Any future date       |
| CVV        | Any 3 digits          |

---

## 📸 Screenshots

> _(Add screenshots of your app here — Home, Product Page, Cart, Checkout)_

---

## ✨ Features

- **User Authentication** — Secure registration and login with JWT-based sessions
- **Product Catalog** — Browse groceries by category with search and filter functionality
- **Shopping Cart** — Add, remove, and update quantities in real time
- **Cloud Image Uploads** — Product images managed via Cloudinary + Multer
- **Stripe Payments** — Integrated Stripe (test mode) for a complete checkout flow
- **Order Management** — Users can view their order history and status
- **Toast Notifications** — Instant feedback via React Hot Toast
- **Responsive Design** — Fully mobile-friendly UI built with Tailwind CSS
- **Admin Panel** _(optional — remove if not applicable)_ — Manage products, orders, and users

---

## 🛠️ Tech Stack

### Frontend

| Technology           | Purpose                           |
| -------------------- | --------------------------------- |
| **React.js**         | UI framework                      |
| **Tailwind CSS**     | Styling and responsive design     |
| **Axios**            | HTTP client for API communication |
| **React Hot Toast**  | User-facing notifications         |
| **React Router DOM** | Client-side routing               |

### Backend

| Technology          | Purpose                                |
| ------------------- | -------------------------------------- |
| **Node.js**         | JavaScript runtime                     |
| **Express.js**      | REST API framework                     |
| **MongoDB**         | NoSQL database                         |
| **Mongoose**        | ODM for MongoDB schema modeling        |
| **JSON Web Tokens** | Authentication and authorization       |
| **Multer**          | Middleware for handling file uploads   |
| **Cloudinary**      | Cloud-based image storage and delivery |
| **Stripe**          | Payment processing (test mode)         |

---

## 🗂️ Project Structure

```
freshcart/
├── client/                   # React frontend
│   ├── public/
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level pages
│       ├── context/          # React Context (cart, auth)
│       ├── hooks/            # Custom hooks
│       ├── utils/            # Axios instance, helpers
│       └── App.jsx
│
├── server/                   # Node/Express backend
│   ├── config/               # DB & Cloudinary config
│   ├── controllers/          # Route logic
│   ├── middleware/            # Auth, error handling, multer
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   └── server.js
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Cloudinary account
- Stripe account (test mode)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/freshcart.git
cd freshcart
```

### 2. Set up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_test_secret_key
CLIENT_URL=http://localhost:3000
```

Start the server:

```bash
npm run dev
```

### 3. Set up the Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `/client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_test_publishable_key
```

Start the client:

```bash
npm start
```

The app will be running at **http://localhost:3000**

---

## 🔌 API Endpoints

### Auth

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and receive JWT |

### Products

| Method | Endpoint            | Description            |
| ------ | ------------------- | ---------------------- |
| GET    | `/api/products`     | Get all products       |
| GET    | `/api/products/:id` | Get a single product   |
| POST   | `/api/products`     | Create product (admin) |
| PUT    | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |

### Cart & Orders

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| GET    | `/api/cart`         | Get user's cart       |
| POST   | `/api/cart`         | Add item to cart      |
| DELETE | `/api/cart/:itemId` | Remove item from cart |
| POST   | `/api/orders`       | Place an order        |
| GET    | `/api/orders`       | Get user's orders     |

### Payments

| Method | Endpoint                      | Description                    |
| ------ | ----------------------------- | ------------------------------ |
| POST   | `/api/payment/create-session` | Create Stripe checkout session |

---

## 🧠 Key Implementation Highlights

- **JWT Authentication Middleware** — Protects private routes on both frontend (axios interceptors) and backend (Express middleware).
- **Multer + Cloudinary Pipeline** — Images are received via Multer's memory storage and streamed directly to Cloudinary using `upload_stream`, avoiding disk writes.
- **Stripe Checkout Flow** — Server creates a Stripe session; client redirects to Stripe's hosted page; webhook (or redirect) confirms order on success.
- **React Context API** — Global state management for cart and auth without Redux overhead.
- **Responsive UI** — Tailwind's utility classes ensure consistent UX across mobile, tablet, and desktop.

---

## 🚀 Deployment

| Layer    | Platform         |
| -------- | ---------------- |
| Frontend | Vercel / Netlify |
| Backend  | Render / Railway |
| Database | MongoDB Atlas    |
| Images   | Cloudinary       |

> Make sure to configure environment variables on your chosen hosting platform before deploying.

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to make major changes, please open an issue first to discuss what you'd like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**

- Portfolio: [yourportfolio.com](#)
- LinkedIn: [linkedin.com/in/yourname](#)
- GitHub: [@your-username](https://github.com/your-username)
- Email: your@email.com

---

> ⭐ If you found this project useful, please consider giving it a star!
