'use client'

import { useState } from 'react'
import PlayIcon from './play'


export default function AdvertSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='flex flex-wrap my-10 p-6 gap-6 justify-center items-center sm:h-screen'>
        <div className='sm:w-1/3'>
            <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl'>Launch a career in tech that lasts</h2>
              <p className='mb-4'>Launch a new career as a web developer in as little as 12 months.</p>
              <a href='#' className='font-bold px-4 py-2 bg-secondary text-black rounded-full hover:bg-white hover:ring-secondary hover:ring-2'>Get Started <span aria-hidden="true">&rarr;</span></a>
      </div>
      {
        (isPlaying) ? (
          <iframe className='w-80 h-56 sm:w-1/3 sm:h-80 rounded-md' src="https://www.youtube.com/embed/WR1ydijTx5E?si=_vkdlLmICON0FieB" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        ) : (
          <div className='bg-[url(/img/hero_image.jpg)] bg-cover bg-center w-80 h-56 sm:w-1/3 sm:h-80 flex justify-center items-center rounded-md'>
              <button onClick={handleTogglePlay}><PlayIcon /></button>
          </div>  
        )
      }
    </div>
  )
}
