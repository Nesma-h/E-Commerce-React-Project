import './Product.style.css'
// import img from '../../../assets/images/1 (4).png'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbHeartPlus } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useContext, useRef } from 'react';
import { wishlistContext } from '../../context/WishlistContext';
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import ShortCart from '../../component/ShortCart/ShortCart';
import { CartContext } from '../../context/CartContext';
import { CompareContext } from '../../context/CompareContext';



function Product({ value }) {
    const imgRef=useRef()
    
    const { actionOfWishlist } = useContext(wishlistContext)
    const { curUser } = useContext(AuthContext)
    const {addToCart,cart}=useContext(CartContext)
    const { addToCompareList } = useContext(CompareContext)
    const navigate=useNavigate()
    let handleWishList = async (value) => {
        if (curUser) {
            let { state } = await actionOfWishlist(value);
            if (state == 'add') {
                toast.success('Sucess Add Your Product To Your WishList')
            }
            else {
                toast.success('This Product Removed From Your WishList')
            }
        }
        else {
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
        // console.log(value)
    }
    const handleAddToCart=async (val)=>{
        if(curUser){
        imageAnimate()
        await addToCart({...val,amount:1},'add')
        console.log(cart)
        }
        else {
            swal({
                title: "You aren't Allow to use this futuer!",
                text: "You Must be Registered Befor Add Any Product To Your Cart ",
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
    
    const imageAnimate=()=>{
        const img =imgRef.current
        const cart=document.querySelector('.ShortCart')
        // console.log(img,cart)
        const placeofImg=img.getBoundingClientRect()
        const placeofCart=cart.getBoundingClientRect()
        // console.log(placeofCart,placeofImg)
        const clone=img.cloneNode(true)
        clone.style.position='fixed'
        clone.style.top=`${placeofImg.top}px`
        clone.style.left=`${placeofImg.left}px`
        
        // clone.style.bottom=`${placeofImg.bottom}px`
        clone.style.height=`${placeofImg.height}px`
        clone.style.width=`${placeofImg.width}px`
        clone.style.transition=`1s ease-in-out`
        // console.log(clone)
        clone.style.zIndex=`100`
        document.body.appendChild(clone);
        requestAnimationFrame(()=>{
            clone.style.top='50%'
            clone.style.transform = `translate(${placeofCart.right - placeofImg.right}px)`;
            clone.style.width='100px'
            clone.style.height='100px'
            clone.style.opacity='0.4'
            // clone.style.transition='2s ease-in-out'
        })
        clone.addEventListener("transitionend", () => {
            clone.remove()
            let cart2=document.querySelector('.cart')
            cart2.classList.remove('translate-x-[100%]')
            setTimeout(() => {
                cart2.classList.add('translate-x-[100%]')
            }, 2000);
        })


        // console.log(clone)
    }
    const handleAddToCompare=async (val)=>{
        if(curUser){
        let {stat}=await addToCompareList(val,'add')
        if (stat == 'add') {
                toast.success('Sucess Add Your Product To Your WishList')
        }
        else if(stat=='Notadd'){
                swal({
                title: "Already Existed",
                text: "You Have Been Added This Product To Compare List ",
                icon: "info",
                buttons: {
                    cancel: "Cancel",
                },
                dangerMode: true,
            })
        }
        }
        else {
            swal({
                title: "You aren't Allow to use this futuer!",
                text: "You Must be Registered Befor Add Any Product To Your Cart ",
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

    return (
        <div className='Product'>
            <div className='container-img'>
                <img src={value.image} ref={imgRef} alt="" />
                <div className='process one'>
                    <div>
                        <FaRegEye />
                    </div>
                    <div onClick={() => handleAddToCompare(value)}>
                        <MdOutlineCompareArrows />
                    </div>
                </div>
            </div>
            <div className='card-body'>

                <div className='flex gap-[1px]'>
                    <FaStar color='#ffb321' />
                    <FaStar color='#ffb321' />
                    <FaStar color='#ffb321' />
                    <FaRegStar color='#ffb321' />
                    <FaRegStar color='#ffb321' />
                </div>
                <p> {value.title} </p>
                <div className='price'>
                    <p>${value.price}</p>
                    <del>${value.price}</del>
                </div>
                <div className='bottom'>
                    <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <div>
                        <TbShoppingCartPlus onClick={() => handleAddToCart(value)}/>
                    </div>
                </div>

                <div className='process two'>
                    <div>
                        <FaRegEye />
                    </div>
                    <div>
                        <MdOutlineCompareArrows onClick={()=> handleAddToCompare(value)}/>
                    </div>
                    <div >
                        {value.isliked && curUser?
                            <FaHeart onClick={() => handleWishList(value)} color='red' /> :
                            <TbHeartPlus onClick={() => handleWishList(value)} />
                        }

                    </div>
                    <div>
                        <TbShoppingCartPlus onClick={() => handleAddToCart()}/>
                    </div>
                </div>

            </div>
            <div className='heart'>
                {value.isliked && curUser?
                    <FaHeart onClick={() => handleWishList(value)} color='red' /> :
                    <TbHeartPlus onClick={() => handleWishList(value)} />

                }
            </div>
        </div>
    )
}

export default Product
