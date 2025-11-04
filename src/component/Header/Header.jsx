import React from 'react'
import './Header.style.css'
import img1 from '../../assets/images/1 (1).png'
import img2 from '../../assets/images/2 (1).png'
import img3 from '../../assets/images/3 (1).png'
import img4 from '../../assets/images/4.png'

function Header() {
  return (
    <div className='Header-head grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:px-32 md:px-16 sm:px-10 px-4 py-9 gap-4'>

      {/* --- الصورة الأولى --- */}
      <div className='col-span-2 relative'>
        <img src={img1} alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className='absolute inset-0 flex flex-col justify-center gap-2 sm:gap-3 xl:px-16 lg:px-10 md:px-6 sm:px-4 px-3'>
          <span className='text-[var(--main-color)] tracking-widest text-xs sm:text-sm md:text-base'>ORGANIC</span>
          <span className='font-bold text-[22px] sm:text-[30px] md:text-[38px] lg:text-[40px]'>100% Fresh</span>
          <span className='text-[#545e70] text-[16px] sm:text-[20px] md:text-[26px] font-light leading-tight'>
            Fruit & <br className='hidden sm:block' /> Vegetables
          </span>
          <span className='text-[#545e70] text-xs sm:text-sm md:text-base leading-tight'>
            Free shipping on all your <br className='hidden sm:block' /> order. We deliver, you enjoy
          </span>

          <div className='cursor-pointer bg-[#0c9e8a] flex flex-row gap-2 p-2 sm:p-3 text-white w-[120px] sm:w-[150px] justify-center rounded items-center text-[12px] sm:text-[15px] mt-2'>
            Shop Now
          </div>
        </div>
      </div>

      {/* --- الصورة الثانية --- */}
      <div className='sm:flex hidden col-span-1 relative'>
        <img src={img2} alt="" className="w-full h-full object-cover rounded-2xl" />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 px-2 text-center'>
          <span className='text-white font-bold text-[13px] sm:text-[16px] md:text-lg'>Fresh & 100% Organic</span>
          <span className='text-white text-[12px] sm:text-[15px]'>Farmer's Market</span>
          <div className='cursor-pointer bg-white flex flex-row gap-2 p-2 sm:p-3 text-[var(--main-color)] w-[120px] sm:w-[150px] justify-center rounded items-center text-[13px] sm:text-[16px] mt-1'>
            Shop Now
          </div>
        </div>
      </div>

      {/* --- الصورة الثالثة والرابعة --- */}
      <div className='col-span-1 sm:grid grid-rows-2 gap-4 hidden'>
        <div className='relative'>
          <img src={img3} alt="" className="w-full h-full object-cover rounded-2xl" />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2'>
            <p className='text-[13px] sm:text-[15px] md:text-lg leading-tight'>Organic Lifestyle</p>
            <p className='text-[13px] sm:text-[15px] md:text-lg leading-tight'>Best Weekend Sales</p>
          </div>
        </div>

        <div className='relative'>
          <img src={img4} alt="" className="w-full h-full object-cover rounded-2xl" />
          <div className='absolute inset-0 flex flex-col justify-start text-white px-3 sm:px-5 py-3 sm:py-6'>
            <p className='font-bold text-[15px] sm:text-[18px] md:text-[20px]'>Safe Food Saves Life</p>
            <p className='text-[12px] sm:text-[15px]'>Discount Offer</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header
