import React from 'react'
import './SectionTitle.style.css'
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
function SectionTitle({ title, children }) {
  return (
    <>
      <div className=' flex justify-between items-center lg:flex-row flex-col'>
        <p className='text-[25px] font-bold'>{title}</p>
        {children ?
          children :
          <div className='flex flex-row gap-4 text-[var(--main-color)] text-[18px]'>
            <div className='prev shadow shadow-[#b4afaf] p-[10px] rounded rounded-3 hover:bg-[var(--main-color)] hover:text-white transation active:shadow-[#343333]'>
              <FaChevronLeft />
            </div>
            <div className='next shadow shadow-[#b4afaf] p-[10px] rounded rounded-3 hover:bg-[var(--main-color)] hover:text-white transation active:shadow-[#343333]'>
              <FaChevronRight />
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default SectionTitle
