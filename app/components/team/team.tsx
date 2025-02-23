'use client'

import Link from "next/link"
import InIcon from "./in"
import FacebookIcon from "./facebook"
import GithubIcon from "./github"
import InstagramIcon from "./instagram"

const engineers = [
    {
        url: '/img/Ferdinand.jpg',
        name: 'Etchu Ferdinand',
        describe: 'Sinior Front-End Devloper with 5+ years of experince',
        instagram: 'https://www.instagram.com/ferdinandetchu',
        facebook: 'https://m.facebook.com/mbiarrambang.etchu',
        github: 'https://github.com/ferdinandetchu',
        linkedin: 'https://cm.linkedin.com/in/ferdinandetchu'
    },
    {
        url: '/img/alain.jpg',
        name: 'Alain Mbeng',
        describe: 'Full-Stack Devloper & Cloud Engineer with 10+ years of experince',
        instagram: 'https://www.instagram.com/ferdinandetchu',
        facebook: 'https://m.facebook.com/mbiarrambang.etchu',
        github: 'https://github.com/ferdinandetchu',
        linkedin: 'https://cm.linkedin.com/in/ferdinandetchu'
    },
    {
        url: '/img/penn.jpg',
        name: 'Nyah Penn',
        describe: 'Sinior Front End Devloper with 5+ years of experince',
        instagram: 'https://www.instagram.com/ferdinandetchu',
        facebook: 'https://m.facebook.com/mbiarrambang.etchu',
        github: 'https://github.com/ferdinandetchu',
        linkedin: 'https://cm.linkedin.com/in/ferdinandetchu'
    }
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
            <p className='text-center'>Modern courses taught by engineers with over 27+ years of experince</p>
            <ul className='flex flex-wrap p-8 gap-4 justify-center sm:w-3/4 mt-8'>
                {engineers.map((engineer) => (
                    <li key={engineer.name} className='w-72 relative flex flex-col gap-2 justify-center items-center p-4 bg-gray-700 rounded-md bg-opacity-45 hover:bg-opacity-35'>
                        <img className="rounded-full w-32 h-32" src={engineer.url} alt={engineer.name} />
                        <div className="flex gap-2 items-center justify-center">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
                            </span>
                            <p className='text-center font-bold'> {engineer.name} </p>
                        </div>
                        <p className="text-center text-gray-400">{ engineer.describe}</p>
                        <div className="flex gap-2 items-center justify-center">
                            <a href={engineer.linkedin} target="_blank">
                                <InIcon />
                            </a>
                            <a href={engineer.facebook} target="_blank">
                                <FacebookIcon />
                            </a>
                            <a href={engineer.github} target="_blank">
                                <GithubIcon />
                            </a>
                            <a href={engineer.instagram} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className='text-2xl font-semibold tracking-tight text-balanc sm:text-3xl text-center mt-8'>Fullstack Developer Certifications</h3>
              <p className='text-center'>Enroll into specific course to get particular certifications.</p>
              <ul className="flex flex-wrap p-8 gap-4 justify-center items-center sm:w-3/4 mt-2">
                  {certifications.map((Certificate) => (
                      <li key={Certificate.title} className="">
                          <Link href="/#" className="flex gap-2 items-center justify-center p-4 bg-gray-700 rounded-md bg-opacity-45 hover:bg-opacity-35">
                              <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <h4 className='text-center'> {Certificate.title} </h4>
                          </Link>
                      </li>
                  ))}
              </ul>
        </div>
    </div>
  )
}
