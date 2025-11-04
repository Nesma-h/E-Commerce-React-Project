
// import './App.css'
import React, { lazy, Suspense } from 'react'
// import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import Layout from '../src/layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import "tailwindcss";

import  { Toaster } from 'react-hot-toast';
import LottieHandler from './common/lottieHandler';
const Login  = lazy(()=>import('./pages/Auth/Login'))
const Signup  = lazy(()=>import( './pages/Auth/Signup'))
const Wishlist = lazy(()=>import( './pages/Wishlist/Wishlist'))
const Cart =lazy(()=> import('./pages/Cart/Cart'))
const Compare = lazy(()=> import('./pages/Compare/Compare'))
const Layout=lazy(()=>import ('./layout/Layout'))
const Home=lazy(()=>import('./pages/Home/Home'))

function App() {

  
    const router=createBrowserRouter([{
      path:'/',
      
      element:
      <Suspense fallback={<LottieHandler stat={'main'}/>}> <Layout/> </Suspense>,
      children:[
        {
          path:'',
          element:<Suspense fallback={<LottieHandler stat={'mshmain'}/>}> <Home/> </Suspense>
        },
        {
          path:'login',
          element: <Suspense fallback={<LottieHandler stat={'mshmain'}/>}><Login/></Suspense>
        },
        {
          path:'signup',
          element: <Suspense fallback={<LottieHandler stat={'mshmain'}/>}><Signup/></Suspense>
        },
        {
          path:'wishlist',
          element: <Suspense fallback={<LottieHandler stat={'mshmain'}/>}><Wishlist/></Suspense>
        },
        {
          path:'cart',
          element: <Suspense fallback={<LottieHandler stat={'mshmain'}/>}><Cart/></Suspense>
        },
        {
          path:'compare',
          element: <Suspense fallback={<LottieHandler stat={'mshmain'}/>}><Compare/></Suspense>
        },

      ],
      errorElement: <LottieHandler stat={'err'}/>
    }])
    
    
  

  return (
    <>
    <main >
      <RouterProvider router={router}/>
      <Toaster/>
    </main>
    </>
  )
}

export default App
