const plans = [
  {
    name: 'Starter',
    price: '139',
    features: [
      'Up to 30 active jobs',
      '1 admin + 10 crew logins',
      'Drag-and-drop scheduling',
      'Builder SMS follow-ups (100/month)',
      'Dismantle dashboard',
      'Scaffold inventory tracking',
    ],
    cta: 'Start free trial',
    ctaStyle: 'outline' as const,
    featured: false,
  },
  {
    name: 'Professional',
    price: '179',
    features: [
      'Up to 80 active jobs',
      '3 admin + 20 crew logins',
      'Everything in Starter, plus:',
      'Unlimited SMS follow-ups',
      'Job move reason tracking & reports',
      'Builder reliability reporting',
      'Crew assignment management',
    ],
    cta: 'Start free trial',
    ctaStyle: 'orange' as const,
    featured: true,
  },
  {
    name: 'Business',
    price: '249',
    features: [
      'Unlimited active jobs',
      'Unlimited admin + crew logins',
      'Everything in Professional, plus:',
      'Monthly performance reports',
      'Geographic area balancing',
      'Priority support',
    ],
    cta: 'Start free trial',
    ctaStyle: 'dark' as const,
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="text-center mb-14">
        <div className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
          Pricing
        </div>
        <h2
          className="font-sans font-extrabold leading-[1.1] tracking-tight mx-auto mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Simple pricing for every size operation
        </h2>
        <p className="text-[17px] text-brand-gray leading-relaxed font-light mx-auto" style={{ maxWidth: 480 }}>
          30-day free trial. No setup fees. No lock-in contracts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border-[1.5px] p-9 transition-all duration-200 hover:-translate-y-1 ${
              plan.featured
                ? 'border-brand-black bg-brand-black text-white'
                : 'border-brand-border hover:border-[#aaa]'
            }`}
          >
            <div
              className={`text-xs font-semibold tracking-widest uppercase mb-3 ${
                plan.featured ? 'text-orange-light' : 'text-orange'
              }`}
            >
              {plan.name}
            </div>

            <div
              className={`font-sans font-extrabold tracking-tight flex items-start gap-1 mb-1 ${
                plan.featured ? 'text-white' : 'text-brand-black'
              }`}
              style={{ fontSize: 48, lineHeight: 1 }}
            >
              <sup className="text-xl font-bold mt-2.5">$</sup>
              {plan.price}
            </div>

            <p className={`text-sm font-light mb-7 ${plan.featured ? 'text-[#999]' : 'text-brand-gray'}`}>
              per month · AUD
            </p>

            <hr className={`mb-6 ${plan.featured ? 'border-[#333]' : 'border-brand-border'}`} />

            <ul className="list-none mb-8 space-y-0">
              {plan.features.map((feat) => (
                <li
                  key={feat}
                  className={`text-sm py-1.5 flex items-center gap-2.5 font-light ${
                    plan.featured ? 'text-[#ccc]' : ''
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                      plan.featured ? 'bg-[#333]' : 'bg-brand-light'
                    }`}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke={plan.featured ? 'white' : '#111010'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <a
              href="https://app.edgeops.com.au/signup"
              className={`block text-center font-sans text-[15px] font-medium px-6 py-3.5 rounded-[10px] transition-all duration-150 hover:-translate-y-0.5 ${
                plan.ctaStyle === 'orange'
                  ? 'bg-orange text-white hover:bg-orange-light'
                  : plan.ctaStyle === 'dark'
                  ? 'bg-brand-black text-white hover:bg-[#2a2a2a]'
                  : 'border-[1.5px] border-brand-border text-brand-black hover:border-brand-black'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
