# B2B Import-Export Marketplace

A modern, responsive B2B marketplace platform for connecting importers and exporters worldwide. Built with React, Tailwind CSS, Node.js, Express, and MongoDB.

## Features

### Frontend
- **Homepage**: Hero section, category tiles, featured products, statistics
- **Product Listing**: Advanced filters (business type, price range, categories), grid layout, pagination
- **Product Details**: Image gallery, specifications, seller info, inquiry form
- **Supplier Registration**: Complete registration form with file upload
- **Admin Dashboard**: Manage products, enquiries, suppliers, analytics

### Backend
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- Product, Category, Supplier, and Enquiry management
- Email notifications for enquiries
- Search and filter functionality

## Tech Stack

**Frontend:**
- React 18
- React Router v6
- Tailwind CSS
- Lucide React (icons)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- JWT Authentication

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Setup

1. **Install dependencies:**
```bash
npm run install:all
```

2. **Configure environment:**
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

3. **Start development servers:**
```bash
# From root directory
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
b2b-marketplace/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   └── package.json
├── backend/
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utilities (email, etc.)
│   └── server.js           # Express server
└── package.json            # Root package
```

## API Endpoints

### Products
- `GET /api/products` - List products (with filters)
- `GET /api/products/:slug` - Get product details
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Enquiries
- `GET /api/enquiries` - List enquiries
- `POST /api/enquiries` - Submit enquiry
- `PATCH /api/enquiries/:id/status` - Update status

### Suppliers
- `GET /api/suppliers` - List suppliers
- `POST /api/suppliers` - Register supplier
- `PATCH /api/suppliers/:id/status` - Approve/reject

### Categories
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category

## Database Schema

### Product
- name, slug, description
- category (ref), supplier (ref)
- price (min, max, currency)
- moq (quantity, unit)
- images, attributes, specifications
- views, enquiries, isActive, isFeatured

### Supplier
- companyName, contactPerson, email, phone
- businessType, address, categories
- certifications, images
- isVerified, isActive, status

### Enquiry
- product (ref), supplier (ref)
- name, email, phone, pincode
- enquiryType, message, status

### Category
- name, slug, icon, description
- parent (ref), productCount, isActive

## Features Implemented

✅ Responsive design (mobile, tablet, desktop)
✅ Global search with category filter
✅ Product listing with advanced filters
✅ Product detail page with image gallery
✅ Enquiry form with modal
✅ Supplier registration form
✅ Admin dashboard with tabs
✅ RESTful API backend
✅ MongoDB database models
✅ Email notifications
✅ SEO-friendly URLs

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables
# Deploy with git push
```

## License

MIT License
