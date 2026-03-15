import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from './Footer'

interface Props {
  title: string
  effectiveDate: string
  children: React.ReactNode
}

export default function LegalLayout({ title, effectiveDate, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Minimal top bar */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: '#E8E6E0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="/logo-marketing-nav.svg" alt="EdgeOps" className="h-12" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-gray hover:text-brand-black transition-colors duration-150 cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-16 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto">
          {/* Page header */}
          <div className="mb-12 pb-10 border-b" style={{ borderColor: '#E8E6E0' }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
              Legal
            </p>
            <h1
              className="font-sans font-extrabold leading-tight tracking-tight text-brand-black mb-3"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              {title}
            </h1>
            <p className="text-sm text-brand-gray font-light">
              Effective Date: {effectiveDate}
            </p>
          </div>

          {/* Legal body */}
          <div className="legal-body">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
