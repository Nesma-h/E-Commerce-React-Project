// import React, { useState } from 'react'
import './Auth.style.css'
import { TextField } from '@mui/material'
import PageHeader from '../../common/PageHeader/PageHeader'
import { FaRegEye } from 'react-icons/fa6';
import { FaRegEyeSlash } from 'react-icons/fa6';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LuLoader } from 'react-icons/lu';
import loginChema from '../../validation/loginValidation';
function Login() {

  // let [show,setshow]=useState(false)
  let { register, handleSubmit, formState: { errors, isDirty, isValid }
  } = useForm({
    resolver: zodResolver(loginChema),
  })
  const navigate=useNavigate()
  const { loginHandler, isLoading } = useContext(AuthContext)
  const [err, seterr] = useState(null)
  let loginSubmit = async (data) => {
    let res = await loginHandler(data)
    
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

        <PageHeader title={'LogIn'} />


        <form action="" className='xl:px-32 md:px-24 sm:px-20 px-6 py-5  flex flex-col gap-3 justify-center  ' onSubmit={handleSubmit(loginSubmit)}>
          <p className='text-center text-[22px]'>LogIn</p>
          <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-5 flex flex-col gap-2'>

            <TextField
              error={errors.email}
              helperText={errors.email ? errors.email.message : ''}
              label='Email'
              type='email'
              className='border border-[var(--main-color)]'
              {...register('email')}

            />
            <div className=' relative'>
              <TextField
                error={errors.password}
                helperText={errors.password ? errors.password.message : ''}
                fullWidth
                label='password'
                {...register('password')}
                type='Password' />

            </div>
            
          </div>
          {
            err &&
            <div className='py-3 px-5 border border-red-900 bg-red-300 text-red-900 my-2 text-center rounded'>
              Something Went Wrong !! Email Or Password Can be wrong
            </div>
          }
          <button disabled={!isDirty || !isValid || isLoading}
            className='registerBtn border border-[var(--main-color)] rounded rounded-2 w-[100px] py-2 mx-auto  transation duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
            {
              isLoading ?
                <div className=' flex gap-1 items-center justify-center'>
                  < LuLoader className='animate-spin' />
                  <span>Loading</span>
                </div>
                : 'login'
            }</button>

          <Link to={'/signup'} className=' mx-auto underline cursor-pointer hover:text-[var(--main-color)] transition duration-200'>
          Don't Have Account !! Register Now ..!
          </Link>
        </form>



      </div>

    </>
  )
}

export default Login