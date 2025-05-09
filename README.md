# Real-Time Chat App (MERN Stack)

A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) using WebSockets via Socket.IO.

## 🌐 Live Demo

Frontend: [https://yapper-ten.vercel.app](https://yapper-ten.vercel.app)

## 🚀 Features

- Real-time messaging with Socket.IO
- User authentication (JWT-based)
- Online user status indicator
- Profile photo upload with Cloudinary
- Responsive UI with dark/light mode toggle
- Send and receive image messages

## 🛠 Tech Stack

- **Frontend**: React, Zustand, React Router, TailwindCSS, Vite
- **Backend**: Node.js, Express, MongoDB, Socket.IO
- **Other**: Cloudinary (for image upload), JWT (for authentication), Railway (backend hosting), Vercel (frontend hosting)

## 🧪 Environment Variables

Buat file `.env` pada direktori root backend dan isi dengan:

```env
MONGODB_URI=
PORT=5001
JWT_SECRET=
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## 📦 Installation

### 1. Clone repository
```bash
git clone https://github.com/sandervenz/chat-app-mern.git
cd chat-app-mern
```

### 2. Backend setup
```bash
cd backend
npm install
npm start
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

## 📡 Deployment

- **Backend**: Hosted on [Railway](https://railway.app)
- **Frontend**: Hosted on [Vercel](https://vercel.com)

## 🙋‍♂️ Author

Built by [Sander Venz](https://github.com/sandervenz)

