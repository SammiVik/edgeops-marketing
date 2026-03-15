import { ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111010', color: '#fff' }}>
      {/* Top band */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Left: logo + tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <a href="#" className="cursor-pointer inline-block">
              <img src="/logo-light.svg" alt="EdgeOps" className="h-9" />
            </a>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#666' }}>
              Scaffolding operations software for Australian businesses. Schedule jobs, manage crews, and stay on top of every site.
            </p>
          </div>

          {/* Right: nav + CTA */}
          <div className="flex flex-col gap-5 items-start md:items-end">
            <ul className="flex flex-wrap gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-150 cursor-pointer"
                    style={{ color: '#999' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://app.edgeops.com.au/signup"
              className="inline-flex items-center gap-2 text-sm font-medium bg-orange text-white px-5 py-2.5 rounded-xl hover:bg-orange-light hover:-translate-y-px transition-all duration-150 cursor-pointer"
              style={{ boxShadow: '0 2px 12px rgba(240,78,35,0.3)' }}
            >
              Start free trial
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #1f1f1f' }} />

      {/* Bottom band */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs font-light" style={{ color: '#555' }}>
          © 2026 EdgeOps. All rights reserved.
        </p>
        <ul className="flex items-center gap-5 list-none">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-light transition-colors duration-150 cursor-pointer"
                style={{ color: '#555' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#999')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
