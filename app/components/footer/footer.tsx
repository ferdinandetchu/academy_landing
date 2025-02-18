'use client'

import heroImage from '@/public/img/hero_image.jpg'

const navigation = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'WhatsApp Community', href: '#' },
  { name: 'LinkedIn', href: '#' }
]

export default function AppFooter() {

  return (
    <footer className="inset-x-0  bg-[url(/img/faqs_image.png)] bg-cover bg-center">
        <div className='bg-primary bg-opacity-10 w-full h-full'>
            <nav aria-label="Global" className="flex items-center justify-center p-2 lg:px-8">
                <div className="text-white flex-wrap flex gap-4 lg:flex lg:gap-x-12 justify-center">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold underline">
                        {item.name}
                        </a>
                    ))}
                      <em>&copy; PaveWay Academy { new Date().getFullYear() } All rights reserved.</em>
                </div>
                
            </nav>   
        </div>
    </footer>
  )
}
