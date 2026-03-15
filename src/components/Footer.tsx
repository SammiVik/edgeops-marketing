export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 md:px-12 py-10" style={{ borderColor: '#E8E6E0' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center cursor-pointer">
          <img src="/logo-marketing-nav.svg" alt="EdgeOps" className="h-8" />
        </a>

        <ul className="flex items-center gap-7 list-none">
          {['Features', 'Demo', 'Pricing'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[13px] text-brand-gray hover:text-brand-black transition-colors duration-150 cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[13px] text-brand-gray font-light">
          © 2026 EdgeOps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
