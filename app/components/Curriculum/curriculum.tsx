'use client'

import { useState } from 'react'
import DetailsCard from './details'
import AiImg from './ai'

const curriculum = [
    {
        title: 'Intro to Frontend Development',
        description: 'This course will take you through ten tasks leading up to one main project: creating your own responsive portfolio website.',
        isAI: true,
        content: [
            {
                title: '1.1 Getting Started with Web Development',
                description: 'Understand the role of the web developer and practice Agile project planning.',
                isAI: true
            },
            {
                title: '1.2 HTML and the Web',
                description: 'Learn the basic building blocks of the web and create an HTML document.',
                isAI: true
            },
            {
                title: '1.3 HTML Semantics',
                description: 'Explore and apply HTML semantics as well as form and graphic elements.',
                isAI: true
            },
            {
                title: '1.4 Advanced HTML & Web Accessibility',
                description: 'Apply advanced HTML attributes and use AIRA to create dynamic content.',
                isAI: true
            },
            {
                title: '1.5 CSS & the Look of Your Website',
                description: 'Learn basic CSS styling and apply it to a web page.',
                isAI: true
            },
            {
                title: '1.6 Advanced CSS Layout',
                description: 'Learn basic CSS styling and apply it to a web page.',
                isAI: true
            },
            {
                title: '1.7 Advanced Topics in CSS',
                description: 'Learn and apply advanced CSS styling such as transitions and animations.',
                isAI: true
            },
            {
                title: '1.8 CSS Preprocessors & CSS Variables',
                description: 'Integrate CSS variables and understand how pre- and post-processors work.',
                isAI: true
            },
            {
                title: '1.9 Git & Version Control',
                description: 'Practice version control with Git.',
                isAI: true
            },
            {
                title: '1.10 Code Quality, Testing, and Web Hosting',
                description: 'Utilize code linting to prevent errors and conduct cross-browser testing.',
                isAI: true
            }
        ]
    },
    {
        title: 'Full-Stack Immersion',
        description: 'Dive into the world of functional programming as you learn your first programming language. You’ll complete a total of six Achievements, consisting of several tasks each.',
        isAI: true,
        content: [
            {
                title: '1. Introduction to JavaScript',
                description: 'Use JavaScript to build a simple client-side JavaScript application that can communicate with an external API.',
                isAI: true
            },
             {
                title: '2. Server-Side Programming and Node.js',
                description: 'Use JavaScript on the server-side using Node.js and work with web server frameworks, REST architecture, and databases as you build an API from scratch.',
                isAI: true
            },
              {
                title: '3. Client-Side Programming & React',
                description: 'Learn how to use JavaScript to build powerful interfaces for server-side systems. Build the frontend for your very own API using React.',
                isAI: true
            },
               {
                title: '4. Testing in the Development Process',
                description: 'Explore test-driven development as you learn some complex JavaScript and build a progressive web app with native-like functionality for your portfolio.',
                isAI: true
            },
                {
                title: '5. Native App Development & React Native',
                description: 'Learn about native JavaScript applications and build an additional project for your portfolio: a native mobile app.',
                isAI: true
            },
                 {
                title: '6. Collaboration & Documentation',
                description: 'Master the key skills required to effectively collaborate with a wider product team as you complete a project in Vue, a popular JavaScript framework.',
                isAI: true
            }
        ]
    },
    {
        title: 'Job Preparation Course',
        description: 'Create a career plan with your personal career specialist. From CV creation through to job preparation, you will learn the skills to launch a career that lasts.',
        isAI: true,
        content: [
            {
                title: '1. Pair up with a Career Specialist in your area',
                description: '',
                isAI: false
            },
            {
                title: '2. Design your online presence',
                description: '',
                isAI: false
            },
            {
                title: '3. Create a winning resume (CV) showcasing your new skills and marketing your transferable ones',
                description: '',
                isAI: false
            },
            {
                title: '4. Showcase your work in a winning portfolio',
                description: '',
                isAI: false
            },
            {
                title: '5. Discover new corridors for finding job opportunities',
                description: '',
                isAI: false
            },
            {
                title: '6. Find perfect-fit positions',
                description: '',
                isAI: false
            },
            {
                title: '7. Create a cover letter that will get you noticed',
                description: '',
                isAI: false
            },
            {
                title: '8. Prepare for job interviews with expert support',
                description: '',
                isAI: false
            }
        ]
    }
]

export default function CurriculumSection() {
  return (
    <div className='flex flex-wrap gap-4 justify-center py-40 px-5'>
        <div className='sm:w-1/3'>
            <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl mb-4'>Hands-on education in the <span className="text-primary">skills of the future</span></h2>
            <p className='my-4'>We work together with skilled industry experts to create learning materials to get you job-ready. Manage your schedule however you like and dedicate anything from 15 to 40 hours per week to your studies.</p>
            <a href="#" className="text-sm/6 font-semibold bg-secondary text-black px-4 py-2 rounded-full hover:bg-white hover:ring-secondary hover:ring-2">
                Enrol Now <span aria-hidden="true">&rarr;</span>
            </a>
        </div>
        <div className='sm:w-1/3 flex flex-col gap-4 pt-12 sm:p-0'>
            {curriculum.map((item) => (
                <DetailsCard key={item.title} details={item} />  
            ))}
        </div>
          <div className='sm:w-2/3 rounded-xl bg-gray-300 dark:bg-gray-900 p-8 flex flex-wrap justify-between items-center'>
              <div className='sm:w-2/3'>
                  <h2 className='font-bold text-xl sm:text-2xl mb-4'>Will the Full-Stack Web Development Program teach me how to use AI tools and techniques?</h2>
                  <p>You will learn to use AI in a way that is reflective of how real-world tasks are approached in the industry, while still building the core skills of your new profession. In doing so, you will learn to use AI to aid your learning, rather than bypass the learning process, and to support you professionally—rather than replace you.</p>
              </div>
              <AiImg />
        </div>
    </div>
  )
}
