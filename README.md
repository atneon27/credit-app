# 🔗 Loan Application 

A simple Loan application built using **TypeScript**, **Express**, and **React**.

## 📦 Features

- Utilizes React Forms + Zod to support robust and type safe forms on submission.
- Supports three types of audience - user who can apply for loans, a verifier to audit those loans and an admin having complete system control.
- Displays all the user activity in a well structured tabular manner.
- Well labeled charts which provides easy and quick analysis of key metrics.
-  A well structured backend implementation with docker to facilitate easy and on the go deployment.

---

## 🛠️ Tech Stack

- **Frontend:** React.js + React-Query (data fetching)
- **Backend:** Node.js, Express.js, TypeScript, Docker, AWS EC2

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.comatneon27/credit-app.git
cd credit-app
```

### 2. Install Dependencies
```bash
cd backend 
npm install

cd backend 
npm install
```

### 3. Configure Backend 
In the backend folder navigate to the below file
```bash
# if exists
credit-app/backend/.env

# if not exists 
touch credit-app/backend/.env
```
and within the .env folder add the Database URL to access cloud/local database.
```bash
DATABASE_URL=https://your-db-uri.com: username@password
```

### 4. Start the backend on localhost
```bash
cd backend 
npx prisma generate client
tsc --b
node dist/index.js

### 5. Configure Frontend 
In the web folder navigate to the below file
```bash
# if exists
credit-app/web/.env

# if not exists 
touch credit-app/web/.env
```
and within the .env folder add the Backend URL to access backend (for localhost the backend is exposed via Port 3000)
```bash
VITE_BACKEND_URL=https://localhost:3000
```
Note: Don't forget VITE_ in the frontend .env

### 6. Starting up frontend
```bash
cd web
npm run build
#or
npm run dev
```

### 7. (Optional) Starting Backend using Docker
You can skip all the above steps for setup in backend and directly use docker to setup the server.
```bash
cd backend
docker build -t credit-app-backend
docker run -p 3000:3000 credit-app-backend
```

Make sure both that the prisma client is generated before backend is up and environment variables for both backend and frontend are properly configured.
