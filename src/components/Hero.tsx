import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-36 pb-0 overflow-hidden">
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

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative">
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
          style={{ fontSize: 'clamp(48px, 7vw, 84px)', maxWidth: 720 }}
        >
          Scaffolding ops,{' '}
          <br />
          <span className="text-orange italic">simplified.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg text-brand-gray leading-relaxed mb-10 font-light animate-fade-up-2"
          style={{ maxWidth: 480 }}
        >
          The all-in-one platform for scaffolding businesses to schedule jobs,
          manage crews, and stay on top of every site — without the spreadsheet chaos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 items-center mb-20 animate-fade-up-3">
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

      {/* Screenshot container */}
      <div className="relative animate-fade-up-4">
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
