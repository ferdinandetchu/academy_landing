'use client'
import Link from 'next/link'

const navigation = [
  { name: 'Facebook', href: 'https://web.facebook.com/pavewaygroup' },
  { name: 'Instagram', href: 'https://www.instagram.com/pavewaygroupinc' },
  { name: 'WhatsApp Community', href: '#' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pavewaygroup' }
];

const bottomNavigation = [
  { name: 'Affiliates', href: 'https://web.facebook.com/pavewaygroup' },
  { name: 'Privacy Policy', href: 'https://www.instagram.com/pavewaygroupinc' },
  { name: 'Terms & Conditions', href: '#' },
];

const imageUrl = [
    '/img/google.png',
  '/img/comptia.png',
]

export default function AppFooter() {

  return (
    <footer className="bg-gradient-to-t from-primary bg-opacity-50 text-black dark:text-white py-20 w-full  flex items-center justify-center">
      <nav aria-label="Global" className="h-full w-full flex flex-col items-center justify-center p-2 lg:px-8">
         <div className="text-black dark:text-white flex-wrap flex gap-4 lg:flex lg:gap-x-12 justify-center items-center">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold underline">
                {item.name}
                </a>
            ))}
        </div>
        <div className="flex flex-col">
          <h3 className="text-center font-semibold text-3xl my-5">Partners</h3>
          <div className='flex flex-wrap justify-center mb-4 gap-3'>
            {imageUrl.map((url) => (
                <img key={url} src={url} alt="google logo" className='w-32 animate-bounce' />
            ))}
          </div>
        </div>
        <div className="text-black dark:text-white flex-wrap flex gap-4 lg:flex lg:gap-x-12 justify-center items-center">
            {bottomNavigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold underline">
                {item.name}
                </a>
            ))}
          <p className="w-full text-center dark:text-gray-400 text-white">&copy; PaveWay Academy {new Date().getFullYear()} All rights reserved.</p>
          <Link href='/#home'>
            <img className='w-32 rounded-sm mr-2' src="/img/academy_vertical_logo_white.png" alt="" />
          </Link>
        </div>
                
      </nav>
    </footer>
  )
}
