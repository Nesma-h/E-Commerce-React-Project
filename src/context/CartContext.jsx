import axios from "axios";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext()
export const CartContextProvider = ({ children }) => {
    const[cart,setCart]=useState([])
    const api='http://localhost:3000/cart'
    
        const {curUser}=useContext(AuthContext)
    const addToCart=async (product,state)=>{
        try{
            let {data}=await axios.get(`${api}?userid=${curUser?.id}&productid=${product.id}`)
            if(state=='add'){
            if(data.length!=0){
                await axios.delete(`${api}/${data[0].id}`)
                product.amount++
                await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
            }
            else{
                await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
                
            }
        }
        else if(state=='plus'){
            await axios.delete(`${api}/${data[0].id}`)
                product.amount++
                await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
        }
        else if(state=='minus'){
            await axios.delete(`${api}/${data[0].id}`)
                product.amount--
                await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
        }
        else if(state=='delete'){
            await axios.delete(`${api}/${data[0].id}`)
        }
        }catch (error) {
            console.log(error)
        }
        getCart()
    }
    const getCart=async()=>{
        try{
            let {data}=await axios.get(`${api}?userid=${curUser?.id}`)
            if (data.length){
                
                let productInfo=data.map(el=>el.payload)
                setCart(productInfo)
                
                // console.log(productInfo)
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    

    return <CartContext.Provider value={{addToCart,cart,getCart}}>
        {children}
    </CartContext.Provider>
}