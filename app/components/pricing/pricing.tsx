import TickedIcon from "./ticke"

const tiers = [
  {
    name: 'Global (USD)',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '$2,000',
    description: "The perfect plan if you're not registering from Cameroon.",
    features: ['Online Classes Only', 'Flexible Scheduling', 'Perosnal Coach', '3 Real world projects', 'Job preparation'],
    featured: false,
  },
  {
    name: 'Cameroon (XAF)',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '150,000 XAF',
    description: "The perfect plan if you're registering from Cameroon.",
    features: [
        'Online Classes',
        'Onsite Classes',
        'Flexible Scheduling',
        'Perosnal Coach',
        '3 Real world projects',
        'Job preparation'
    ],
    featured: true,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingSection() {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-secondary">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balanc sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose an affordable plan that best works for your location.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-gray-800 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-secondary' : 'text-secondary', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-primary',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-400', 'text-base')}>/6Months</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-100', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-100',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <TickedIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'shadow-xs focus-visible:outline-secondary bg-secondary text-black px-4 py-2 rounded-full hover:bg-white hover:ring-secondary hover:ring-2'
                  : 'text-secondary ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-secondary',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Enrol Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}