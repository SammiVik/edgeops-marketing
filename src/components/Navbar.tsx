import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_4px_32px_rgba(0,0,0,0.10)]'
            : 'shadow-[0_2px_16px_rgba(0,0,0,0.06)]'
        }`}
        style={{
          background: 'rgba(255,255,255,0.90)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(232,230,224,0.8)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0 cursor-pointer">
            <img src="/logo-marketing-nav.svg" alt="EdgeOps" className="h-12" />
          </a>

          {/* Desktop nav links - centred */}
          <ul className="hidden md:flex items-center gap-7 list-none absolute left-1/2 -translate-x-1/2">
            {['Features', 'Demo', 'Pricing'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors duration-150 cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://app.edgeops.com.au"
              className="text-sm font-medium text-brand-black px-4 py-2 rounded-lg hover:bg-brand-light transition-colors duration-150 cursor-pointer"
            >
              Log in
            </a>
            <a
              href="https://app.edgeops.com.au/signup"
              className="text-sm font-medium bg-brand-black text-white px-4 py-2 rounded-lg hover:bg-[#2a2a2a] hover:-translate-y-px transition-all duration-150 cursor-pointer"
            >
              Start free trial →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-light transition-colors duration-150 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={20} className="text-brand-black" />
            ) : (
              <Menu size={20} className="text-brand-black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl border p-5 flex flex-col gap-3"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(16px)',
            borderColor: '#E8E6E0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          }}
        >
          {['Features', 'Demo', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-brand-gray py-1.5 cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr style={{ borderColor: '#E8E6E0' }} />
          <a href="https://app.edgeops.com.au" className="text-sm font-medium text-brand-black py-1.5 cursor-pointer">
            Log in
          </a>
          <a
            href="https://app.edgeops.com.au/signup"
            className="text-sm font-medium text-center bg-brand-black text-white px-5 py-3 rounded-xl cursor-pointer"
          >
            Start free trial →
          </a>
        </div>
      )}
    </>
  )
}
