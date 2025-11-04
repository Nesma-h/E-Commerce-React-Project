import { createContext,  useState } from "react";
import axios from 'axios'
export const displayContext=createContext();

export const DisplayContextProvider = ({children})=>{

    const api='http://localhost:3000/products'
    const [productData,setProductData]=useState([])
    let [catSet,catSett]=useState(null);
    const getAllData=async()=>{
        try {
            let {data}=await axios.get(api)
            setProductData(data)
            const uniqueCats = new Set(data.map((val) => val.category));
            catSett(uniqueCats);
        } catch (error) {
            console.log(error)
        }
        
        
    }
    

    return <displayContext.Provider value={{getAllData ,productData,catSet}}>
        {children}
    </displayContext.Provider>
}