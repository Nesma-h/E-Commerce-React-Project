import React from 'react'
import './Home.style.css'
import Header from'../../component/Header/Header'
import Categories from '../../component/Categories/Categories'
import BestValue from '../../component/BestValue/BestValue'
import DealDay from '../../component/DealDay/DealDay'
import Product1 from '../../component/product1/product1'
import Product2 from '../../component/product2/product2'
import ShortCart from '../../component/ShortCart/ShortCart'
import ScrollButtons from '../../component/ScrollButtons/ScrollButtons'
function Home() {
  return (
    <>
    <Header/>
    <Categories/>
    <BestValue/>
    <DealDay/>
    <Product1/>
    <Product2/>

    <ShortCart/>
    <ScrollButtons/>
    </>
  )
}

export default Home
