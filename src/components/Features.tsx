import { Calendar, Users, ClipboardList, Wrench, MessageSquare, BarChart3, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Calendar,
    tag: 'Scheduling',
    title: 'Visual job scheduling, without the whiteboard',
    desc: 'Drag-and-drop scheduling across crews and sites. See conflicts, availability, and gaps at a glance — no more double-bookings or missed starts.',
    large: true,
  },
  {
    icon: Users,
    tag: 'Crew Management',
    title: 'Your crew, always in the right place',
    desc: 'Assign workers to jobs based on qualifications, availability, and site requirements. Send schedules straight to their phones.',
    large: false,
  },
  {
    icon: ClipboardList,
    tag: 'Job Tracking',
    title: 'Every job, from quote to sign-off',
    desc: 'Track job progress, log variation requests, capture site photos, and get digital sign-off — all in one place.',
    large: false,
  },
  {
    icon: Wrench,
    tag: 'Equipment',
    title: 'Know where every tube and fitting is',
    desc: 'Track your scaffold inventory across sites, manage hire equipment, and get alerts when materials need to be returned or inspected.',
    large: false,
  },
  {
    icon: MessageSquare,
    tag: 'Builder Follow-ups',
    title: 'Automated SMS follow-ups with builders',
    desc: 'Stop chasing builders by phone. Automated SMS check-ins confirm dismantle dates and update your schedule — builders respond with one tap.',
    large: false,
  },
  {
    icon: BarChart3,
    tag: 'Reporting',
    title: 'Insights to run a tighter operation',
    desc: 'Builder reliability, job move reasons, crew utilisation — the numbers you need to make better decisions, without building spreadsheets.',
    large: true,
    dark: true,
  },
]

function FeatureCard({
  feature,
  delay = 0,
}: {
  feature: (typeof features)[number]
  delay?: number
}) {
  const { ref, inView } = useInView()
  const Icon = feature.icon

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`p-8 flex flex-col transition-all duration-700 ${
        feature.dark ? 'bg-brand-black text-white' : 'bg-white hover:bg-[#FDFCFA]'
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
          feature.dark ? 'bg-[#1f1f1f]' : 'bg-brand-light'
        }`}
      >
        <Icon
          size={18}
          className={feature.dark ? 'text-orange-light' : 'text-orange'}
          strokeWidth={1.75}
        />
      </div>

      {/* Tag */}
      <div
        className={`text-[11px] font-semibold tracking-[0.08em] uppercase mb-2.5 ${
          feature.dark ? 'text-orange-light' : 'text-orange'
        }`}
      >
        {feature.tag}
      </div>

      {/* Title */}
      <h3
        className={`font-sans font-bold leading-snug tracking-tight mb-3 ${
          feature.large ? 'text-2xl' : 'text-xl'
        } ${feature.dark ? 'text-white' : 'text-brand-black'}`}
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed font-light flex-1 ${
          feature.dark ? 'text-[#aaa]' : 'text-brand-gray'
        }`}
      >
        {feature.desc}
      </p>

      {/* Link */}
      <a
        href="#demo"
        className={`inline-flex items-center gap-1.5 text-[13px] font-medium mt-6 group cursor-pointer w-fit ${
          feature.dark ? 'text-white' : 'text-brand-black'
        }`}
      >
        View demo
        <ArrowRight
          size={13}
          className="group-hover:translate-x-1 transition-transform duration-150"
        />
      </a>
    </div>
  )
}

export default function Features() {
  const { ref: headerRef, inView: headerInView } = useInView()

  return (
    <section id="features" className="py-28 px-6 md:px-12 max-w-[1200px] mx-auto">
      {/* Section header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        className={`mb-14 transition-all duration-700 ${
          headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
          Platform
        </div>
        <h2
          className="font-sans font-extrabold leading-[1.1] tracking-tight mb-4"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)', maxWidth: 560 }}
        >
          Everything your team needs on site and off
        </h2>
        <p className="text-[17px] text-brand-gray leading-relaxed font-light" style={{ maxWidth: 460 }}>
          Built for the way scaffolding businesses actually operate — from yard to rooftop.
        </p>
      </div>

      {/* Bento grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border"
        style={{ gap: 2, background: '#E8E6E0', borderColor: '#E8E6E0' }}
      >
        {/* Row 1: large (col-span-2) + small */}
        <div className="md:col-span-2">
          <FeatureCard feature={features[0]} delay={0} />
        </div>
        <div>
          <FeatureCard feature={features[1]} delay={80} />
        </div>

        {/* Row 2: three equal */}
        <div>
          <FeatureCard feature={features[2]} delay={0} />
        </div>
        <div>
          <FeatureCard feature={features[3]} delay={80} />
        </div>
        <div>
          <FeatureCard feature={features[4]} delay={160} />
        </div>

        {/* Row 3: full-width dark card */}
        <div className="md:col-span-3">
          <FeatureCard feature={features[5]} delay={0} />
        </div>
      </div>
    </section>
  )
}
