# Monorepo Scaffold: Server + Client

This repository is organized as a small monorepo with two packages:

- server: Node.js + Express + TypeScript
- client: React + Vite + TypeScript

Both projects are self-contained. You can work on either independently.

## Quick start

Open two terminals:

1) Server (Express on port 5000)

- cd server
- npm install
- npm start

2) Client (Vite dev server on port 5173)

- cd client
- npm install
- npm start

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
