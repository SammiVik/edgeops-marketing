import { useInView } from '../hooks/useInView'

export default function Demo() {
  const { ref, inView } = useInView()

  return (
    <section
      id="demo"
      className="py-28 px-6 md:px-12 border-t"
      style={{ background: '#F5F4F0', borderColor: '#E8E6E0' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* 2-col header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-orange mb-4">
              Demo
            </div>
            <h2
              className="font-sans font-extrabold leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              See EdgeOps in action
            </h2>
          </div>
          <p className="text-[17px] text-brand-gray leading-relaxed font-light">
            Watch how a scaffolding business goes from chaos to clarity — from first quote
            through to final sign-off — in under 5 minutes.
          </p>
        </div>

        {/* Arcade embed */}
        <div
          className="rounded-2xl overflow-hidden border"
          style={{
            borderColor: '#2a2a2a',
            boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
          }}
        >
          {/* ARCADE EMBED START */}
          <div
            style={{
              position: 'relative',
              paddingBottom: 'calc(53.7153% + 41px)',
              height: 0,
              width: '100%',
            }}
          >
            <iframe
              src="https://demo.arcade.software/mFjxSydheV9ZK25ATcjr?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="EdgeOps Product Demo"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                colorScheme: 'light',
              }}
            />
          </div>
          {/* ARCADE EMBED END */}
        </div>
      </div>
    </section>
  )
}
