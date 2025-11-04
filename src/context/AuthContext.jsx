import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth ,db } from "../fireBase/Firebase"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { wishlistContext } from "./WishlistContext";



export const AuthContext=createContext()

export let AuthContextProvider=({children})=>{
    const [isLoading,setisLoading]=useState(false)
    const [curUser,setcurUser]=useState(null)
    const [isLoadingcurUser,setisLoadingcurUser]=useState(true)
    
    const registerHandler= async(data)=>{
        let {email,password ,firstName ,lastName,number}=data
        // console.log(email,password)
        try{
            setisLoading(true)
            let userData=await createUserWithEmailAndPassword(auth , email,password)
            const id=userData.user.uid
            await setDoc( doc(db,"users",id),{
                id,
                firstName,
                lastName,
                number,
                email,
                password,
                createdAt: new Date()
            } )
            return { success : true }
            
        }
        catch(err){
            console.log(err)
            return { success : false , message: err.message }
        }finally{ setisLoading(false)}
        
    }

    const loginHandler = async(data)=>{
        const {email,password} =data
        try {
            setisLoading(true)
            await signInWithEmailAndPassword (auth,email,password)
            return { success : true }
        } catch (error) {
            return { success : false , message: error.message }
        }finally{ setisLoading(false)}
    }

    
    const fetchUser = async (id) =>{
        let user= await getDoc(doc(db,'users',id))
        if(user.exists()){
            setcurUser(user.data())
        }
        
    }
    useEffect(() => {
        let watch=onAuthStateChanged(auth,(data)=>{
            if(data){
                fetchUser(data.uid)
            }
            else{
                setcurUser(null)
            }
            setisLoadingcurUser(false)
        })
        return ()=> watch()
    }, [])
    const  logOut=async()=>{
        await signOut(auth)
        setcurUser(null)
    }
    

    return <AuthContext.Provider value={{registerHandler, isLoading,logOut, loginHandler ,curUser,isLoadingcurUser}}>
        {children}
    </AuthContext.Provider>
}