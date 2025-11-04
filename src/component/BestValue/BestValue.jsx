import React from 'react'
import './BestValue.style.css'
import SectionTitle from '../../common/SectionTitle/SectionTitle'
import img1 from '../../assets/images/1 (3).png'
import img2 from '../../assets/images/2 (3).png'
import img3 from '../../assets/images/3 (3).png'
import { SwiperSlide , Swiper} from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
function BestValue() {
  return (
    <div className='BestValue xl:px-32 md:px-24 sm:px-20 px-6 py-5 flex flex-col gap-5 '>
      <SectionTitle title={'Best Value'} />
      <Swiper className='w-[100%]'
      slidesPerView={3}
      spaceBetween={20}
      modules={[Autoplay , Navigation]}
      navigation={{
          nextEl:'.BestValue .next',
          prevEl:'.BestValue .prev'
      }}
      loop={true}
      breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide className='relative full-card'>
          <div>
            <img src={img1} alt="" className='w-100 h-[270px]' />
          </div>
          <div className='buysave absolute top-3 start-3 bg-[#fffffff0] flex flex-col py-2 px-4  rounded-br rounded-tr rounded-tr-4xl rounded-br-4xl transation duration-500 text-[14px]'>
            <span className='text-[var(--main-color)]'>Buy More .. Save More</span>
            <span className='text-[#252525] tracking-widest'>Fresh Vegetables</span>
          </div>
          <div className='absolute bottom-3 end-3 py-2 px-4 text-[14] text-[white] font-bold bg-[var(--main-color)] rounded rounded-4xl' >
            <span>View Offer</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative full-card'>
          <div>
            <img src={img2} alt="" className='w-100 h-[270px]' />
          </div>
          <div className='buysave absolute top-3 start-3 bg-[#fffffff0] flex flex-col py-2 px-4  rounded-br rounded-tr rounded-tr-4xl rounded-br-4xl transation duration-500 text-[14px]'>
            <span className='text-[var(--main-color)]'>Buy More .. Save More</span>
            <span className='text-[#252525] tracking-widest'>Fresh Vegetables</span>
          </div>
          <div className='absolute bottom-3 end-3 py-2 px-4 text-[14] text-[white] font-bold bg-[var(--main-color)] rounded rounded-4xl' >
            <span>View Offer</span>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative full-card'>
          <div>
            <img src={img3} alt="" className='w-100 h-[270px]' />
          </div>
          <div className='buysave absolute top-3 start-3 bg-[#fffffff0] flex flex-col py-2 px-4  rounded-br rounded-tr rounded-tr-4xl rounded-br-4xl transation duration-500 text-[14px]'>
            <span className='text-[var(--main-color)]'>Buy More .. Save More</span>
            <span className='text-[#252525] tracking-widest'>Fresh Vegetables</span>
          </div>
          <div className='absolute bottom-3 end-3 py-2 px-4 text-[14] text-[white] font-bold bg-[var(--main-color)] rounded rounded-4xl' >
            <span>View Offer</span>
          </div>
        </SwiperSlide>


        <SwiperSlide className='relative full-card'>
          <div>
            <img src={img2} alt="" className='w-100 h-[270px]' />
          </div>
          <div className='buysave absolute top-3 start-3 bg-[#fffffff0] flex flex-col py-2 px-4  rounded-br rounded-tr rounded-tr-4xl rounded-br-4xl transation duration-500 text-[14px]'>
            <span className='text-[var(--main-color)]'>Buy More .. Save More</span>
            <span className='text-[#252525] tracking-widest'>Fresh Vegetables</span>
          </div>
          <div className='absolute bottom-3 end-3 py-2 px-4 text-[14] text-[white] font-bold bg-[var(--main-color)] rounded rounded-4xl' >
            <span>View Offer</span>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default BestValue
