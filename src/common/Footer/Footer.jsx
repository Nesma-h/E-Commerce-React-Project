import React from 'react'
import './Footer.style.css'
import logo from '../../assets/images/3.png'
import googlePlay from '../../assets/images/playstore.svg'
import appStore from '../../assets/images/appstore.svg'
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPrinter } from 'react-icons/fi';
import cart1 from '../../assets/images/discover.png'
import cart2 from '../../assets/images/visa.png'
import cart3 from '../../assets/images/giro-pay.png'
import cart4 from '../../assets/images/american.png'
import cart5 from '../../assets/images/master-card.png'

function Footer() {
  return (
    <div className='footer xl:px-32 md:px-24 sm:px-5 px-6 py-5 bg-gray-100 sm:text-[17px] text-[12px]' >
      <div className=' py-5  grid lg:grid-cols-3 xl:grid-cols-5 sm:grid-cols-2 border-b border-b-gray-300 gap-8'>
        <div className='flex flex-col gap-5'>
          <img src={logo} alt="" className='w-[150px]' />
          <p>it is a long established fact that a reader will be distracted by the readable content.</p>
          <div className='flex sm:flex-row flex-col gap-3 items-center'>
            <div className='text-gray-700 bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded rounded-[50%] hover:bg-[var(--main-color)] hover:text-[white] transation duration-300'><FaGoogle /></div>
            <div className='text-gray-700 bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded rounded-[50%] hover:bg-[var(--main-color)] hover:text-[white] transation duration-300'><FaTwitter /></div>
            <div className='text-gray-700 bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded rounded-[50%] hover:bg-[var(--main-color)] hover:text-[white] transation duration-300'><FaInstagram /></div>
            <div className='text-gray-700 bg-gray-200 w-[40px] h-[40px] flex justify-center items-center rounded rounded-[50%] hover:bg-[var(--main-color)] hover:text-[white] transation duration-300'><FaPinterestP /></div>
          </div>

          <div className='sm:flex-row flex-col flex gap-2 w-[80%]'>
            <img src={googlePlay} alt="" className=' cursor-pointer w-[100%]' />
            <img src={appStore} alt="" className=' cursor-pointer w-[100%]' />
          </div>
        </div>

        <div className='footer-list flex flex-col gap-4'>
          <p className=' text-[20px] font-medium'>About Fastkart</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>About Us</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Contact Us</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Terms & Condition</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Career</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Latest Blog</p>
            </li>
          </ul>
        </div>

        <div className='footer-list flex flex-col gap-4'>
          <p className=' text-[20px] font-medium'>Useful Links</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Your Order</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Your Account</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Track Orders</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>your Wishlist</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>FAQs</p>
            </li>
          </ul>
        </div>

        <div className='footer-list flex flex-col gap-4'>
          <p className=' text-[20px] font-medium'>Categories</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Fresh Vegetables</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Hot Spices</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>Brand New Pages</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>New Backery</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 hover:text-[var(--main-color)] hover:translate-x-2 transation duration-300'>
              <div className='right1  transation duration-300'><FaChevronRight/></div>
              <div className='right2 hidden  transation duration-300'><FaAnglesRight/></div>
              <p>New Grocery</p>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <p className=' text-[20px] font-medium'>Store information</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2 text-gray-500 '>
              <div className='right1  transation duration-300'><IoLocationOutline/></div>
              
              <p>Fastkart Demo Store, Demo store india 345 - 659</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 '>
              <div className='right1  transation duration-300'><BsTelephone/></div>
              <p>Call us: 123-456-7890</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 '>
              <div className='right1  transation duration-300'><AiOutlineMail/></div>
              <p>Email Us: Support@Fastkart.coms</p>
            </li>

            <li className='flex items-center gap-2 text-gray-500 '>
              <div className='right1  transation duration-300'><FiPrinter/></div>
              <p>123456</p>
            </li>

          
          </ul>

        </div>
      </div>

      <div className='py-5 flex justify-between lg:flex-row flex-col'> 
        <p className='text-gray-600'>2022 Copyright Powered By Nesmaaa</p>
        <div className='flex gap-2 items-center sm:flex-row flex-col'>
          <img src={cart1} alt="" className=' w-[40px] h-[40px]'/>
          <img src={cart2} alt="" className=' w-[40px] h-[13px]'/>
          <img src={cart5} alt="" className=' w-[40px] h-[40px]'/>
          <img src={cart3} alt="" className=' w-[40px] h-[17px]'/>
          <img src={cart4} alt="" className=' w-[40px] h-[34px]'/>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
