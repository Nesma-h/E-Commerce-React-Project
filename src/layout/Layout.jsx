import React from 'react'
import NavBar from '../common/NavBar/Navbar'
import Footer from '../common/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
    
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
