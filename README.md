# 🛒 Blink It Clone - Full-Stack E-Commerce Application

A modern, full-stack e-commerce web application inspired by BlinkIt, built with the MERN stack. This project demonstrates expertise in building scalable, secure, and user-friendly online shopping platforms with real-time features, payment integration, and admin management.

## 🚀 Features

### User Features
- 🔐 **Secure Authentication**: JWT-based login/signup with OTP verification
- 🛍️ **Product Browsing**: Category-wise product display with search functionality
- 🛒 **Shopping Cart**: Add, update, and remove items with real-time updates
- 📍 **Address Management**: Multiple delivery addresses with CRUD operations
- 💳 **Secure Payments**: Integrated Stripe payment gateway
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 📦 **Order Management**: Track orders, view history, and cancel orders
- 🔍 **Advanced Search**: Search products across categories

### Admin Features
- 👨‍💼 **Admin Dashboard**: Comprehensive admin panel for product management
- 📊 **Category Management**: Create, edit, and organize product categories
- 🏷️ **Product Management**: Full CRUD operations for products
- 📈 **Order Oversight**: Monitor and manage customer orders
- 🖼️ **Image Upload**: Cloudinary integration for product images
- 📧 **Email Notifications**: Automated email templates for verification and password reset

### Technical Features
- ⚡ **Fast Performance**: Optimized with Vite for quick builds and hot reload
- 🔒 **Security**: Input validation, authentication middleware, and secure API endpoints
- 📡 **Real-time Updates**: Dynamic cart and product updates
- ☁️ **Cloud Storage**: Image uploads to Cloudinary
- 📧 **Email Service**: Nodemailer for transactional emails
- 🗄️ **Database**: MongoDB with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **React** - Modern UI library with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload middleware
- **Nodemailer** - Email sending
- **Stripe** - Payment processing

### DevOps & Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Cloudinary** - Image hosting

## 📋 Prerequisites

Before running this application, make sure you have:
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager
- Stripe account for payments
- Cloudinary account for image uploads

## 🚀 Installation & Setup

### Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_SECRET_REFRESH_TOKEN=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=http://localhost:5173
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the backend server:
```bash
npm start
```

### Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:
```env
```

Start the frontend development server:
```bash
npm run dev
```

## 📖 Usage

1. **User Registration/Login**: Create an account or login with existing credentials
2. **Browse Products**: Navigate through categories and search for products
3. **Add to Cart**: Add items to your cart and manage quantities
4. **Checkout**: Add delivery address and complete payment via Stripe
5. **Order Tracking**: View order history and status
6. **Admin Panel**: Access admin features at `/admin` (admin login required)

## 🔗 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/verify-otp` - OTP verification

### Products
- `GET /api/product` - Get all products
- `POST /api/product` - Create product (Admin)
- `PUT /api/product/:id` - Update product (Admin)
- `DELETE /api/product/:id` - Delete product (Admin)

### Cart
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart` - Get cart items
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove from cart

### Orders
- `POST /api/order` - Create order
- `GET /api/order` - Get user orders
- `PUT /api/order/cancel/:id` - Cancel order

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Krunal Sawarkar**
- Email: krunalsawarkar2004@gmail.com

---

⭐ **Star this repo if you found it helpful!**

*Built with ❤️ using MERN Stack*
