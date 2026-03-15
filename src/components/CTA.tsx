export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto text-center">
      <div
        className="bg-brand-black rounded-3xl px-12 py-20 relative overflow-hidden"
      >
        {/* Radial glows */}
        <div
          className="pointer-events-none absolute -top-[100px] -right-[100px] w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(240,78,35,0.25) 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-[80px] -left-[80px] w-[300px] h-[300px]"
          style={{ background: 'radial-gradient(circle, rgba(240,78,35,0.15) 0%, transparent 70%)' }}
        />

        <div className="relative z-10">
          <div className="text-xs font-semibold tracking-widest uppercase text-orange-light mb-4">
            Get started
          </div>

          <h2
            className="font-sans font-extrabold leading-[1.1] tracking-tight text-white mx-auto mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Run a tighter operation,<br />starting today
          </h2>

          <p className="text-[17px] font-light leading-relaxed mx-auto mb-10" style={{ color: '#888', maxWidth: 480 }}>
            30-day free trial. No credit card required. Set up in under 10 minutes.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://app.edgeops.com.au/signup"
              className="text-base font-medium bg-orange text-white px-8 py-3.5 rounded-[10px] hover:bg-orange-light hover:-translate-y-0.5 transition-all duration-150"
            >
              Start free trial →
            </a>
            <a
              href="#demo"
              className="text-base font-medium text-white px-7 py-3.5 rounded-[10px] border-[1.5px] border-[#333] hover:border-[#666] hover:-translate-y-0.5 transition-all duration-150"
            >
              Watch demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
