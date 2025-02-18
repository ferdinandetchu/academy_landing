'use client'

import { useState } from 'react'
import ArrowDown from './arrowdown'
import ArrowRight from './arrowright'
type Details = {
    title: string
    description: string
}
type CardProps = {
  details: Details
}

export default function FaqsCard(props: CardProps) {
    const [isShowmore, setIsShowmore] = useState(false)
    const handleToggleShow = () => {
        setIsShowmore(!isShowmore)
    }
    return (
        <div className='bg-gray-800 bg-opacity-50 hover:bg-opacity-80 w-full rounded-xl p-4'>
            <div className='flex justify-between'>
                <div onClick={handleToggleShow}>
                    <h3 className='text-xl font-bold mb-3'>{props.details.title}</h3>
                </div>
                <div>    
                    {(isShowmore) ?
                        <button onClick={handleToggleShow} className='text-xl text-white ml-2'><ArrowRight /></button> :
                        <button onClick={handleToggleShow} className='text-2xl text-white ml-2'><ArrowDown /></button>
                    }
                </div>
            </div>
            {(isShowmore) && 
                <div className='border-t-gray-300 border-t-2 mt-4'>
                    <p className='mt-4'>{ props.details.description }</p>
                </div>
            }
        </div>
    )
}
