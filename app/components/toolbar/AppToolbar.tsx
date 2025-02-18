'use client'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Value', href: '#' },
  { name: 'Path', href: '#' },
  { name: 'Job', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'FAQ', href: '#' },
]

export default function AppToolbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm">
      <nav aria-label="Global" className="flex items-center justify-between p-2 lg:px-8">
        <div className="hidden text-white lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold">
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold bg-secondary text-black px-4 py-2 rounded-full hover:bg-white hover:ring-secondary hover:ring-2">
            Enrol Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
