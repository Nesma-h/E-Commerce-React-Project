/* eslint-disable react-refresh/only-export-components */
import  axios  from "axios";
import { createContext, useContext,  useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const wishlistContext=createContext();

export const WishlistContextProvider=({children})=>{
    const [wishId,setWishId]=useState([])
    const [wishlist,setwishlist]=useState([])
    const {curUser}=useContext(AuthContext)
    const api='http://localhost:3000/wishlist'
    const actionOfWishlist=async (product)=>{
        try {
            let {data}=await axios.get(`${api}?userid=${curUser?.id}&productid=${product.id}`)
            if(data.length!=0){
                await axios.delete(`${api}/${data[0].id}`)
                // remove from local state
                setwishlist(wishlist.filter(el => el.id !== product.id))
                setWishId(wishId.filter(id => id !== product.id))
                return {state:'remove'}
            }
            else{
                await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
                setwishlist([...wishlist,product])
                setWishId([...wishId,product.id])
                console.log(wishlist)
                return {state:'add'}
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }
    const getWishlist=async(mode)=>{
        try{
            let {data}=await axios.get(`${api}?userid=${curUser?.id}`)
            if (data.length){
                if(mode=='id'){
                    let productIds=data.map(el=>el.productid)
                    setWishId(productIds)
                }
                else{
                let productInfo=data.map(el=>el.payload)
                setwishlist(productInfo)
                }
                // console.log(productInfo)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const clearData=()=>{
        setWishId([])
        setwishlist([])
    }
    useEffect(()=>{
        if(curUser){
            getWishlist('id')
        }else{
            clearData()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[curUser])
    return <wishlistContext.Provider value={{wishId,wishlist,clearData,actionOfWishlist,getWishlist}}>
        {children}
    </wishlistContext.Provider>
}