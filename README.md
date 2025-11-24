# 🚀 Portfolio

A modern, responsive full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js). Features smooth animations, a contact form with database integration, a secure admin dashboard, and a professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📋 Table of Contents

-   [Features](#-features)
-   [Tech Stack](#-tech-stack)
-   [Project Structure](#-project-structure)
-   [API Endpoints](#-api-endpoints)
-   [License](#-license)
-   [Contact](#-contact)

---

## ✨ Features

### Frontend Features

-   🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
-   📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
-   🧭 **Smooth Navigation** - Active section highlighting with smooth scroll
-   🌙 **Dark/Light Mode** - Toggle between dark and light themes
-   💼 **Portfolio Sections**:
    -   Hero section with call-to-action
    -   Background & skills showcase
    -   Professional profile
    -   Experience timeline
    -   Projects grid with hover effects
    -   Contact form with validation
    -   Footer with social links
-   🔐 **Admin Dashboard** - Secure area to view and manage contact messages
-   🔄 **Dynamic Content** - Easy to update and customize
-   ⚡ **Fast Loading** - Optimized for performance

### Backend Features

-   🗄️ **MongoDB Integration** - Persistent data storage
-   🔐 **Authentication** - JWT-based auth for admin access
-   📧 **Email Notifications** - Instant email alerts for new contact submissions
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
-   **React Router** - Client-side routing

### Backend

-   **Node.js** - Runtime environment
-   **Express.js** 4.18.2 - Web framework
-   **MongoDB** - NoSQL database
-   **Mongoose** 7.0.0 - MongoDB object modeling
-   **Nodemailer** - Email sending service
-   **JWT** - JSON Web Tokens for authentication
-   **Bcryptjs** - Password hashing

---

## 📁 Project Structure

```
pawan-portfolio/
│
├── backend/                        # Backend server
│   ├── models/                     # Database models
│   ├── routes/                     # API routes
│   ├── middleware/                 # Custom middleware
│   ├── server.js                   # Main server file
│   └── ...
│
├── frontend/                       # React frontend
│   ├── public/                     # Static files
│   ├── src/                        # Source files
│   │   ├── components/             # Reusable components
│   │   ├── pages/                  # Page components (Login, Dashboard)
│   │   ├── context/                # Context API (Auth)
│   │   ├── App.js                  # Main component
│   │   └── ...
│   └── ...
│
└── README.md                       # This file
```

---

## 🔌 API Endpoints

### Base URL

```
http://localhost:5000
```

### Available Endpoints

#### 1. Public Endpoints

-   `GET /` - Health check
-   `POST /api/contact` - Submit contact form (sends email notification)
-   `POST /api/auth/login` - Admin login

#### 2. Protected Endpoints (Admin Only)

-   `GET /api/contacts` - Get all contact messages
-   `DELETE /api/contacts/:id` - Delete a contact message

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

[⬆ Back to Top](#-portfolio)

</div>
