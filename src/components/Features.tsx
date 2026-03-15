const features = [
  {
    icon: '📅',
    tag: 'Scheduling',
    title: 'Visual job scheduling, without the whiteboard',
    desc: 'Drag-and-drop scheduling across crews and sites. See conflicts, availability, and gaps at a glance — no more double-bookings or missed starts.',
  },
  {
    icon: '👷',
    tag: 'Crew Management',
    title: 'Your crew, always in the right place',
    desc: 'Assign workers to jobs based on qualifications, availability, and site requirements. Send schedules straight to their phones.',
  },
  {
    icon: '📋',
    tag: 'Job Tracking',
    title: 'Every job, from quote to sign-off',
    desc: 'Track job progress, log variation requests, capture site photos, and get digital sign-off — all in one place.',
  },
  {
    icon: '🔧',
    tag: 'Equipment',
    title: 'Know where every tube and fitting is',
    desc: 'Track your scaffold inventory across sites, manage hire equipment, and get alerts when materials need to be returned or inspected.',
  },
  {
    icon: '💬',
    tag: 'Builder Follow-ups',
    title: 'Automated SMS follow-ups with builders',
    desc: 'Stop chasing builders by phone. Automated SMS check-ins confirm dismantle dates and update your schedule — builders respond with one tap.',
  },
  {
    icon: '📊',
    tag: 'Reporting',
    title: 'Insights to run a tighter operation',
    desc: 'Builder reliability, job move reasons, crew utilisation — the numbers you need to make better decisions, without building spreadsheets.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
        Platform
      </div>
      <h2
        className="font-sans font-extrabold leading-[1.1] tracking-tight mb-4"
        style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 560 }}
      >
        Everything your team needs on site and off
      </h2>
      <p className="text-[17px] text-brand-gray leading-relaxed font-light mb-14" style={{ maxWidth: 480 }}>
        Built for the way scaffolding businesses actually operate — from yard to rooftop.
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border"
        style={{ gap: 2, background: '#E8E6E0', borderColor: '#E8E6E0' }}
      >
        {features.map((f) => (
          <div
            key={f.tag}
            className="bg-white p-9 hover:bg-[#FDFCFA] transition-colors"
          >
            <div className="w-11 h-11 rounded-[10px] bg-brand-light flex items-center justify-center text-xl mb-5">
              {f.icon}
            </div>
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-orange mb-2.5">
              {f.tag}
            </div>
            <div className="font-sans font-bold text-xl leading-snug tracking-tight mb-3">
              {f.title}
            </div>
            <p className="text-sm text-brand-gray leading-[1.65] font-light">
              {f.desc}
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-black mt-5 border-b pb-0.5 hover:gap-2.5 transition-all duration-200"
              style={{ borderColor: '#E8E6E0' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#111010')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E8E6E0')}
            >
              View demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
