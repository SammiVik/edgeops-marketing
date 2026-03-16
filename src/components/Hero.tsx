import { ArrowRight, Play } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { FlickeringGrid } from './flickering-grid'

const phrases = [
  'wasting hours chasing builders.',
  'losing time on admin and calls.',
  'juggling crew across spreadsheets.',
  'burning money on disorganisation.',
]

type Phase = 'entering' | 'visible' | 'exiting'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('visible')
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion.current) return

    let cancelled = false

    function cycle() {
      // Hold visible for 2500ms
      const t1 = setTimeout(() => {
        if (cancelled) return
        setPhase('exiting')

        // Wait for exit transition (300ms)
        const t2 = setTimeout(() => {
          if (cancelled) return
          setIndex(i => (i + 1) % phrases.length)
          setPhase('entering')

          // One frame, then switch to visible
          const t3 = setTimeout(() => {
            if (cancelled) return
            setPhase('visible')
            cycle()
          }, 16)

          return () => clearTimeout(t3)
        }, 300)

        return () => clearTimeout(t2)
      }, 2500)

      return () => clearTimeout(t1)
    }

    const cleanup = cycle()
    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  const phraseStyle: React.CSSProperties =
    reducedMotion.current
      ? {}
      : {
          display: 'block',
          transition:
            phase === 'visible'
              ? 'transform 400ms ease-out, opacity 400ms ease-out'
              : phase === 'exiting'
              ? 'transform 300ms ease-in, opacity 300ms ease-in'
              : 'none',
          transform:
            phase === 'entering'
              ? 'translateY(40px)'
              : phase === 'exiting'
              ? 'translateY(-40px)'
              : 'translateY(0)',
          opacity: phase === 'visible' ? 1 : 0,
        }

  return (
    <section className="relative pt-36 pb-0 overflow-hidden">
      {/* Flickering grid — covers headline/subtext/CTA area and bleeds slightly into pain points */}
      <div className="absolute top-0 left-0 right-0 h-[710px] overflow-hidden pointer-events-none z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#F04E23"
          maxOpacity={0.07}
          flickerChance={0.05}
        />
      </div>

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #E8E6E0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
          top: 0,
          height: '640px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-brand-border bg-white text-brand-black text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-8 shadow-sm animate-fade-up">
          <span
            className="w-1.5 h-1.5 rounded-full bg-orange"
            style={{ boxShadow: '0 0 6px rgba(240,78,35,0.6)' }}
          />
          Now in early access
        </div>

        {/* Headline */}
        <h1
          className="font-sans font-extrabold leading-[1.0] tracking-[-0.03em] mb-6 animate-fade-up-1"
          style={{ fontSize: 'clamp(48px, 7vw, 84px)', maxWidth: 960 }}
        >
          Stop{' '}
          <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
            <span className="text-orange italic" style={phraseStyle}>
              {phrases[index]}
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg text-brand-gray leading-relaxed mb-10 font-light animate-fade-up-2"
          style={{ maxWidth: 480 }}
        >
          The all-in-one platform for scaffolding businesses to schedule jobs,
          manage crews, and stay on top of every site. No spreadsheet chaos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 items-center mb-16 animate-fade-up-3">
          <a
            href="https://app.edgeops.com.au/signup"
            className="inline-flex items-center gap-2 bg-brand-black text-white text-[15px] font-medium px-6 py-3 rounded-xl hover:bg-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-150 cursor-pointer shadow-[0_2px_12px_rgba(17,16,16,0.2)]"
          >
            Start free trial
            <ArrowRight size={15} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-brand-black px-6 py-3 rounded-xl border border-brand-border hover:border-[#aaa] hover:bg-brand-light hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
          >
            <Play size={13} className="text-brand-gray" />
            Watch demo
          </a>
        </div>

      </div>

      {/* Pain points */}
      <div style={{ background: '#F5F4F0', borderTop: '1px solid #E8E5E0', borderBottom: '1px solid #E8E5E0' }}>
        <div className="max-w-[960px] mx-auto px-6 md:px-12 py-16">
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold mb-10"
            style={{ color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Sound familiar?
          </p>

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: 80 }}>
            {/* Item 1 */}
            <div className="pb-10">
              <p className="font-bold text-brand-black text-[22px] leading-snug mb-3">
                Wasting <span className="text-orange not-italic">hours</span> chasing builders every week?
              </p>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                The average scaffolding business burns 6+ hours on admin, calls, and paperwork. That's time you're not getting back.
              </p>
              <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,78,35,0.08)', color: '#F04E23', borderRadius: 20 }}>
                6+ hrs lost every week
              </span>
            </div>

            {/* Item 2 */}
            <div className="pb-10">
              <p className="font-bold text-brand-black text-[22px] leading-snug mb-3">
                Still <span className="text-orange not-italic">on the phone</span> every time a job changes?
              </p>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                Schedule changes shouldn't mean 20 minutes of calls. EdgeOps notifies your whole crew instantly via SMS — with a 98% open rate, they actually see it.
              </p>
              <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,78,35,0.08)', color: '#F04E23', borderRadius: 20 }}>
                98% SMS open rate
              </span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #E8E5E0' }} />

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ columnGap: 80 }}>
            {/* Item 3 */}
            <div className="pt-10">
              <p className="font-bold text-brand-black text-[22px] leading-snug mb-3">
                How much are last-minute changes <span className="text-orange not-italic">costing you?</span>
              </p>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                Wasted mobilisation, idle crew, missed jobs. Real-time scheduling means you react before it hits your margin.
              </p>
              <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,78,35,0.08)', color: '#F04E23', borderRadius: 20 }}>
                ~$300–$600/hr in idle crew costs
              </span>
            </div>

            {/* Item 4 */}
            <div className="pt-10">
              <p className="font-bold text-brand-black text-[22px] leading-snug mb-3">
                Still running your whole operation on a <span className="text-orange not-italic">spreadsheet?</span>
              </p>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                70% of construction delays come down to poor coordination. Built specifically for scaffolding — not generic software you've had to bend into shape.
              </p>
              <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(240,78,35,0.08)', color: '#F04E23', borderRadius: 20 }}>
                70% of delays are avoidable
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot container */}
      <div className="relative animate-fade-up-4 pt-20">
        {/* Gradient that fades screenshot into background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #FFFFFF)' }}
        />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div
            className="rounded-t-2xl overflow-hidden pt-8 px-8"
            style={{
              background: '#F5F4F0',
              border: '1px solid #E8E6E0',
              borderBottom: 'none',
            }}
          >
            {/* Radial glow */}
            <div
              className="pointer-events-none absolute -top-32 -right-20 w-[500px] h-[500px]"
              style={{
                background: 'radial-gradient(circle, rgba(240,78,35,0.10) 0%, transparent 65%)',
              }}
            />

            {/* Browser chrome */}
            <div
              className="rounded-t-xl border border-b-0 overflow-hidden max-w-[960px] mx-auto relative"
              style={{
                background: 'white',
                borderColor: '#E8E6E0',
                boxShadow: '0 -8px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)',
              }}
            >
              {/* Browser toolbar */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b"
                style={{ background: '#F9F8F6', borderColor: '#E8E6E0' }}
              >
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div
                  className="flex-1 max-w-[260px] bg-white border rounded-md px-3 py-1 text-xs text-brand-gray font-sans"
                  style={{ borderColor: '#E8E6E0' }}
                >
                  app.edgeops.com.au/dashboard
                </div>
              </div>
              <img
                src="https://ohmbdawxholfwmgmyfil.supabase.co/storage/v1/object/public/branding/Dashboard-screenshot.png?v=2"
                alt="EdgeOps Dashboard"
                className="w-full block"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
