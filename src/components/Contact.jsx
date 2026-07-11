import { useInView } from '../hooks/useInView'
import { BUSINESS, HOURS, BOOKSY_URL } from '../config'



function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}


const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

export default function Contact() {
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()

  return (
    <section id="contact" className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            Find Us
          </span>
          <h2 className="section-title">Contact & Location</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-700 ${
              leftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-1">Address</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{BUSINESS.address}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition-colors duration-200 text-sm group"
                  >
                    <div className="w-9 h-9 bg-white/5 group-hover:bg-pink-500/20 flex items-center justify-center transition-colors duration-200">
                      <InstagramIcon />
                    </div>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <div className="pt-4">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book on Booksy
              </a>
            </div>
          </div>

          {/* Right: Hours + Map */}
          <div
            ref={rightRef}
            className={`space-y-8 transition-all duration-700 delay-200 ${
              rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Hours */}
            <div className="bg-dark-700 border border-white/5 p-8">
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours of Operation
              </h3>
              <div className="space-y-3">
                {HOURS.map((item) => {
                  const isToday = item.day === today
                  return (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 ${
                        isToday ? 'text-gold-400' : 'text-zinc-400'
                      }`}
                    >
                      <span className={`text-sm font-medium ${isToday ? 'text-gold-400' : ''}`}>
                        {item.day}
                        {isToday && (
                          <span className="ml-2 text-xs bg-gold-400 text-dark-900 px-2 py-0.5 font-bold uppercase tracking-wider">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={`text-sm ${item.hours === 'Closed' ? 'text-zinc-600' : ''}`}>
                        {item.hours}
                      </span>
                    </div>
                  )
                })}
              </div>
              <p className="text-zinc-600 text-xs mt-4 italic">
                Hours may vary &mdash; check{' '}
                <a href="https://booksy.com/en-us/dl/show-business/1601417" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">
                  Booksy
                </a>{' '}
                for availability.
              </p>
            </div>

            {/* Map */}
            <a
              href={BUSINESS.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden bg-dark-700 border border-white/5 hover:border-gold-400/30 transition-colors duration-300 group"
              style={{ height: '280px' }}
              aria-label="Open in Google Maps"
            >
              <iframe
                title="Deluxe Kutz Location"
                src={BUSINESS.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.85)', pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-dark-900/80 py-2 px-4 flex items-center justify-between text-xs text-zinc-400 group-hover:text-gold-400 transition-colors duration-200">
                <span>730 Rose St, La Crosse, WI</span>
                <span className="text-gold-400">Open in Maps &rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
