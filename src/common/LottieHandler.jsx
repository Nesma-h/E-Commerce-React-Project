import Lottie from 'lottie-react'
import React from 'react'
import loader1 from '../assets/lottifiles/Loading.json'
import loader2 from '../assets/lottifiles/loading (1).json'
import error from '../assets/lottifiles/Error 404.json'
import { Link } from 'react-router-dom'

function LottieHandler({ stat }) {
    switch (stat) {
        case 'main':
            return (

                <div className='flex h-[100vh] items-center justify-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <Lottie animationData={loader2} className='w-[80%]' />
                        <p className='font-black text-2xl '>Loading Your Page Plz Wait.. </p>
                    </div>

                </div>
            )
        case 'mshmain':
            return(
                <div className='flex h-[100vh] items-center justify-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <Lottie animationData={loader1} className='w-[80%]' />
                        <p className='font-black text-2xl '>Loading Your Website Plz Wait.. </p>
                    </div>

                </div>
            ) 
        case 'err':
            return(
                <div className='flex h-[100vh] items-center justify-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <Lottie animationData={error} className='w-[80%]' />
                        <Link to={'/'} className='text-blue-600 text-xl underline '>What About Goung Back to Safty.. </Link>
                    </div>

                </div>
            )    



        
    }

    <div className='flex h-[100vh] items-center justify-center'>
        <div className='flex flex-col gap-2 items-center'>
            <Lottie animationData={loader1} className='w-[80%]' />
            <p className='font-black text-2xl '>Loading Your Page Plz Wait.. </p>
        </div>

    </div>


}

export default LottieHandler