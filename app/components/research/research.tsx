'use client'
import Link from 'next/link'
export default function ResearchSection() {

  return (
      <div id='job' className='flex flex-col items-center justify-center text-white bg-[url(/img/about_bg.jpg)] bg-cover bg-center'>
        <div className='bg-primary dark:bg-black dark:bg-opacity-50 bg-opacity-50 py-40 px-5 w-full h-full flex gap-4 flex-col justify-center items-center'>
            <div className='sm:w-1/2 flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl text-center'>Full-Stack developers in the World earn over $100,000</h2>
                <p className='text-center sm:p-16'>
                    Some folks might look at the <a href='https://survey.stackoverflow.co/2024/work#salary-united-states' target='_blank' className='underline'>job data</a> and assume that front-end positions are better for entry-level developers because salaries are lower. On the contrary! There is both higher demand and lower supply for backend positions.
                    If you like working with data, logic, and servers, you might just enjoy the back-end.
                  </p>
                  <Link href="https://forms.gle/oJganWKpg5yp3JCc8" className="text-sm/6 font-semibold bg-secondary text-black px-4 py-2 rounded-full hover:bg-white hover:ring-secondary hover:ring-2">
                Enrol Now <span aria-hidden="true">&rarr;</span>
            </Link>
            </div>
        </div>
    </div>
  )
}
