# Email Setup Guide - Nodemailer Configuration

## 📧 Step-by-Step Email Setup

### Option 1: Gmail (Recommended for Testing)

#### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the steps to enable it

#### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
4. Enter name: **TradeHub B2B**
5. Click **Generate**
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

#### Step 3: Update .env File
Edit `backend/.env`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

**Important:** 
- Remove spaces from the app password
- Use your actual Gmail address
- Don't use your regular Gmail password!

#### Step 4: Restart Backend Server
```cmd
cd backend
node server.js
```

---

### Option 2: Other Email Providers

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your_email@outlook.com
EMAIL_PASS=your_password
```

#### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your_email@yahoo.com
EMAIL_PASS=your_app_password
```

#### Custom SMTP Server
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your_email@yourdomain.com
EMAIL_PASS=your_password
```

---

## 🧪 Testing Email Configuration

### Test 1: Submit an Enquiry
1. Go to any product detail page
2. Click "Send Enquiry"
3. Fill out the form with YOUR email address
4. Submit
5. Check your inbox for confirmation email

### Test 2: Check Backend Logs
After submitting an enquiry, check your backend terminal:

**Success:**
```
✅ Email sent successfully to: customer@example.com
```

**Failure:**
```
❌ Email error: Invalid login: 535-5.7.8 Username and Password not accepted
```

---

## 🔧 Troubleshooting

### Error: "Invalid login"
- ✅ Make sure you're using an **App Password**, not your regular password
- ✅ Enable 2-Factor Authentication first
- ✅ Remove spaces from the app password
- ✅ Check EMAIL_USER is correct

### Error: "Connection timeout"
- ✅ Check EMAIL_HOST is correct
- ✅ Check EMAIL_PORT (usually 587 or 465)
- ✅ Check your firewall/antivirus settings
- ✅ Try port 465 with `secure: true`

### Error: "Self-signed certificate"
For development, you can add to `backend/utils/email.js`:
```javascript
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false  // Add this for development only
  }
})
```

### Emails Not Received
- ✅ Check spam/junk folder
- ✅ Check backend logs for errors
- ✅ Verify EMAIL_USER is correct
- ✅ Test with a different email address

---

## 📝 Current Email Template

When a customer submits an enquiry, they receive:

```
Subject: Thank you for your enquiry - TradeHub B2B

Thank you for your enquiry!

Dear [Customer Name],

We have received your enquiry and our team will contact you shortly.

Enquiry Details:
• Product: [Product Name]
• Type: [Enquiry Type]
• Message: [Customer Message]

Best regards,
TradeHub Team
```

---

## 🎯 Quick Setup Checklist

- [ ] Create `backend/.env` file
- [ ] Add Gmail address to EMAIL_USER
- [ ] Enable 2-Factor Authentication on Gmail
- [ ] Generate App Password
- [ ] Add App Password to EMAIL_PASS (no spaces)
- [ ] Restart backend server
- [ ] Test by submitting an enquiry
- [ ] Check email inbox (and spam folder)
- [ ] Check backend logs for success/error

---

## 💡 Important Notes

1. **Enquiries still work without email!**
   - Enquiries are saved to database
   - Admin can see them in dashboard
   - Email is just a bonus feature

2. **Email failures don't break the system**
   - If email fails, enquiry is still saved
   - Error is logged but not shown to user
   - User still sees success message

3. **For Production**
   - Use a dedicated email service (SendGrid, AWS SES, Mailgun)
   - Don't use personal Gmail account
   - Set up proper SPF/DKIM records
   - Monitor email delivery rates

---

## 🚀 After Setup

Once configured, every enquiry will:
1. ✅ Save to database
2. ✅ Send confirmation email to customer
3. ✅ Appear in admin dashboard
4. ✅ Show success message to customer

Test it now!
