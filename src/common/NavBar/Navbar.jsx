import React, { useContext, useEffect } from 'react'
import './NavBar.style.css'
import Topnav from './Topnav/Topnav'
import Bottomnav from './Bottomnav/Bottomnav'
import  NavLinks  from './Navlinks/Navlinks'
import { wishlistContext } from '../../context/WishlistContext'
import { AuthContext } from '../../context/AuthContext'
function Navbar() {
  let {getWishlist}=useContext(wishlistContext)
  let {curUser}=useContext(AuthContext)
  useEffect(()=>{
      if(curUser)getWishlist('id')
      },[])
  return (
    <>
    <Topnav/>
    <Bottomnav/>
    <NavLinks/>
    </>
  )
}

export default Navbar
