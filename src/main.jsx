import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import '@fontsource/public-sans'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { DisplayContextProvider } from './context/DisplayContext.jsx'
import {WishlistContextProvider } from './context/WishlistContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { CompareContextProvider } from './context/CompareContext.jsx'
createRoot(document.getElementById('root')).render(
    <>
    <AuthContextProvider>
    <CartContextProvider>
    <DisplayContextProvider>
    <WishlistContextProvider>
    <CompareContextProvider>
    <App/>
    </CompareContextProvider>
    </WishlistContextProvider>
    </DisplayContextProvider>
    </CartContextProvider>
    </AuthContextProvider>
    </>
    
)
