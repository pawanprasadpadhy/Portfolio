# 🚀 Portfolio

A modern, responsive full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js). Features smooth animations, a contact form with database integration, and a professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📋 Table of Contents

-   [Features](#-features)
-   [Tech Stack](#-tech-stack)
-   [Prerequisites](#-prerequisites)
-   [Installation](#-installation)
-   [Configuration](#-configuration)
-   [Running the Application](#-running-the-application)
-   [Project Structure](#-project-structure)
-   [API Endpoints](#-api-endpoints)
-   [Customization](#-customization)
-   [Deployment](#-deployment)
-   [Troubleshooting](#-troubleshooting)
-   [Contributing](#-contributing)
-   [License](#-license)
-   [Contact](#-contact)

---

## ✨ Features

### Frontend Features

-   🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
-   📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
-   🧭 **Smooth Navigation** - Active section highlighting with smooth scroll
-   💼 **Portfolio Sections**:
    -   Hero section with call-to-action
    -   Background & skills showcase
    -   Professional profile
    -   Experience timeline
    -   Projects grid with hover effects
    -   Contact form with validation
    -   Footer with social links
-   🔄 **Dynamic Content** - Easy to update and customize
-   ⚡ **Fast Loading** - Optimized for performance

### Backend Features

-   🗄️ **MongoDB Integration** - Persistent data storage
-   🔐 **Data Validation** - Input validation and error handling
-   📧 **Contact Form Handler** - Store and retrieve contact messages
-   🛡️ **CORS Enabled** - Secure cross-origin resource sharing
-   📊 **RESTful API** - Clean and organized API endpoints
-   🚀 **Scalable Architecture** - Easy to extend and maintain

---

## 🛠️ Tech Stack

### Frontend

-   **React** 18.2.0 - UI library
-   **Lucide React** - Modern icon library
-   **CSS3** - Custom styling with animations
-   **JavaScript (ES6+)** - Modern JavaScript features

### Backend

-   **Node.js** - Runtime environment
-   **Express.js** 4.18.2 - Web framework
-   **MongoDB** - NoSQL database
-   **Mongoose** 7.0.0 - MongoDB object modeling
-   **CORS** - Cross-origin resource sharing
-   **dotenv** - Environment variable management

### Development Tools

-   **Nodemon** - Auto-restart server during development
-   **NPM** - Package manager

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
-   **MongoDB** - Choose one:
    -   [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Local)
    -   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud - Recommended)
-   **Git** - [Download](https://git-scm.com/)
-   **Code Editor** - [VS Code](https://code.visualstudio.com/) (Recommended)

### Verify Installation

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/pawanprasadpadhy/portfolio.git
cd pawan-portfolio
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# The following packages will be installed:
# - express (Web framework)
# - mongoose (MongoDB ODM)
# - cors (Enable CORS)
# - dotenv (Environment variables)
# - nodemon (Development server)
```

### 3. Frontend Setup

```bash
# Navigate to frontend folder (from root)
cd ../frontend

# Install dependencies
npm install

# The following packages will be installed:
# - react & react-dom (UI library)
# - lucide-react (Icons)
# - All Create React App dependencies
```

---

## ⚙️ Configuration

### Backend Configuration

1. **Create `.env` file** in the `backend` folder:

```bash
cd backend
touch .env  # Linux/Mac
# OR
type nul > .env  # Windows
```

2. **Add environment variables** to `.env`:

-   Copy the contents of `example.env` to `backend/.env`.

### MongoDB Atlas Setup (Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Create a database user
5. Whitelist your IP address (or use 0.0.0.0/0 for all IPs)
6. Get your connection string
7. Replace `<username>`, `<password>`, and `<cluster>` in the connection string
8. Paste it in your `.env` file

### Frontend Configuration

No configuration needed! The frontend is pre-configured to connect to `http://localhost:5000`.

**For production**, update the API URL in `frontend/src/App.js` (line 61):

```javascript
const response = await fetch("https://your-backend-url.com/api/contact", {
	// ... rest of the code
});
```

---

## 🎮 Running the Application

### Development Mode

You need **TWO terminal windows** - one for backend, one for frontend.

#### Terminal 1: Start Backend Server

```bash
# From backend folder
cd backend
npm run dev
```

```text
<!-- You should see: -->
✅ MongoDB Connected Successfully!
🚀 Server is running on port 5000
```

#### Terminal 2: Start Frontend

```bash
# From frontend folder (open new terminal)
cd frontend
npm start

# Browser will automatically open at http://localhost:3000
```

### Production Mode

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm run build
# Serve the build folder with your preferred hosting service
```

---

## 📁 Project Structure

```
pawan-portfolio/
│
├── backend/                        # Backend server
│   ├── node_modules/               # Dependencies
│   ├── .env                        # Environment variables (not in git)
│   ├── .gitignore                  # Git ignore file
│   ├── package.json                # Backend dependencies
│   ├── package-lock.json           # Dependency lock file
│   └── server.js                   # Main server file
│
├── frontend/                       # React frontend
│   ├── node_modules/               # Dependencies
│   ├── public/                     # Static files
│   │   ├── index.html              # HTML template
│   │   ├── favicon.ico             # Website icon
│   │   └── resume.pdf              # My resume
│   ├── src/                        # Source files
│   │   ├── App.js                  # Main component
│   │   ├── App.css                 # Component styles
│   │   ├── index.js                # Entry point
│   │   └── index.css               # Global styles
│   ├── .gitignore                  # Git ignore file
│   ├── package.json                # Frontend dependencies
│   └── package-lock.json           # Dependency lock file
│
├── .gitignore                      # Root git ignore
└── README.md                       # This file
```

---

## 🔌 API Endpoints

### Base URL

```
http://localhost:5000
```

### Available Endpoints

#### 1. Health Check

```http
GET /
```

**Response:**

```json
{
	"message": "🚀 Portfolio Backend API is running!",
	"status": "active",
	"timestamp": "2024-11-20T10:30:00.000Z"
}
```

#### 2. Submit Contact Form

```http
POST /api/contact
```

**Request Body:**

```json
{
	"name": "John Doe",
	"email": "john@example.com",
	"message": "Hello! I'd like to discuss a project."
}
```

**Response (Success):**

```json
{
	"success": true,
	"message": "Message sent successfully!",
	"data": {
		"id": "507f1f77bcf86cd799439011",
		"name": "John Doe",
		"createdAt": "2024-11-20T10:30:00.000Z"
	}
}
```

#### 3. Get All Contacts (Admin)

```http
GET /api/contacts
```

**Response:**

```json
{
	"success": true,
	"count": 2,
	"data": [
		{
			"_id": "507f1f77bcf86cd799439011",
			"name": "John Doe",
			"email": "john@example.com",
			"message": "Hello! I'd like to discuss a project.",
			"status": "unread",
			"createdAt": "2024-11-20T10:30:00.000Z"
		}
	]
}
```

#### 4. Get Single Contact

```http
GET /api/contacts/:id
```

#### 5. Delete Contact

```http
DELETE /api/contacts/:id
```

---

## 🎨 Customization

### Update Personal Information

#### 1. Navigation & Hero Section

**File:** `frontend/src/App.js`

```javascript
// Line 26: Your name in navbar
<div className="nav-logo">
  Pawan Prasad Padhy
</div>

// Line 88: Hero section
<h1 className="hero-title">
  Welcome to My Portfolio
</h1>
<p className="hero-subtitle">
  Your Title Here
</p>
```

#### 2. Background Section

**File:** `frontend/src/App.js` (Lines 95-145)

Update your bio, skills, and tech stack.

#### 3. Profile Section

**File:** `frontend/src/App.js` (Lines 147-191)

Update "About Me" and "Quick Facts".

#### 4. Experience Section

**File:** `frontend/src/App.js` (Lines 193-246)

Replace with your actual work experience:

```javascript
{
  title: "Your Job Title",
  company: "Company Name",
  date: "Start Date - End Date",
  points: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ]
}
```

#### 5. Projects Section

**File:** `frontend/src/App.js` (Lines 248-307)

Add your real projects:

```javascript
{
  title: "Project Name",
  description: "Brief description of your project",
  tech: ["React", "Node.js", "MongoDB"]
}
```

#### 6. Social Links

**File:** `frontend/src/App.js` (Lines 370-382)

Update your social media profiles:

```javascript
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://github.com/yourusername" target="_blank">
<a href="mailto:your.email@example.com">
```

### Add Your Resume

1. Place your resume PDF in `frontend/public/`
2. Name it `resume.pdf` (or update the filename in App.js line 88)

### Change Colors

**File:** `frontend/src/App.css`

```css
/* Primary gradient (purple to pink) */
background: linear-gradient(to right, #a855f7, #ec4899);

/* Change to your preferred colors */
background: linear-gradient(to right, #your-color-1, #your-color-2);
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Backend Won't Start

**Problem:** `Error: Cannot find module 'express'`

**Solution:**

```bash
cd backend
npm install
```

#### 2. MongoDB Connection Failed

**Problem:** `MongoDB Connection Error`

**Solutions:**

-   Check if MongoDB is running (local installation)
-   Verify connection string in `.env` file
-   For Atlas: Check if IP is whitelisted
-   For Atlas: Verify username/password

#### 3. CORS Error

**Problem:** `Access to fetch blocked by CORS policy`

**Solution:**

-   Ensure backend is running on port 5000
-   Check `server.js` has correct CORS configuration
-   Verify frontend is running on port 3000

#### 4. Form Not Sending

**Problem:** Contact form shows error

**Solutions:**

```bash
# Check backend is running
curl http://localhost:5000

# Check browser console for errors (F12)

# Verify API endpoint in App.js is correct
```

#### 5. Port Already in Use

**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**

```bash
# Find process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Debugging Tips

1. **Check Backend Logs:** Look at terminal running backend
2. **Check Browser Console:** Press F12 in browser
3. **Test API Directly:** Use Postman or curl
4. **Verify Environment Variables:** `console.log(process.env.MONGODB_URI)`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
    ```bash
    git checkout -b feature/AmazingFeature
    ```
3. **Commit your changes**
    ```bash
    git commit -m 'Add some AmazingFeature'
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/AmazingFeature
    ```
5. **Open a Pull Request**

### Contribution Ideas

-   🎨 Improve UI/UX design
-   📱 Add more responsive features
-   🔐 Add authentication system
-   📊 Create admin dashboard
-   🌙 Add dark/light mode toggle
-   🌍 Add internationalization (i18n)
-   ♿ Improve accessibility
-   📈 Add analytics integration

---

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Pawan Prasad Padhy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact

**Pawan Prasad Padhy**

-   🌐 Portfolio: [https://yourportfolio.com](https://yourportfolio.com) # TODO
-   💼 LinkedIn: [linkedin.com/in/pawanprasadppp](https://linkedin.com/in/pawanprasadppp)
-   🐱 GitHub: [github.com/pawanprasadpadhy](https://github.com/pawanprasadpadhy)
-   📧 Email: beingpawanppp@gmail.com

---

## 🙏 Acknowledgments

-   [React](https://reactjs.org/) - Amazing UI library
-   [Node.js](https://nodejs.org/) - Powerful runtime
-   [MongoDB](https://www.mongodb.com/) - Flexible database
-   [Express.js](https://expressjs.com/) - Fast web framework
-   [Lucide Icons](https://lucide.dev/) - Beautiful icon set

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/pawanprasadpadhy/portfolio?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/pawanprasadpadhy/portfolio?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/pawanprasadpadhy/portfolio?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/pawanprasadpadhy/portfolio?style=flat-square)

---

## 🚀 Future Enhancements

-   [ ] Analytics integration
-   [ ] SEO optimization
-   [ ] PWA support
-   [ ] Interactive animations

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Made with ❤️ by Pawan Prasad Padhy**

[⬆ Back to Top](#-pawan-prasad-padhy---portfolio-website)

</div>
