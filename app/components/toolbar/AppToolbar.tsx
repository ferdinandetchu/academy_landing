'use client'
import Link from 'next/link'

const navigation = [
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Value', href: '/#value' },
  { name: 'Path', href: '/#path' },
  { name: 'Job', href: '/#job' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'FAQ', href: '/#faq' },
]

export default function AppToolbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-8">
        <Link href='/#home'>
          <img className='w-20 rounded-sm mr-2' src="/img/academy_vertical_logo_white.png" alt="" />
        </Link>
        
        <div className="hidden text-white lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm/6 font-semibold">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link href="/enrolment" className="text-sm/6 font-semibold bg-secondary text-black px-4 py-2 rounded-full hover:bg-white hover:ring-secondary hover:ring-2">
            Enrol Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
