'use client'

import { useState } from 'react'
import FireIcon from './fire'
import LightiningIcon from './lightining'
import SpannerIcon from './spanner'
import GraduateIcon from './graduate'
import CloudIcon from './cloud'
import MoneyIcon from './money'

export default function ValueSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className='flex flex-col items-center justify-center bg-[url(/img/mediocrity_image.jpg)] bg-cover bg-center'>
        <div className='bg-primary dark:bg-black dark:bg-opacity-75 bg-opacity-75 text-white py-40 px-5 w-full h-full flex gap-4 flex-col justify-center items-center'>
            <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl text-center'>Why settle for mediocrity?</h2>
            <p className='text-center'>The only way to become a great developer is to write a lot of code</p>
            <div className='flex flex-wrap gap-4 justify-center items-center sm:w-3/4 mt-8'>
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <FireIcon />
                    <h3 className='mt-2 font-bold text-md'>Avoid tutorial hell</h3>
                    <p className='text-gray-200'>by writing a ton of code</p>
                </div>
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <LightiningIcon />
                    <h3 className='mt-2 font-bold text-xl'>Stay motivated with</h3>
                    <p className='text-gray-200'>dopamine-driven development</p>
                </div> 
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <SpannerIcon />
                    <h3 className='mt-2 font-bold text-md'>Build portfolio projects</h3>
                    <p className='text-gray-200'>to prove your skills</p>
                </div> 
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <GraduateIcon />
                    <h3 className='mt-2 font-bold text-md'>Delve deeper</h3>
                    <p className='text-gray-200'>into foundational concepts</p>
                </div>
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <CloudIcon />
                    <h3 className='mt-2 font-bold text-md'>Learn flexibly online & Onsite</h3>
                    <p className='text-gray-200'>without interrupting your life</p>
                </div>
                <div className='w-72 rounded p-4 hover:ring-2 hover:ring-white'>
                    <MoneyIcon />
                    <h3 className='mt-2 font-bold text-md'>For 50% the price of college</h3>
                    <p className='text-gray-200'>to minimize your financial risk</p>
                </div>    
            </div>
        </div>
    </div>
  )
}
