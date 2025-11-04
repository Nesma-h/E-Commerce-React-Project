import React, { useEffect, useRef } from 'react'
import './Categories.style.css'

import img1 from '../../assets/images/2 (2).png'
import img2 from '../../assets/images/2 (4).png'
import img3 from '../../assets/images/3 (2).png'
import img4 from '../../assets/images/3 (4).png'
import img5 from '../../assets/images/4 (2).png'
import img6 from '../../assets/images/4 (1).png'
import img7 from '../../assets/images/5.png'
import img8 from '../../assets/images/7.png'
import img9 from '../../assets/images/6.png'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import {motion, useAnimation, useInView} from 'framer-motion'


import SectionTitle from '../../common/SectionTitle/SectionTitle'

import { SwiperSlide, Swiper } from 'swiper/react'

function Categories() {
  let imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
  let box=useRef()
  let inview=useInView(box)
  let animate=useAnimation()

  useEffect(()=>{
    if(inview){
      animate.start('visable')
    }
    else{
      animate.start('hidden')
    }
    
  },[inview,animate])
  return (
    <div className='Categories flex flex-col gap-7 xl:px-32 md:px-24 sm:px-20 px-6 py-10'>
      <SectionTitle title={'Shop By Categories'} />
      <motion.div ref={box}
      variants={{
        hidden:{opacity:0,y:100 , filter:'blur(2px)'},
        visable:{opacity:1,y:0 , filter:'blur(0px'}
      }}
      initial={'hidden'}
      animate={animate}
      transition={{duration:1}}
      
      >
      <Swiper className='w-[100%]'
        slidesPerView={7}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay , Navigation]}
        autoplay={{ delay: 2000 ,
          pauseOnMouseEnter: true
        }}
        navigation={{
          nextEl:'.Categories .next',
          prevEl:'.Categories .prev',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          380:{slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          
          1024: { slidesPerView: 7 },
        }}
      >
        {imgs.map((value, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col gap-5 '>
              <div className=' bg-yellow-100 flex justify-center items-end rounded-[40%]  hover:rounded-none transation duration-500 w-[150px] h-[120px]'><img src={value} alt="" className='w-[100px]' /></div>
              <p>Rice & floor</p>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      </motion.div>


    </div>
  )
}

export default Categories
