# Ecommerce DBMS Mini Project

Full-stack ecommerce application with:
- **Backend**: Node.js + Express + TypeScript (port 5000)
- **Frontend**: React + Vite + TypeScript (port 5173)

## 🚀 Quick Start

### Option 1: Run Everything at Once (Recommended)

From the root directory, run:

```bash
npm run dev
```

This will start both the backend and frontend in separate terminal windows.

### Option 2: Run Servers Separately

**Terminal 1 - Backend:**
```bash
cd server
npm install
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm install
npm run dev
```

### Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## Environment variables

Copy the provided .env.example files to .env in each package and adjust as needed.

Server (.env):
- PORT=5000
- NODE_ENV=
- DB_HOST=
- DB_PORT=
- DB_USER=
- DB_PASS=
- DB_NAME=
- JWT_SECRET=
- CLIENT_URL=http://localhost:5173
- UPLOAD_DIR=uploads

Client (.env):
- VITE_API_URL=http://localhost:5000
- VITE_APP_NAME=EcommerceApp

## Project structure

- /server: Express + TypeScript API
  - npm start runs a dev server with ts-node-dev
  - GET /health returns { "status": "ok" }
- /client: Vite + React + TypeScript app
  - Reads environment from import.meta.env (e.g., VITE_API_URL)

## Tooling

- Formatting: Prettier (see .prettierrc)
- Linting: ESLint (TypeScript-aware configuration at repo root)
- Editor settings: .editorconfig

## License

MIT (see LICENSE)
