import React from 'react'
import './DealDay.style.css'
import SectionTitle from '../../common/SectionTitle/SectionTitle'
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import img1 from '../../assets/images/1 (4).png'
import img2 from '../../assets/images/2 (4).png'
import img3 from '../../assets/images/3 (4).png'
import Countdown from 'react-countdown';
import 'swiper/css'

import { SwiperSlide,Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
function DealDay() {
  const getdate=new Date(new Date().getFullYear(),11,11,23,45,67)
  const renderer = ({ days,hours, minutes, seconds }) => {
    return(
      <div className=' flex gap-2 justify-center items-center text-[18px] w-[100%]'>
        <span className=' bg-gray-200  py-3 w-[450px] text-center rounded rounded-4'>{days}</span>
        <p> : </p>
        <span className=' bg-gray-200  py-3 w-[450px] text-center rounded rounded-4'>{hours}</span>
        <p> : </p>
        <span className=' bg-gray-200  py-3 w-[450px] text-center rounded rounded-4'>{minutes}</span>
        <p> : </p>
        <span className=' bg-gray-200  py-3 w-[450px] text-center rounded rounded-4'>{seconds}</span>
        
      </div>
    )
  
  };
  return (
    <div className='DealDay xl:px-32 md:px-24 sm:px-20 px-6 py-5 '>
      <SectionTitle title={'Deal Of The Day'}/>


      <Swiper className=' my-5'
      loop={true}
      slidesPerView={3}
      spaceBetween={20}
      modules={[Navigation]}
      navigation={{
        nextEl:'.DealDay .next',
        prevEl:'.DealDay .prev'
      }}
      breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        <SwiperSlide className='flex flex-col gap-5 border border-gray-300 rounded rounded-2xl p-4'>
          <div className='flex flex-row justify-between w-[100%] items-center'>
            <div className=' flex flex-col gap-2 '>
              <span className='text-[white] text-[14px] bg-[var(--main-color)] py-2 px-3 rounded rounded-4xl'>Hot Deals</span>
              <div className='flex gap-1 text-[gold] text-[13px] '>
                <BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/>
              </div>
            </div>
            <span className='text-[white] text-[20px] bg-[var(--main-color)] py-3 px-3 rounded rounded-5'><FiShoppingCart /></span>
          </div>
          <div className='grid grid-cols-3 w-[100%] gap-7'>
            <div className='flex flex-col gap-2 col-span-2'>
                  <span className=' font-bold'>Bell Paper</span>
                  <span className='text-[var(--main-color)] text-[18px]'> $70.30 <del className='text-gray-600'>$85.00</del></span>
                  <div className='w-[100%] h-[10px] rounded-4xl bg-gray-200 col-span-1'>
                    <div className='w-[70%] h-[10px] rounded-4xl bg-[var(--main-color)] col-span-1 '></div>
                  </div>
                  <span className='text-gray-600'>Sold: <span className='text-gray-700 text-[18px]'>30 Items</span></span>
                  <span className='text-gray-600' >Harry Up offer end in</span>
                  <Countdown date={getdate} renderer={renderer}/>
            </div> 
            <div className=''>
                <img src={img1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col gap-5 border border-gray-300 rounded rounded-2xl p-4'>
          <div className='flex flex-row justify-between w-[100%] items-center'>
            <div className=' flex flex-col gap-2 '>
              <span className='text-[white] text-[14px] bg-[var(--main-color)] py-2 px-3 rounded rounded-4xl'>Hot Deals</span>
              <div className='flex gap-1 text-[gold] text-[13px] '>
                <BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/>
              </div>
            </div>
            <span className='text-[white] text-[20px] bg-[var(--main-color)] py-3 px-3 rounded rounded-5'><FiShoppingCart /></span>
          </div>
          <div className='grid grid-cols-3 w-[100%] gap-7'>
            <div className='flex flex-col gap-2 col-span-2'>
                  <span className=' font-bold'>Eggplant</span>
                  <span className='text-[var(--main-color)] text-[18px]'> $70.30 <del className='text-gray-600'>$85.00</del></span>
                  <div className='w-[100%] h-[10px] rounded-4xl bg-gray-200 col-span-1'>
                    <div className='w-[70%] h-[10px] rounded-4xl bg-[var(--main-color)] col-span-1 '></div>
                  </div>
                  <span className='text-gray-600'>Sold: <span className='text-gray-700 text-[18px]'>30 Items</span></span>
                  <span className='text-gray-600' >Harry Up offer end in</span>
                  <Countdown date={getdate} renderer={renderer}/>
            </div> 
            <div className=''>
                <img src={img2} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col gap-5 border border-gray-300 rounded rounded-2xl p-4'>
          <div className='flex flex-row justify-between w-[100%] items-center'>
            <div className=' flex flex-col gap-2 '>
              <span className='text-[white] text-[14px] bg-[var(--main-color)] py-2 px-3 rounded rounded-4xl'>Hot Deals</span>
              <div className='flex gap-1 text-[gold] text-[13px] '>
                <BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/>
              </div>
            </div>
            <span className='text-[white] text-[20px] bg-[var(--main-color)] py-3 px-3 rounded rounded-5'><FiShoppingCart /></span>
          </div>
          <div className='grid grid-cols-3 w-[100%] gap-7'>
            <div className='flex flex-col gap-2 col-span-2'>
                  <span className=' font-bold'>Onion</span>
                  <span className='text-[var(--main-color)] text-[18px]'> $70.30 <del className='text-gray-600'>$85.00</del></span>
                  <div className='w-[100%] h-[10px] rounded-4xl bg-gray-200 col-span-1'>
                    <div className='w-[70%] h-[10px] rounded-4xl bg-[var(--main-color)] col-span-1 '></div>
                  </div>
                  <span className='text-gray-600'>Sold: <span className='text-gray-700 text-[18px]'>30 Items</span></span>
                  <span className='text-gray-600' >Harry Up offer end in</span>
                  <Countdown date={getdate} renderer={renderer}/>
            </div> 
            <div className=''>
                <img src={img3} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col gap-5 border border-gray-300 rounded rounded-2xl p-4'>
          <div className='flex flex-row justify-between w-[100%] items-center'>
            <div className=' flex flex-col gap-2 '>
              <span className='text-[white] text-[14px] bg-[var(--main-color)] py-2 px-3 rounded rounded-4xl'>Hot Deals</span>
              <div className='flex gap-1 text-[gold] text-[13px] '>
                <BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/>
              </div>
            </div>
            <span className='text-[white] text-[20px] bg-[var(--main-color)] py-3 px-3 rounded rounded-5'><FiShoppingCart /></span>
          </div>
          <div className='grid grid-cols-3 w-[100%] gap-7'>
            <div className='flex flex-col gap-2 col-span-2'>
                  <span className=' font-bold'>EggPlants</span>
                  <span className='text-[var(--main-color)] text-[18px]'> $70.30 <del className='text-gray-600'>$85.00</del></span>
                  <div className='w-[100%] h-[10px] rounded-4xl bg-gray-200 col-span-1'>
                    <div className='w-[70%] h-[10px] rounded-4xl bg-[var(--main-color)] col-span-1 '></div>
                  </div>
                  <span className='text-gray-600'>Sold: <span className='text-gray-700 text-[18px]'>30 Items</span></span>
                  <span className='text-gray-600' >Harry Up offer end in</span>
                  <Countdown date={getdate} renderer={renderer}/>
            </div> 
            <div className=''>
                <img src={img2} alt="" />
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    
    </div>
  )
}

export default DealDay
