import React, { useContext, useRef, useState } from 'react'
import './ShortCart.style.css'
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import img from '../../assets/images/1 (4).png'
import { AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
function ShortCart() {
  // const [open, setOpen] = useState(false)
  let subcart=useRef()
  const navigate=useNavigate()
  // console.log(cart)
  const { curUser } = useContext(AuthContext)
  const opencart=()=>{
      if(curUser){
      subcart.current.classList.toggle('translate-x-[100%]')
      }
      else{
        swal({
                title: "You aren't Allow to use this futuer!",
                text: "You Must be Registered Befor Add Any Product To wish list ",
                icon: "warning",
                buttons: {
                    register: {
                        text: "Register Now!!",
                        value: "register",
                    },
                    cancel: "Cancel",
                    
                },
                dangerMode: true,
            }).then((value) => {
                if (value === "register") {
                    navigate("/signup"); 
                }
            });
      }
  }
  const {cart}=useContext(CartContext)
  let total = 0
  cart.map((item) => total += (item.price * item.amount))
  return (
    <div className='ShortCart '>
      
      <div className='fixed z-[1000] end-0 top-[50%] translae-y-[-50%] rounded-tl-lg rounded-bl-lg  p-5 bg-[var(--main-color)] text-white cursor-pointer' >
        <div className='font-black flex items-center text-[20px] cursor-pointer' onClick={()=>opencart()}><HiOutlineShoppingBag /></div>
        </div>
        
        <div ref={subcart} className={`cart  z-[1001] fixed end-0 top-[50%] translate-y-[-50%] rounded-tl-lg rounded-bl-lg p-5 bg-[var(--main-color)] text-white flex flex-col gap-2 transition-transform duration-500 translate-x-[100%]`}>
          < AiOutlineClose className=' absolute translate-[-12px] cursor-pointer' onClick={()=>opencart()} />
          <div className='font-black flex items-center mt-3 cursor-pointer gap-2'><HiOutlineShoppingBag /> <span>{cart.length} Items</span></div>
          <div>
            <img src={img} alt="" className='w-10 h-10 rounded-full bg-white p-2' />
          </div>
          <div className='py-2 px-3 bg-white text-[var(--main-color)] rounded'>$ {total}</div>
        </div>
      
    </div>
  )
}

export default ShortCart
