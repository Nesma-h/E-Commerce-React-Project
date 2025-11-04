import React, { useState } from 'react'
import './Topnav.style.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';

function Topnav() {
  const [IsClose,setIsClose]=useState(false)
  return (
    <>
    {!IsClose ? (
        <div className="relative bg-[var(--main-color)] h-8">
          <Swiper 
          className='h-8 '
          direction='vertical'
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          >
          <SwiperSlide >
            <p className="text-center  text-[14px] py-1 text-white w-[80%]  overflow-hidden text-ellipsis whitespace-nowrap mx-auto">
            Wrap new offers/gift every single day on Weekends.<span className="font-bold cursor-pointer">New Coupon Code: Fast024</span>
            </p>
          </SwiperSlide>

          <SwiperSlide > 
            <p className="text-center text-[14px] py-1 text-white w-[95%]  overflow-hidden text-ellipsis whitespace-nowrap">
            Something You Love Is Now On Sale.<span className="font-bold underline cursor-pointer"> Buy Now..! </span>
            </p>
          </SwiperSlide>
          </Swiper>

          <p
            onClick={() => setIsClose(!IsClose)}
            className="absolute z-30 flex flex-row gap-1 top-1/2 -translate-y-1/2 right-2 items-center text-white text-[14px] cursor-pointer font-bold"
          >
            <span className='close'>Close</span> <AiOutlineClose />
          </p>
        </div>
      ) : <div></div>}
      </>
    
  );
}

export default Topnav
