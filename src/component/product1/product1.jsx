import React, { useContext, useEffect, useState,memo } from 'react'
import './Product1.style.css'
import SectionTitle from '../../common/SectionTitle/SectionTitle'
import Product from '../../common/Product/Product'
import { displayContext } from '../../context/DisplayContext'
import { wishlistContext, WishlistContextProvider } from '../../context/WishlistContext'
import { AuthContext } from '../../context/AuthContext'



function Product1() {
  const { getAllData, productData } = useContext(displayContext)
  const [cat, setcat] = useState('All')
  const {wishId}=useContext(wishlistContext)
  // console.log(catSet , cat)

  const productsFullInfo=productData.map(el=>({...el,
    isliked : wishId.includes(el.id),
  })
  )
  useEffect(() => {
    getAllData()
  }, [])
  
  return (
    <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-9'>
      <SectionTitle title={'OurProducts'}>
        <div className=' flex flex-col sm:flex-row  sm:items-center gap-2 m-2'>
          <button className={`${cat=='All'? 'bg-[var(--main-color)] text-[white]': 'text-gray-800 bg-[white]'} px-5 rounded  py-2 hover:bg-[var(--main-color)] hover:text-[white] border border-[var(--main-color)] transition duration-200 text-[14px] `} onClick={()=>setcat('All')}>ALL</button>
          <button className={`${cat=='Cooking'? 'bg-[var(--main-color)] text-[white]': 'text-gray-800 bg-[white]'} px-5 rounded py-2 hover:bg-[var(--main-color)] hover:text-[white] border border-[var(--main-color)] transition duration-200 text-[14px]`} onClick={()=>setcat('Cooking')}>Cooking</button>
          <button className={`${cat=='Fruits & Vegetables'? 'bg-[var(--main-color)] text-[white]': 'text-gray-800 bg-[white]'} px-5 rounded py-2 hover:bg-[var(--main-color)] hover:text-[white] border border-[var(--main-color)] transition duration-200 text-[14px]`} onClick={()=>setcat('Fruits & Vegetables')}>Fruits  & Vigitables</button>
          <button className={`${cat=='Beverage'? 'bg-[var(--main-color)] text-[white]': 'text-gray-800 bg-[white]'} px-5 rounded  py-2 hover:bg-[var(--main-color)] hover:text-[white] border border-[var(--main-color)] transition duration-200 text-[14px]`} onClick={()=>setcat('Beverage')}>Beverage</button>
          <button className={`${cat=='Dairy'? 'bg-[var(--main-color)] text-[white]': 'text-gray-800 bg-[white]'} px-5 rounded  py-2 hover:bg-[var(--main-color)] hover:text-[white] border border-[var(--main-color)] transition duration-200 text-[14px]`} onClick={()=>setcat('Dairy')}>Dairy</button>
        </div>


      </SectionTitle>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
        { cat=='All'?
        productsFullInfo.map((value, i) => {
          return <Product value={value} key={i} />
        }):
        productsFullInfo.map((value, i) => {
          return value.category==cat?<Product value={value} key={i} />:''
        })
        }

      </div>

    </div>


  )
}

export default memo(Product1)
