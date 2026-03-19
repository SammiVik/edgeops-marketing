import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
]

const legalLinks = [
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61577656014598',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.874v2.256h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/112988924',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#111010', color: '#fff' }}>
      {/* Top band */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          {/* Left: logo + tagline */}
          <div className="flex flex-col gap-4" style={{ maxWidth: 420 }}>
            <a href="#" className="cursor-pointer inline-block">
              <img src="/logo-white.svg" alt="EdgeOps" className="h-14" />
            </a>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#888', maxWidth: 420 }}>
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
        <div className="flex items-center gap-6">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors duration-150"
                style={{ color: '#555' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#999')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Legal links */}
          <ul className="flex items-center gap-5 list-none">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-xs font-light transition-colors duration-150 cursor-pointer"
                  style={{ color: '#555' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#999')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
