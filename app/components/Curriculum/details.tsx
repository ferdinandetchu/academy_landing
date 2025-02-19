'use client'

import { useState } from 'react'
type Content = {
    title: string
    description: string
    isAI: boolean
}
type Details = {
    title: string
    description: string
    isAI: boolean
    content: Content[]
}
type CardProps = {
  details: Details
}

export default function DetailsCard(props: CardProps) {
    const [isShowmore, setIsShowmore] = useState(false)
    const handleToggleShow = () => {
        setIsShowmore(!isShowmore)
    }
    return (
        <div className='dark:bg-gray-800 bg-primary bg-opacity-75 text-white w-full rounded-xl p-4'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold mb-3'>{props.details.title}
                        {(props.details.isAI && 
                            <span className='ml-4 px-4 py-1 ring-1 text-nowrap ring-gray-500 text-xs rounded-full'>Learn to apply AI</span>
                        )}
                    </h3>
                    <p>{ props.details.description }</p>
                </div>
                <div className='ml-2'>
                    {(isShowmore) ?
                        <button onClick={handleToggleShow} className='text-xl dark:text-white'>x</button> :
                        <button onClick={handleToggleShow} className='text-2xl dark:text-white'>+</button>
                    }
                </div>
            </div>
            {(isShowmore) && 
                <div className='border-t-gray-300 border-t-2 mt-4'>
                    <ol className='mt-4 mx-4'>
                        {props.details.content.map((item) => (
                            <li key={item.title} className='my-3'>
                                <h4 className='font-bold mb-2'>{item.title} 
                                    {(item.isAI) &&
                                        <span className='font-normal text-nowrap ml-4 px-4 py-1 ring-1 ring-gray-500 text-xs rounded-full'>Learn to apply AI</span>
                                    }
                                </h4>
                                <p className='ml-4'>{ item.description }</p>
                            </li>
                        ))}
                        
                    </ol>
                </div>
            }
        </div>
    )
}
