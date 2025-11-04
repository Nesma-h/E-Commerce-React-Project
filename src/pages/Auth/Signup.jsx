// import React, { useState } from 'react'
import './Auth.style.css'
import { TextField } from '@mui/material'
import PageHeader from '../../common/PageHeader/PageHeader'
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import registerChema from '../../validation/regiserValidation';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LuLoader } from 'react-icons/lu';
function Signup() {

  


  // let [show,setshow]=useState(false)
  let {register,handleSubmit,formState : {errors , isDirty ,isValid}
  }=useForm({
    mode: "onChange",
  resolver: zodResolver(registerChema),
})
const navigate=useNavigate()
const {registerHandler , isLoading} = useContext(AuthContext)
const [err,seterr]=useState(null)
  let registerSubmit= async (data)=>{
    let res = await registerHandler(data)
    console.log(isLoading +'   is loading')
    if(res.success){
        console.log(true)
        seterr(null)
        navigate('/')

    }
    else{
        seterr(res.message)
    }
  }
  

  return (
    
    <>
    <div className=''>
    
    <PageHeader title={'SignUp'}/>

    
    <form action="" className='xl:px-32 md:px-24 sm:px-20 px-6 py-5  flex flex-col gap-3 justify-center  ' onSubmit={handleSubmit(registerSubmit)}>
      <p className='text-center text-[22px]'>SignUp</p>
      <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5 flex flex-col gap-2'>
        <TextField
        error={errors.firstName}
        label='First Name'
        type='text'
        helperText={errors.firstName?errors.firstName.message:''}
        {...register('firstName')}
        />
        <TextField
        label='Last Name'
        error={errors.lastName}
        helperText={errors.lastName?errors.lastName.message:''}
        type='text'
        {...register('lastName')}

        />
        <TextField
        label='Phone Number'
        error={errors.number}
        helperText={errors.number?errors.number.message:''}
        type='text'
        {...register('number')}

        />
      <TextField
      error={errors.email}
      helperText={errors.email?errors.email.message:''}
        label='Email'
        type='email'
        className='border border-[var(--main-color)]'
        {...register('email')}

        />
        <div className=' relative'>
        <TextField
        error={errors.password}
        helperText={errors.password?errors.password.message:''}
        fullWidth
        label='password'
        {...register('password')}

        type='Password'/>
        {/* <div  className={`${show ? 'hidden' : 'flex'} absolute top-1/2 -translate-y-1/2 right-4 transition duration-300 hover:text-[var(--main-color)] cursor-pointer`} title='Show Password' onClick= { () => setshow(!show) }><BsEyeFill/></div>

        <div  className={`${!show ? 'hidden' : 'flex'} absolute top-1/2 -translate-y-1/2 right-4 transition duration-300 hover:text-[var(--main-color)] cursor-pointer`} title='Show Password' onClick= { () => setshow(!show) }><BsEyeSlashFill/></div> */}
        </div>
        <TextField
        error={errors.confirmPass}
        helperText={errors.confirmPass?errors.confirmPass.message:''}
        label='Confirm Password'
        type='password'
        {...register('confirmPass')}

        />
      </div>
      {
      err &&
      <div className='py-3 px-5 border border-red-900 bg-red-300 text-red-900 my-2 text-center rounded'>
        Something Went Wrong 
      </div>
      }
      <button disabled={!isDirty || !isValid || isLoading } 
      className='registerBtn border border-[var(--main-color)] rounded rounded-2 w-[100px] py-2 mx-auto  transation duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'> 
      {
        isLoading ? 
        <div className=' flex gap-1 items-center justify-center'>
          < LuLoader className='animate-spin'/> 
          <span>Loading</span>
        </div>
      : 'Register'
      }</button>

      <Link to={'/login'} className=' mx-auto underline cursor-pointer hover:text-[var(--main-color)] transition duration-200'>
          Already Have An Account !!
      </Link>
    </form>
      
      
      
      </div>
      
    </>
  )
}

export default Signup