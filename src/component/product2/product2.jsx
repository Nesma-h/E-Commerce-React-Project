import React, { useContext } from 'react'
import './Product2.style.css'
import { BiSolidChevronRight } from 'react-icons/bi';
import { BiSolidChevronLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { displayContext } from '../../context/DisplayContext';
import Product from '../../common/Product/Product';
import 'swiper/css';
import 'swiper/css/navigation';
import { wishlistContext } from '../../context/WishlistContext';

function Product2() {
  const { productData } = useContext(displayContext)
  const {wishId}=useContext(wishlistContext)
  const productsFullInfo=productData.map(el=>({...el,
    isliked : wishId.includes(el.id)
  }))
  
  return (

    <div className=' xl:px-32 md:px-24 sm:px-20 px-6 py-9'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 items-center '>

        < div className='row-products sec-1'>

          <div className='flex items-center mb-5 pb-2 border-b border-gray-400 justify-between '>
            <p className='uppercase text-lg' > New Products </p>
            <div className='flex gap-2'>
              <BiSolidChevronLeft fontSize={25} cursor={'pointer'} className='next text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
              <BiSolidChevronRight fontSize={25} cursor={'pointer'} className='prev text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
            </div>

          </div>
          <Swiper
            loop={true}
            modules={[ Navigation ]}
            navigation={{
              nextEl: '.sec-1 .next',
              prevEl: '.sec-1 .prev'
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(0,3).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(3,6).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(6,9).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        < div className='row-products sec-2'>

          <div className='flex items-center mb-5 pb-2 border-b border-gray-400 justify-between '>
            <p className='uppercase text-lg' > FEATURE PRODUCT </p>
            <div className='flex gap-2'>
              <BiSolidChevronLeft fontSize={25} cursor={'pointer'} className='next text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
              <BiSolidChevronRight fontSize={25} cursor={'pointer'} className='prev text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
            </div>

          </div>
          <Swiper
            loop={true}
            modules={[ Navigation ]}
            navigation={{
              nextEl: '.sec-2 .next',
              prevEl: '.sec-2 .prev'
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(3,6).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(6,9).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(9,12).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        < div className='row-products sec-3'>

          <div className='flex items-center mb-5 pb-2 border-b border-gray-400 justify-between '>
            <p className='uppercase text-lg' > BEST SELLER </p>
            <div className='flex gap-2'>
              <BiSolidChevronLeft fontSize={25} cursor={'pointer'} className='next text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
              <BiSolidChevronRight fontSize={25} cursor={'pointer'} className='prev text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
            </div>

          </div>
          <Swiper
            loop={true}
            modules={[ Navigation ]}
            navigation={{
              nextEl: '.sec-3 .next',
              prevEl: '.sec-3 .prev'
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(9,12).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(12,15).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(15,18).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        < div className='row-products sec-4'>

          <div className='flex items-center mb-5 pb-2 border-b border-gray-400 justify-between '>
            <p className='uppercase text-lg' > ON SELL </p>
            <div className='flex gap-2'>
              <BiSolidChevronLeft fontSize={25} cursor={'pointer'} className='next text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
              <BiSolidChevronRight fontSize={25} cursor={'pointer'} className='prev text-gray-600 hover:text-[var(--main-color)] cursor pointer active:translate-[2px] transition duration-100' />
            </div>

          </div>
          <Swiper
            loop={true}
            modules={[ Navigation ]}
            navigation={{
              nextEl: '.sec-4 .next',
              prevEl: '.sec-4 .prev'
            }}
          >
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(15,18).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(18,21).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex flex-col gap-3'>
              {productsFullInfo.slice(21,24).map((value, i) => {
                return <Product value={value} key={i} />
              })
              }
              </div>
            </SwiperSlide>

          </Swiper>
        </div>


      </div>
    </div>

  )
}

export default Product2
