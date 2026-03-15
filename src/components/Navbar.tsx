import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E8E6E0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img src="/logo-marketing-nav.svg" alt="EdgeOps" className="h-[38px]" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a
              href="#features"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#demo"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              Demo
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors"
            >
              Pricing
            </a>
          </li>
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.edgeops.com.au"
            className="text-sm font-medium text-brand-black px-4 py-2 rounded-lg hover:bg-brand-light transition-colors"
          >
            Log in
          </a>
          <a
            href="https://app.edgeops.com.au/signup"
            className="text-sm font-medium bg-brand-black text-white px-5 py-2.5 rounded-lg hover:bg-[#2a2a2a] hover:-translate-y-px transition-all duration-150"
          >
            Start free trial →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-brand-black transition-transform duration-200 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brand-black transition-opacity duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brand-black transition-transform duration-200 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: '#E8E6E0', background: 'rgba(255,255,255,0.97)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-brand-gray" onClick={() => setMobileOpen(false)}>
              Features
            </a>
            <a href="#demo" className="text-sm font-medium text-brand-gray" onClick={() => setMobileOpen(false)}>
              Demo
            </a>
            <a href="#pricing" className="text-sm font-medium text-brand-gray" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <hr style={{ borderColor: '#E8E6E0' }} />
            <a href="https://app.edgeops.com.au" className="text-sm font-medium text-brand-black">
              Log in
            </a>
            <a
              href="https://app.edgeops.com.au/signup"
              className="text-sm font-medium text-center bg-brand-black text-white px-5 py-3 rounded-lg"
            >
              Start free trial →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
