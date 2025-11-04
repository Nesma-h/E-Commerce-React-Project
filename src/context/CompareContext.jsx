import axios from "axios";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import swal from 'sweetalert';
// import { useNavigate } from "react-router-dom";
export const CompareContext = createContext()
export const CompareContextProvider = ({ children }) => {
    const [compareList, setCompareList] = useState([])
    const api = 'http://localhost:3000/compare'
    const { curUser } = useContext(AuthContext)
    // const navigate=useNavigate()
    const addToCompareList = async (product, state) => {
        try {
            let { data } = await axios.get(`${api}?userid=${curUser?.id}&productid=${product.id}`)
            if (state == 'add') {
                console.log(data)
                if (data.length == 0) {
                    await axios.post(api,{
                    userid:curUser?.id,
                    productid:product.id,
                    payload:product
                })
                    return { stat: 'add' }
                }
                else {
                    return { stat: 'Notadd' }
                }
            }
            else if (state == 'delete') {
                await axios.delete(`${api}/${data[0].id}`)
                return { state: 'delete' }
            }
        } catch (error) {
            console.log(error)
        }
        getCompareList()
    }
    const getCompareList = async () => {
        try {
            let { data } = await axios.get(`${api}?userid=${curUser?.id}`)
            if (data.length) {
                let productInfo = data.map(el => el.payload)
                setCompareList(productInfo)

                // console.log(productInfo)
            }
        }
        catch (error) {
            console.log(error)
        }
    }



    return <CompareContext.Provider value={{ addToCompareList, compareList, getCompareList }}>
        {children}
    </CompareContext.Provider>
}