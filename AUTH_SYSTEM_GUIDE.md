# Authentication System - Role-Based Access

## ✅ What's Been Fixed

### 1. Backend Auth Routes
- **POST /api/auth/signup** - Register new user
- **POST /api/auth/login** - Login user
- Fixed syntax errors in auth.js
- Proper password hashing with bcryptjs
- JWT token generation
- Role-based user creation

### 2. Frontend Pages
- **Signup Page** - Register with name, email, password, role
- **Login Page** - Login with email and password
- Removed role selector from login (role comes from database)
- Token and user data stored in localStorage
- Automatic navigation based on role

### 3. Role-Based Navigation
- **Admin role** → Redirects to `/admin` (Admin Dashboard)
- **User role** → Redirects to `/` (Home Page)

---

## 🚀 How It Works

### User Flow:

```
1. User goes to /signup
   ↓
2. Fills form (name, email, password, role)
   ↓
3. Clicks "Signup"
   ↓
4. Account created → Redirects to /login
   ↓
5. User enters email & password
   ↓
6. Clicks "Login"
   ↓
7. System checks role:
   - If admin → /admin (Admin Dashboard)
   - If user → / (Home Page)
```

---

## 📋 User Roles

### User (Default)
- Can browse products
- Can send enquiries
- Can view product details
- Access to home page

### Admin
- All user permissions +
- Access to Admin Dashboard
- Manage products
- View enquiries
- View supplier requests
- Manage system

---

## 🧪 Testing

### Test 1: Create Admin Account

1. Go to: `http://localhost:3000/signup`
2. Fill in:
   - Name: Admin User
   - Email: admin@example.com
   - Password: admin123
   - Role: **Admin**
3. Click "Signup"
4. You'll be redirected to login page

### Test 2: Login as Admin

1. Go to: `http://localhost:3000/login`
2. Enter:
   - Email: admin@example.com
   - Password: admin123
3. Click "Login"
4. You should be redirected to: `/admin` (Admin Dashboard)

### Test 3: Create User Account

1. Go to: `http://localhost:3000/signup`
2. Fill in:
   - Name: Regular User
   - Email: user@example.com
   - Password: user123
   - Role: **User**
3. Click "Signup"
4. You'll be redirected to login page

### Test 4: Login as User

1. Go to: `http://localhost:3000/login`
2. Enter:
   - Email: user@example.com
   - Password: user123
3. Click "Login"
4. You should be redirected to: `/` (Home Page)

---

## 🔐 Security Features

### Password Security
- Passwords hashed with bcryptjs (10 salt rounds)
- Never stored in plain text
- Secure comparison during login

### JWT Tokens
- Token generated on signup/login
- Expires in 7 days
- Stored in localStorage
- Contains user ID and role

### Data Stored in Browser
```javascript
localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...')
localStorage.setItem('user', '{"id":"123","name":"John","email":"john@example.com","role":"user"}')
```

---

## 📝 API Endpoints

### Signup
```
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "user"
}

Response:
{
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "user": {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🔧 Configuration

### JWT Secret
Edit `backend/.env`:
```env
JWT_SECRET=your_super_secret_key_here_change_this_in_production
```

**Important:** Change this in production!

---

## 🎯 User Schema

```javascript
{
  name: String (required),
  email: String (required, unique, lowercase),
  password: String (required, min 6 chars, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚨 Important Notes

### After Signup
- User is redirected to `/login`
- Must login to access the system
- Token is generated on login, not signup

### After Login
- Token stored in localStorage
- User data stored in localStorage
- Automatic redirect based on role
- Token valid for 7 days

### Role Selection
- **Signup:** User selects role (User or Admin)
- **Login:** No role selection needed (comes from database)

---

## 🔄 Restart Backend Server

After making these changes, restart your backend:

```cmd
cd backend
node server.js
```

---

## ✨ Features

- ✅ Secure password hashing
- ✅ JWT token authentication
- ✅ Role-based access control
- ✅ Automatic navigation
- ✅ Token persistence
- ✅ User data storage
- ✅ Error handling
- ✅ Success messages

---

## 🎉 Ready to Test!

1. **Restart backend server**
2. Go to `/signup`
3. Create an admin account
4. Login
5. You'll be redirected to Admin Dashboard!

Then test with a regular user account to see the difference!
