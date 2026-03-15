import { Check } from 'lucide-react'
import { useInView } from '../hooks/useInView'

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
    badge: null,
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
    badge: 'Most Popular',
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
    badge: null,
  },
]

export default function Pricing() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="pricing" className="py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
          Pricing
        </div>
        <h2
          className="font-sans font-extrabold leading-[1.1] tracking-tight mx-auto mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          Simple pricing for every size operation
        </h2>
        <p
          className="text-[17px] text-brand-gray leading-relaxed font-light mx-auto"
          style={{ maxWidth: 440 }}
        >
          30-day free trial. No setup fees. No lock-in contracts.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {plans.map((plan, i) => {
          const { ref, inView } = useInView()
          return (
            <div
              key={plan.name}
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`relative rounded-2xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${
                plan.featured
                  ? 'bg-brand-black text-white border-2 border-brand-black shadow-[0_8px_48px_rgba(17,16,16,0.18)]'
                  : 'bg-white border border-brand-border hover:border-[#aaa] hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-orange text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.badge ? 'pt-9' : ''}`}>
                {/* Plan name */}
                <div
                  className={`text-xs font-semibold tracking-widest uppercase mb-3 ${
                    plan.featured ? 'text-orange-light' : 'text-orange'
                  }`}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div
                  className={`font-sans font-extrabold tracking-tight flex items-start gap-0.5 leading-none mb-1 ${
                    plan.featured ? 'text-white' : 'text-brand-black'
                  }`}
                >
                  <span className="text-xl font-bold mt-2">$</span>
                  <span style={{ fontSize: 52 }}>{plan.price}</span>
                </div>
                <p
                  className={`text-sm font-light mb-7 ${
                    plan.featured ? 'text-[#888]' : 'text-brand-gray'
                  }`}
                >
                  per month · AUD
                </p>

                <hr className={`mb-6 ${plan.featured ? 'border-[#222]' : 'border-brand-border'}`} />

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                          plan.featured ? 'bg-[#222]' : 'bg-brand-light'
                        }`}
                      >
                        <Check
                          size={10}
                          strokeWidth={2.5}
                          className={plan.featured ? 'text-white' : 'text-brand-black'}
                        />
                      </span>
                      <span
                        className={`text-sm font-light leading-snug ${
                          plan.featured ? 'text-[#ccc]' : 'text-brand-gray'
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://app.edgeops.com.au/signup"
                  className={`block text-center text-[15px] font-medium px-6 py-3.5 rounded-xl transition-all duration-150 hover:-translate-y-0.5 cursor-pointer ${
                    plan.ctaStyle === 'orange'
                      ? 'bg-orange text-white hover:bg-orange-light shadow-[0_2px_12px_rgba(240,78,35,0.3)]'
                      : plan.ctaStyle === 'dark'
                      ? 'bg-brand-black text-white hover:bg-[#2a2a2a]'
                      : 'border border-brand-border text-brand-black hover:border-[#aaa] hover:bg-brand-light'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
