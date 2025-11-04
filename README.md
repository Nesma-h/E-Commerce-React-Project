# React E‑Commerce UI (Vite)

A React + Vite e‑commerce UI with Firebase authentication, lightweight state via Context, and a local JSON API (json‑server) for the cart. It includes core pages like Home, Shop, Cart, Compare, Wishlist, Login, and Signup.

## Features
- **Routing & code‑splitting**: `react-router-dom` with `lazy`/`Suspense` and Lottie loading states.
- **Auth**: Firebase Auth with user profiles stored in Firestore.
- **Cart (local API)**: `json-server` using `db.json` with per‑user cart items.
- **UI toolkit**: Tailwind CSS v4, MUI, and `styled-components`.
- **Feedback**: Toasts via `react-hot-toast` and modals via `sweetalert2`.
- **Extras**: Wishlist, Compare, Swiper carousels, Framer Motion animations.

## Tech Stack
- React 19 + Vite
- React Router v7
- Tailwind CSS 4, MUI, styled-components
- Firebase (Auth + Firestore)
- json-server, Axios
- Zod, React Hook Form
- Lottie, Swiper, Framer Motion

## Getting Started

1) Install dependencies:
```bash
cd app
npm install
```

2) Run the React dev server:
```bash
npm run dev
```

3) Start the local API (in a separate terminal):
```bash
npm run start
```
- Serves at `http://localhost:3000`
- Cart endpoint: `http://localhost:3000/cart`
- Ensure `app/db.json` exists (an empty `{}` is fine)

4) Configure Firebase:
- Add your project config in `src/fireBase/Firebase.js`.
- Auth flows and `AuthContext` expect Firestore with `users/<id>` documents.

## Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview the production build
- `npm run start`: Launch `json-server` on `db.json`

## Project Structure
