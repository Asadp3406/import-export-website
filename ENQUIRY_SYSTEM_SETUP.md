# Enquiry System - Complete Setup

## ✅ What's Been Implemented

### 1. Backend - Enquiry API
- **POST /api/enquiries** - Submit new enquiry
  - Saves enquiry to database
  - Increments product enquiry count
  - Sends confirmation email to customer
- **GET /api/enquiries** - Get all enquiries (with pagination)
- **PATCH /api/enquiries/:id/status** - Update enquiry status

### 2. Email Notifications (Nodemailer)
- **Automatic email** sent to customer after enquiry submission
- Email template includes:
  - Thank you message
  - Customer name
  - Product name
  - Enquiry type
  - Customer's message
  - TradeHub branding

### 3. Frontend - Enquiry Modal
- **Product Detail Page** has "Send Enquiry" button
- **Modal form** collects:
  - Name
  - Email
  - Phone
  - Pin Code
  - Enquiry Type (product/bulk/sample)
  - Message
- **Submits to API** with product and supplier IDs
- **Shows success message** after submission
- **Loading state** while submitting

### 4. Admin Dashboard - Enquiry Management
- **Overview Tab** - Shows 5 most recent enquiries
- **Enquiries Tab** - Shows all enquiries with:
  - Product name
  - Customer name and contact
  - Enquiry type
  - Message
  - Date
  - Status (new/responded/closed)
- **Real-time updates** - Enquiries appear immediately

## 🚀 How to Use

### Step 1: Configure Email (Required for email notifications)

Edit `backend/.env` file:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

**For Gmail:**
1. Enable 2-Factor Authentication
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the app password in EMAIL_PASS

**Note:** Enquiries will still be saved even if email fails!

### Step 2: Customer Submits Enquiry

1. Customer goes to **Product Detail Page**
2. Clicks **"Send Enquiry"** button
3. Fills out the form:
   - Name, Email, Phone
   - Pin Code (optional)
   - Enquiry Type
   - Message
4. Clicks **"Submit Inquiry"**
5. Gets success message
6. Receives confirmation email

### Step 3: Admin Views Enquiries

1. Go to **Admin Dashboard**
2. **Overview Tab** - See recent enquiries
3. **Enquiries Tab** - See all enquiries with full details
4. Contact customers manually based on enquiry info

## 📋 Enquiry Schema

```javascript
{
  product: ObjectId (required) → Product,
  supplier: ObjectId (required) → Supplier,
  name: String (required),
  email: String (required),
  phone: String (required),
  pincode: String,
  enquiryType: String (product/bulk/sample),
  message: String (required),
  status: String (new/responded/closed),
  createdAt: Date,
  updatedAt: Date
}
```

## 📧 Email Template

```html
<h2>Thank you for your enquiry!</h2>
<p>Dear ${name},</p>
<p>We have received your enquiry and our team will contact you shortly.</p>
<p><strong>Enquiry Details:</strong></p>
<ul>
  <li>Product: ${productName}</li>
  <li>Type: ${enquiryType}</li>
  <li>Message: ${message}</li>
</ul>
<p>Best regards,<br>TradeHub Team</p>
```

## 🔗 Flow

```
Product Detail Page
  ↓ (click "Send Enquiry")
Enquiry Modal (form)
  ↓ (submit)
Backend API
  ├─→ Save to MongoDB
  ├─→ Increment product enquiry count
  └─→ Send email to customer
  ↓
Success message to customer
  ↓
Admin Dashboard (enquiries appear)
```

## ✨ Features

- ✅ Real-time enquiry submission
- ✅ Automatic email confirmation
- ✅ Product and supplier tracking
- ✅ Enquiry status management
- ✅ Admin dashboard view
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling
- ✅ Email fails gracefully (enquiry still saved)

## 🎯 Testing

### Test Enquiry Submission:

1. Make sure backend is running: `cd backend && node server.js`
2. Make sure frontend is running: `cd frontend && npm run dev`
3. Go to a product detail page
4. Click "Send Enquiry"
5. Fill out the form
6. Submit
7. Check:
   - Success message appears
   - Email received (if configured)
   - Enquiry appears in Admin Dashboard

### Test Without Email Configuration:

- Enquiries will still be saved to database
- No email will be sent
- Console will show email error (but won't crash)
- Admin can still see enquiries in dashboard

## 📝 Notes

- Email configuration is **optional** - system works without it
- Enquiries are always saved to database
- Product enquiry count is automatically incremented
- Admin can manually update enquiry status
- All enquiries are tracked with timestamps
