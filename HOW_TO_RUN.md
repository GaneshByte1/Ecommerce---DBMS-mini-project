# How to Run the Ecommerce Application

## 🚀 Quick Start

### Method 1: Run Everything at Once (Easiest)
```bash
npm run dev
```
This will open two PowerShell windows - one for backend and one for frontend.

### Method 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

## 🌐 Access the Application

Once running, open your browser and go to:

- **Frontend (React App)**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## ✨ What You'll See

The frontend includes:
- 📦 Product listing with 6 demo products
- 🛒 Shopping cart functionality
- 💳 Add to cart and remove from cart
- 💰 Live total calculation
- 📱 Fully responsive design

## 🛠️ Troubleshooting

**Port already in use?**
- Stop any existing Node.js processes
- Or change the port in `server/src/server.ts` and `client/vite.config.ts`

**Cannot see the frontend?**
- Make sure the client is running on http://localhost:5173
- Check the terminal for any error messages
