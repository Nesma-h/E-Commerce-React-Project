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
```
app/
  index.html
  vite.config.js
  package.json
  db.json
  src/
    main.jsx
    App.jsx
    layout/
      Layout.jsx
    common/
      NavBar/ (Topnav, Bottomnav, Navlinks)
      Footer/
      LottieHandler.jsx
      Product/
    component/
      Header/, Categories/, DealDay/, HomeProducts/, BestValue/, ShortCart/, ScrollButtons/
    pages/
      Home/, Shop/, Cart/, Wishlist/, Compare/, About/, Contact/
      Auth/ (Login.jsx, Signup.jsx)
    context/
      AuthContext.jsx
      CartContext.jsx
      WishlistContext.jsx
      CompareContext.jsx
      DisplayContext.jsx
    fireBase/
      Firebase.js
    validation/
      loginValidation.js
      regiserValidation.js
    assets/
      images/, lottifiles/
```

## How It Works
- Routing in `src/App.jsx` via `createBrowserRouter` with lazy‑loaded pages and Lottie fallbacks.
- App shell in `src/layout/Layout.jsx` renders `NavBar`, `Outlet`, and `Footer`.
- `AuthContext.jsx`:
  - Registers/logs in users via Firebase Auth
  - Persists basic user profile to Firestore (`users/<id>`)
- `CartContext.jsx`:
  - CRUD against `http://localhost:3000/cart` filtered by `userid` and `productid`
  - Maintains a local `cart` array from `payload` items

## Notes
- Run `npm run dev` and `npm run start` in two terminals.
- If you see a perpetual loading animation, verify Firebase config and that `json-server` is running.
- Some sections expect images under `src/assets/images/`.

## Build & Deploy
```bash
npm run build
# output in dist/
```
- For GitHub Pages or static hosting, serve `dist`. For SPA routing on GH Pages, consider adding a `404.html` redirect.

## License
Educational/demo use. Feel free to modify and extend.
