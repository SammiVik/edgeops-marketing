export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 md:px-12 py-12" style={{ borderColor: '#E8E6E0' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center">
          <img src="/logo-marketing-nav.svg" alt="EdgeOps" className="h-8" />
        </a>

        <ul className="flex items-center gap-6 list-none">
          <li>
            <a href="#features" className="text-[13px] text-brand-gray hover:text-brand-black transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#demo" className="text-[13px] text-brand-gray hover:text-brand-black transition-colors">
              Demo
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-[13px] text-brand-gray hover:text-brand-black transition-colors">
              Pricing
            </a>
          </li>
        </ul>

        <p className="text-[13px] text-brand-gray font-light">
          © 2026 EdgeOps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
