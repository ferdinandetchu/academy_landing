'use client'

import { Certificate } from "crypto"
import { title } from "process"

const engineers = [
    {
        url: '/img/Ferdinand.jpg',
        name: 'Etchu Ferdinand',
    },
    {
        url: '/img/alain.jpg',
        name: 'Alain Mbeng',
    },
    {
        url: '/img/penn.jpg',
        name: 'Nyah Penn',
    },
    {
        url: '/img/Carine.jpg',
        name: 'Desmond Oben',
    },
    {
        url: '/img/Dv 6.jpg',
        name: 'John Doe',
    },
]

const certifications = [
    {
        title: 'Google Cloud Professional Developer',
        description: '',
        href: '/#'
    },
    {
        title: 'MongoDB Certification',
        description: '',
        href: '/#'
    },
    {
        title: 'Associate Developer Exam',
        description: '',
        href: '/#'
    },
    {
        title: 'Associate Data Modeler Exam',
        description: '',
        href: '/#'
    },
    {
        title: 'Associate Atlas Administrator Exam',
        description: '',
        href: '/#'
    },
    {
        title: 'Associate Database Administrator Exam',
        description: '',
        href: '/#'
    },
    {
        title: 'AWS Certified Solutions Architect - Professional',
        description: '',
        href: '/#'
    },
    {
        title: 'Microsoft Certified: Azure Developer Associate',
        description: '',
        href: '/#'
    },
    {
        title: 'CompTIA ITF+',
        description: '',
        href: '/#'
    }
]

export default function TeamSection() {

  return (
      <div id='team' className='flex flex-col items-center justify-center text-white bg-[url(/img/faqs_image.png)] bg-cover bg-center'>
        <div className='dark:bg-black dark:bg-opacity-75 bg-primary bg-opacity-75 py-40 px-5 w-full h-full flex gap-4 flex-col justify-center items-center'>
            <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl text-center'>Taught by the best</h2>
            <p className='text-center'>Modern courses taught by engineers with over 7+ years of experince</p>
            <ul className='flex flex-wrap p-8 gap-4 justify-center items-center sm:w-1/2 mt-8'>
                {engineers.map((engineer) => (
                    <li key={engineer.name} className='relative flex flex-col gap-2 justify-center items-center p-4 bg-gray-700 rounded-md bg-opacity-45 hover:bg-opacity-35'>
                        <img className="rounded-full w-32 h-32" src={engineer.url} alt={engineer.name} />
                        <div className="flex gap-2 items-center justify-center">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
                            </span>
                            <p className='text-center'> {engineer.name} </p>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className='text-2xl font-semibold tracking-tight text-balanc sm:text-3xl text-center mt-8'>Other Fullstack Developer Certification</h3>
              <p className='text-center'>Enroll into specific course to get particular certifications.</p>
              <ul className="flex flex-wrap p-8 gap-4 justify-center items-center sm:w-1/2 mt-2">
                  {certifications.map((Certificate) => (
                      <li key={Certificate.title} className="">
                          <a href="/#" className="flex gap-2 items-center justify-center p-4 bg-gray-700 rounded-md bg-opacity-45 hover:bg-opacity-35">
                              <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <h4 className='text-center'> {Certificate.title} </h4>
                          </a>
                      </li>
                  ))}
              </ul>
        </div>
    </div>
  )
}
