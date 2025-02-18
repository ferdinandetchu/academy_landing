'use client'

import FaqsCard from './details'

const faqs = [
    {
        title: 'How long will it take to learn enough to be hired?',
        description: "It's completely up to you. The time it will take you to be 'job ready' will depend on how much you already know, how often you study, and how long you study for. That said, the backend career path takes many people about 12 months.",
    },
    {
        title: 'Should I include PaveWay Academy projects in my resume and portfolio?',
        description: "Absolutely! If you built it, use it. You'll build several personal projects while completing our curriculum, and our final course about finding jobs will show you how to construct a job-ready portfolio.",
    },
    {
        title: 'What is PaveWay Academy? A bootcamp? An online school?',
        description: "We're not a $10,000 bootcamp. We're not a $50,000 university degree. We are a self-paced, gamified online learning platform for back-end web development. You can learn with us for the price of a gym membership.",
    },
    {
        title: 'What will I get as a member?',
        description: "You can demo the first few chapters of each course with full interactivity, but after that you'll be in 'guest mode' or 'read only' mode. In guest mode you won't be able to complete lessons, take quizzes, or do the interactive parts of the courses. As a paid member you get access to everything.",
    },
    {
        title: 'Can I cancel my membership?',
        description: "We absolutely hate dark patterns, so we've made it easy to cancel your subscription any time. You can cancel your membership any time from your settings and you won't be billed again.",
    },
    {
        title: 'Do you offer refunds?',
        description: "If for any reason you feel you aren't getting enough value out of the platform, we don't want your money. We have a simple return policy. Just contact us within 30 days of your purchase you're entitled to a full refund.",
    },
    {
        title: 'Do you offer discounts for purchasing power parity?',
        description: "Yes! We believe in being as fair as possible to learners around the world, and that means pricing that reflects respective earning power. If you're seeing pricing in anything other than USD, then you're already seeing discounted pricing for your country. If you're not seeing discounted pricing, but you are from a country with lower purchasing power, please let us know and we'll get you a discount.",
    },
    {
        title: 'Can my employer pay for my membership?',
        description: "Absolutely! We have team plans that let your manager pay for your membership and those of your team, while managing billing all in one place. To get started just check out the teams page. You'll need to be logged in.",
    },
    {
        title: 'Can I buy a PaveWay Academy membership for someone else?',
        description: "For sure, just check out the gifts page. You'll be able to purchase a redeemable code that you can give to a friend.",
    },
    {
        title: 'How do I redeem my gifted membership code?',
        description: "Enter your code on the redemption page to activate your membership.",
    },
    {
        title: 'My card is getting declined, what can I do?',
        description: "This is almost always because your bank is rejecting international transactions (we are based in the United States and use Stripe for payments). You should be able to contact the customer service department of your credit card company or your Bank and get the transactions approved or your card unlocked.",
    }
]

export default function FaqsSection() {

  return (
      <div className='flex flex-col items-center justify-center text-white bg-[url(/img/faqs_image.png)] bg-cover bg-center'>
        <div className='dark:bg-black dark:bg-opacity-75 bg-primary bg-opacity-75 py-40 px-5 w-full h-full flex gap-4 flex-col justify-center items-center'>
            <h2 className='text-5xl font-semibold tracking-tight text-balanc sm:text-6xl text-center'>Frequently asked questions</h2>
            <p className='text-center'>Got questions? We've got answers</p>
              <div className='border-secondary border-2 rounded-xl flex flex-col p-8 gap-4 justify-center items-center sm:w-1/2 mt-8'>
                  {faqs.map((item) => (
                      <FaqsCard details={item} key={item.title} />
                  ))}
            </div>
        </div>
    </div>
  )
}
