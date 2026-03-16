import { useInView } from '../hooks/useInView'
import { HoverBorderGradient } from './hover-border-gradient'

export default function CTA() {
  const { ref, inView } = useInView()

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative overflow-hidden rounded-3xl px-8 md:px-16 py-20 text-center transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ background: '#111010' }}
      >
        {/* Radial glows */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px]"
          style={{ background: 'radial-gradient(circle, rgba(240,78,35,0.22) 0%, transparent 65%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 w-[360px] h-[360px]"
          style={{ background: 'radial-gradient(circle, rgba(240,78,35,0.14) 0%, transparent 65%)' }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-orange-light mb-5">
            Get started
          </div>

          <h2
            className="font-sans font-extrabold leading-[1.1] tracking-tight text-white mx-auto mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 560 }}
          >
            Run a tighter operation,{' '}
            <br className="hidden md:block" />
            starting today
          </h2>

          <p
            className="text-[17px] font-light leading-relaxed mx-auto mb-10"
            style={{ color: '#777', maxWidth: 420 }}
          >
            30-day free trial. No credit card required. Set up in under 10 minutes.
          </p>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            <HoverBorderGradient
              as="a"
              href="https://app.edgeops.com.au/signup"
              containerClassName="rounded-full"
              className="bg-black text-white flex items-center space-x-2 px-6 py-2 text-sm font-medium"
              duration={1.5}
            >
              <span>Start free trial →</span>
            </HoverBorderGradient>
            <a
              href="#demo"
              className="text-[15px] font-medium text-white px-7 py-3.5 rounded-xl border border-[#333] hover:border-[#555] hover:bg-[#1a1a1a] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
            >
              Watch demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
