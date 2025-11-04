
import './Navlinks.style.css'
import { RiMenu2Fill } from 'react-icons/ri';
import { FaFire } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

import img1 from '../../../assets/images/vegetable.svg'
import img2 from '../../../assets/images/cup.svg'
import img3 from '../../../assets/images/meats.svg'
import img4 from '../../../assets/images/breakfast.svg'
import img5 from '../../../assets/images/frozen.svg'
import img6 from '../../../assets/images/biscuit.svg'
import img7 from '../../../assets/images/grocery.svg'
import img8 from '../../../assets/images/mega-menu.png'

function Navlinks() {

  return (
    <>
      <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5 flex sm:flex-row gap-5 flex-col justify-between items-center my-4 '>


        <ul className='flex flex-row gap-5 items-center'>
          <li className=' relative'>
            <div className='flex flex-row gap-2 px-3 border-r border-r-2 border-r-gray-200 items-center text-[var(--main-color)] '>
              <RiMenu2Fill /> <span className='text-[black]'>All Categories</span>
            </div>

            <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-lg top-[500%] invisible opacity-0'>
              <div className=' flex flex-row  gap-4 items-center'><img src={img1} alt="" className=' w-[17px]' /> <span className=' relative'>Vigetables & Fruit</span></div>
              <div className=' flex flex-row  gap-4 items-center'><img src={img2} alt="" className=' w-[17px]' /> <span className=' relative'>Beverage </span></div>
              <div className=' flex flex-row  gap-4 items-center'><img src={img3} alt="" className=' w-[17px]' /> <span className=' relative'>Meat & SeaFood</span></div>
              <div className=' flex flex-row  gap-4 items-center'> <img src={img4} alt="" className=' w-[17px]' /> <span className=' relative'>BreakFast & Dairy</span></div>
              <div className=' flex flex-row  gap-4 items-center'> <img src={img5} alt="" className=' w-[17px]' /> <span className=' relative'>Frozen Food</span></div>
              <div className=' flex flex-row  gap-4 items-center'> <img src={img6} alt="" className=' w-[17px]' /> <span className=' relative'>Buiscuits & Snakes</span> </div>
              <div className=' flex flex-row  gap-4 items-center'> <img src={img7} alt="" className=' w-[17px]' /> <span className=' relative'>Drockery & Staples</span> </div>

            </div>

          </li>
          <div className='hidden lg:flex flex-row gap-5 items-center'>
            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Home < FaChevronDown />
              </div>

              <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-lg top-[500%] invisible opacity-0'>
                <span className=' relative'>Sweet Shop</span>
                <span className=' relative'>Cart Shop </span>
                <span className=' relative'>Organic</span>
                <span className=' relative'>Super Shop</span>
                <span className=' relative'>Classic Shop </span>
                <span className=' relative'>Furniture</span>
                <span className=' relative'>Search Oriented</span>
                <span className=' relative'>Category Focused</span>
                <span className=' relative'>Fashon</span>
                <span className=' relative'>Book</span>
                <span className=' relative'>Digital</span>
              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Shop < FaChevronDown />
              </div>

              <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-xl top-[500%] invisible opacity-0'>
                <span className=' relative'>Shop Category Slider</span>
                <span className=' relative'>Shop Category SideBar</span>
                <span className=' relative'>Shop Banner</span>
                <span className=' relative'>Shop Left SideBar</span>
                <span className=' relative'>Shop List </span>
                <span className=' relative'>Shop Right SideBar</span>
                <span className=' relative'>Shop Top Filter</span>

              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Product < FaChevronDown />
              </div>
              <div className='down grid grid-cols-4 py-5 gap-5 shadow-lg top-[500%] invisible opacity-0 bg-[white] rounded rounded-2 absolute w-[1000px] translate-x-[-350px]'>
                <div className='col-span-1 flex flex-col gap-4 ps-5'>
                  <h6 className='relative'>Product pages</h6>
                  <span className=' relative'>Product Thumbnail</span>
                  <span className=' relative'>Product image</span>
                  <span className=' relative'>Product Sticky</span>
                  <span className=' relative'>Product Slider</span>
                  <span className=' relative'>Product Accordion </span>
                  <span className=' relative'>Product Tap</span>
                  <span className=' relative'>Product Digital</span>

                </div>

                <div className='col-span-1 flex flex-col gap-4   '>
                  <h6 className='relative'>Product Featuers</h6>
                  <span className=' relative'>Bundle</span>
                  <span className=' relative'>Sold Out </span>
                  <span className=' relative'>Sale CountDown</span>
                  <span className=' relative'>Super Shop</span>
                  <span className=' relative'>Classic Shop </span>
                  <span className=' relative'>Furniture</span>

                </div>

                <div className='col-span-1 flex flex-col gap-4   '>
                  <h6 className='relative'>Product Varients Style</h6>
                  <span className=' relative'>Varient Rectangle</span>
                  <span className=' relative'>Varient Circle </span>
                  <span className=' relative'>Varient Image Switch</span>
                  <span className=' relative'>Varient Color</span>
                  <span className=' relative'>Varient  Radio Button</span>
                  <span className=' relative'>Varient Drop Down</span>
                  <span className=' relative'>Varient Oriented</span>
                </div>
                <div className='col-span-1'>
                  <img src={img8} alt="" className='w-100 h-100' />
                </div>
              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Mega-Menu< FaChevronDown />
              </div>
              <div className='down down-4 grid grid-cols-4 py-5 gap-5 shadow-lg top-[500%] invisible opacity-0 bg-[white] rounded rounded-2 absolute w-[1000px] translate-x-[-350px] '>
                <div className='col-span-1 flex flex-col gap-4 ps-5'>
                  <h6 className='relative'>Daily Vegetables</h6>
                  <span className=' relative'>Beans</span>
                  <span className=' relative'>Porocli</span>
                  <span className=' relative'>chilies</span>
                  <span className=' relative'>Salad</span>
                  <span className=' relative'>Cucumber </span>
                  <span className=' relative'>Herbs</span>
                  <span className=' relative'>Lettuce</span>

                </div>

                <div className='col-span-1 flex flex-col gap-4   '>
                  <h6 className=' relative'>Baby Tender</h6>
                  <span className=' relative'>Bundle</span>
                  <span className=' relative'>Sold Out </span>
                  <span className=' relative'>Sale CountDown</span>
                  <span className=' relative'>Super Shop</span>
                  <span className=' relative'>Classic Shop </span>
                  <span className=' relative'>Furniture</span>

                </div>

                <div className='col-span-2 flex flex-col gap-4   '>
                  <h6 className='relative'>Exotic Vegetables</h6>
                  <span className=' relative'>Varient Rectangle</span>
                  <span className=' relative'>Varient Circle </span>
                  <span className=' relative'>Varient Image Switch</span>
                  <span className=' relative'>Varient Color</span>

                </div>

              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Blogs < FaChevronDown />
              </div>

              <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-lg top-[500%] invisible opacity-0'>
                <span className=' relative'>Blog Grid</span>
                <span className=' relative'>Blog Details</span>
                <span className=' relative'>Blog List</span>

              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Pages < FaChevronDown />
              </div>

              <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-lg top-[500%] invisible opacity-0'>
                <span className=' relative'>Page 1</span>
                <span className=' relative'>Page 2 </span>
                <span className=' relative'>Page 3</span>
                <span className=' relative'>Page 4</span>

              </div>
            </li>

            <li className='relative'>
              <div className='liDiv flex flex-row gap-2 items-center'>
                Seller < FaChevronDown />
              </div>

              <div className='down flex flex-col gap-4 bg-[white] rounded rounded-2 absolute w-[250px] p-3 shadow-lg top-[500%] invisible opacity-0'>
                <span className=' relative'>Sweet Shop</span>
                <span className=' relative'>Cart Shop </span>
                <span className=' relative'>Organic</span>
                <span className=' relative'>Super Shop</span>
                <span className=' relative'>Classic Shop </span>
                <span className=' relative'>Furniture</span>
                <span className=' relative'>Search Oriented</span>
                <span className=' relative'>Category Focused</span>
                <span className=' relative'>Fashon</span>
                <span className=' relative'>Book</span>
                <span className=' relative'>Digital</span>
              </div>
            </li>

          </div>
        </ul>


        <div className='cursor-pointer bg-[#0c9e8a] font-bold flex flex-row gap-2 p-3 text-[white] sm:w-[185px] w-[100px] justify-center rounded rounded-1 items-center sm:text-[17px] text-[12px] '>
          <FaFire /> Hot Deals
        </div>

      </div>


    </>
  )
}

export default Navlinks
