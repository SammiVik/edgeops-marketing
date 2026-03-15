export default function Hero() {
  return (
    <>
      <section className="pt-[140px] pb-0 px-6 md:px-12 max-w-[1200px] mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange text-white text-xs font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-8 animate-fade-up">
          <span className="text-base">🏗️</span>
          Now in early access
        </div>

        {/* Headline */}
        <h1
          className="font-sans font-extrabold leading-[1.0] tracking-tight mb-6 animate-fade-up-1"
          style={{ fontSize: 'clamp(48px, 7vw, 88px)', maxWidth: 700 }}
        >
          Scaffolding ops,<br />
          <em className="not-italic text-orange">simplified.</em>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg text-brand-gray leading-relaxed mb-10 font-light animate-fade-up-2"
          style={{ maxWidth: 480 }}
        >
          The all-in-one platform for scaffolding businesses to schedule jobs, manage crews, and stay on top of every site — without the spreadsheet chaos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center mb-16 animate-fade-up-3">
          <a
            href="https://app.edgeops.com.au/signup"
            className="inline-flex items-center gap-2.5 bg-brand-black text-white text-base font-medium px-7 py-3.5 rounded-[10px] hover:bg-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-150"
          >
            Start free trial →
          </a>
          <a
            href="#demo"
            className="text-base font-medium text-brand-black px-7 py-3.5 rounded-[10px] border-[1.5px] border-brand-border hover:border-brand-black hover:-translate-y-0.5 transition-all duration-150"
          >
            Watch demo
          </a>
        </div>
      </section>

      {/* Screenshot */}
      <div className="bg-white px-6 md:px-12 animate-fade-up-4">
        <div
          className="max-w-[1200px] mx-auto rounded-t-xl overflow-hidden pt-10 px-10 relative"
          style={{ background: '#F5F4F0', borderTop: '1px solid #E8E6E0' }}
        >
          {/* Radial glow */}
          <div
            className="pointer-events-none absolute -top-[120px] -right-[80px] w-[500px] h-[500px]"
            style={{
              background: 'radial-gradient(circle, rgba(240,78,35,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Browser chrome */}
          <div
            className="rounded-t-xl border border-b-0 overflow-hidden max-w-[980px] mx-auto"
            style={{
              background: 'white',
              borderColor: '#E8E6E0',
              boxShadow: '0 -4px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)',
            }}
          >
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
                className="flex-1 bg-white border rounded px-3 py-1 text-xs text-brand-gray font-sans"
                style={{ borderColor: '#E8E6E0' }}
              >
                app.edgeops.com.au/dashboard
              </div>
            </div>
            <img
              src="https://ohmbdawxholfwmgmyfil.supabase.co/storage/v1/object/public/branding/Dashboard-screenshot.png?v=2"
              alt="EdgeOps Dashboard"
              className="w-full block"
            />
          </div>
        </div>
      </div>
    </>
  )
}
