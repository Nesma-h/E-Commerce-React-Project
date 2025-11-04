import React, { useContext, useEffect } from 'react'
import './Wishlist.style.css'
import PageHeader from '../../common/PageHeader/PageHeader'
import { wishlistContext } from '../../context/WishlistContext'
import Product from '../../common/Product/Product'
import { AuthContext } from '../../context/AuthContext'
function Wishlist() {
  const {wishlist, getWishlist}=useContext(wishlistContext)
  const {curUser,wishId}=useContext(AuthContext)

  useEffect(()=>{
    getWishlist('data')
  },[curUser])

  const wishlistFullInfo=wishlist.map(el=>({...el,
    isliked : true,
    isAth:true
  })
  )
  return (
    <>
    
    <PageHeader title={'Wishlist'}/>
    {
    curUser?
    <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
    {wishlistFullInfo.map((value, i) => {
          return <Product value={value} key={i} />
        })
      }
      </div>:
      <div className='py-5 px-5 border border-red-900 bg-red-300 text-red-900  text-center rounded'>
              You must be Register To see This page !!
      </div>
}
    </>
  )
}

export default Wishlist
