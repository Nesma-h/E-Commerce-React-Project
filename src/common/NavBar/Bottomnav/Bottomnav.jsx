import React, { useContext, useEffect, useState } from 'react'
import './Bottomnav.style.css'
import logo from '../../../assets/images/3.png'
import { IoLocationOutline } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { LuLoader } from 'react-icons/lu';
import { Button, Menu, MenuItem } from '@mui/material';
import { wishlistContext } from '../../../context/WishlistContext';
import { CartContext } from '../../../context/CartContext';


function Bottomnav() {

  let { curUser, isLoadingcurUser, logOut } = useContext(AuthContext)
  // console.log(curUser)
  let { getCart } = useContext(CartContext)

  useEffect(() => {
    getCart()
  }, [curUser])
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const { clearData } = useContext(wishlistContext)
  const navigate = useNavigate()
  const handleLogout = async () => {
    handleClose()

    clearData()

    await logOut()
    navigate('/login')
  }

  return (
    <>
      <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5  grid md:grid-cols-3 gap-3 grid-cols-2 border-b border-b-gray-200'>
        <div className='flex flex-row items-center gap-5 col-span-2'>
          <img src={logo} alt="" className='w-[150px]' />
          <IoLocationOutline />
          <div className='relative lg:flex xl:flex hidden'>
            <input type="text" className='border border-gray-300  rounded rounded-2 placeholder:text-[15px] w-100 p-3 focus:outline-none focus:shadow-lg transition ' placeholder='Search for product,Deliver to your home .. ' />
            <div className=' absolute top-[50%] end-5 translate-y-[-50%] opacity-50'>
              < BsSearch />
            </div>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-3 md:col-span-1 col-span-2 justify-end'>

          {
            isLoadingcurUser ?
              <div className=' flex gap-1 items-center justify-center '>
                < LuLoader className='animate-spin' />
                <span>Loading</span>
              </div> :

              curUser ?

                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className=' flex gap-1 items-center justify-center text-[var(--main-color)] rounded px-2 text-[14px]' >
                  <BsPerson />
                  <span>Hello {curUser.firstName} !</span>
                </Button>

                :
                <Link to={'/login'} title='Log In' className='active:translate-0.5 active:shadow w-[50px] w-[50px] h-[50px] rounded-[50%] border border-gray-400 flex flex-row items-center justify-center opacity-70 cursor-pointer text-[18px] '>
                  <BsPerson />
                </Link>

          }
          <div className='flex sm:flex-row gap-2  items-center '>
            <Link to={'/compare'} className='active:translate-0.5 active:shadow w-[50px] h-[50px] rounded-[50%] border border-gray-400 flex flex-row items-center justify-center opacity-70 cursor-pointer '>
              <FaExchangeAlt />
            </Link>
            <Link to={'/wishlist'} className=' active:translate-0.5 active:shadow w-[50px] h-[50px] rounded-[50%] border border-gray-400 flex flex-row items-center justify-center opacity-70 cursor-pointer'>
              <FaRegHeart />
            </Link>
            <Link to={'cart'} className='active:translate-0.5 active:shadow w-[50px] w-[50px] h-[50px] rounded-[50%] border border-gray-400 flex flex-row items-center justify-center opacity-70 cursor-pointer '>
              <HiOutlineShoppingBag />
            </Link>
          </div>


        </div>
      </div>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Bottomnav
