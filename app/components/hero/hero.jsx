'use client'
import Link from 'next/link'

const imageUrl = [
    '/img/google.png',
    '/img/comptia.png',
]

export default function Herosection() {

  return (
    <div id='home' className='h-screen bg-[url(/img/hero_image.jpg)] bg-cover bg-center'>
        <div className='bg-primary dark:bg-black dark:bg-opacity-75 bg-opacity-75 w-full h-full flex gap-4 flex-col justify-center items-center text-white'>
            <h1 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl text-center'>Complete Website <br /> Development Course</h1>
            <p className='text-center'>Welcome to the most captivating, finger-flying, addictive way to learn to code</p>
            <Link href='https://forms.gle/oJganWKpg5yp3JCc8' className='font-bold m-2 px-4 py-2 bg-secondary text-black rounded-full hover:bg-white hover:ring-secondary hover:ring-2'>Get Started <span aria-hidden="true">&rarr;</span></Link>
            <p>Beginner to Pro Course</p>
            <div className='absolute px-4 bottom-0 flex flex-col gap-4 items-center'>
                <div className='flex flex-wrap gap-2 items-center px-4'>
                    {/* <div className='flex'>
                        <img src="/img/ferdinand.jpg" alt="student image" className='h-8 w-8 rounded-full border-2 border-gray-300' />
                        <img src="/img/carine.jpg" alt="student image" className='-ml-4 h-8 w-8 rounded-full border-2 border-gray-300' />
                        <img src="/img/ferdinand.jpg" alt="student image" className='-ml-4 h-8 w-8 rounded-full border-2 border-gray-300' />
                    </div> */}
                    <p className='text-center'>Sponsored By</p>
                </div>
                <div className='flex flex-wrap gap-4 justify-center mb-4'>
                  {imageUrl.map((url) => (
                      <img key={url} src={url} alt="google logo" className='w-32 animate-bounce' />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}
