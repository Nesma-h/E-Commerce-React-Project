import React from 'react'
import './PageHeader.style.css'
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function PageHeader({title}) {
  return (
    <>
    <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5 flex gap-3 items-center text-[17px] bg-gray-200 border-b border-b-gray-300'>
      <Link to={'/'} title='Go to Home Page' className='hover:text-[var(--main-color)] cursor-pointer transation duration-300 flex gap-1 items-center'> < FaHome/> Home</Link>
      <span>/</span>
      <span className='hover:text-[var(--main-color)] transation duration-300'>{title}</span>
    </div>
    </>
  )
}

export default PageHeader
