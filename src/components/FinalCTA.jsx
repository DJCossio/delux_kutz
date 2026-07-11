import { useInView } from '../hooks/useInView'
import { BOOKSY_URL, BUSINESS } from '../config'

export default function FinalCTA() {
  const [ref, inView] = useInView()

  return (
    <section
      className="relative py-36 overflow-hidden"
      aria-label="Book appointment call to action"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/shop-2.webp)',
          backgroundColor: '#181818',
        }}
        role="img"
        aria-label="Barbershop atmosphere"
      />
      <div className="absolute inset-0 bg-dark-900/88" />

      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="inline-flex flex-col items-center mb-8">
          <div className="w-12 h-px bg-gold-400 mb-4" />
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">
            Ready to Look Your Best?
          </span>
          <div className="w-12 h-px bg-gold-400 mt-4" />
        </div>

        <h2 className="font-serif text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Ready for Your
          <span className="block text-gold-400">Next Cut?</span>
        </h2>

        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
          Stop pulling up looking any kind of way.{' '}
          <span className="text-gold-400 font-semibold">{BUSINESS.name}</span> keeps it clean,
          keeps it sharp, and makes sure you leave looking right every time.
        </p>
        <p className="text-zinc-500 text-sm mb-12">
          Spots fill up fast &mdash; book yours on Booksy before it&apos;s gone.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-12 py-5 shadow-2xl shadow-gold-400/25 text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Now on Booksy
          </a>
          <a
            href={`tel:${BUSINESS.phone.replace(/[^0-9+]/g, '')}`}
            className="btn-outline text-base px-10 py-5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 text-zinc-500 text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="text-gold-400">★★★★★</span>
            Five-Star Rated
          </span>
          <span className="text-zinc-700">·</span>
          <span>Walk-Ins Welcome</span>
          <span className="text-zinc-700">·</span>
          <span>730 Rose St, La Crosse</span>
        </div>
      </div>
    </section>
  )
}
