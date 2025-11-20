# 🌐 Deployment Guide

## Backend Deployment

### Option 1: Railway.app

1. Create account at [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Add environment variables:
    - `MONGODB_URI`
    - `PORT` (Railway sets this automatically)
5. Deploy!

### Option 2: Render.com

1. Create account at [Render.com](https://render.com)
2. New → Web Service
3. Connect your GitHub repository
4. Select `backend` folder
5. Add environment variables
6. Deploy!

## Frontend Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

Or use Vercel's GitHub integration.

### Option 2: Netlify

1. Create account at [Netlify](https://www.netlify.com)
2. New site from Git
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `build`
6. Deploy!

## Update API URL for Production

After deploying backend, update the API URL in `frontend/src/App.js`:

```javascript
// Line 61 - Change from:
const response = await fetch('http://localhost:5000/api/contact', {

// To your production URL:
const response = await fetch('https://your-backend.railway.app/api/contact', {
```

---
