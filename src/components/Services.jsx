import { useInView } from '../hooks/useInView'
import { BOOKSY_URL } from '../config'

const SERVICES = [
  {
    name: 'Haircut',
    price: '$45',
    duration: '45 min',
    description: 'Your style, done right. Fade, taper, texture â€” whatever you need to walk out fresh.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    name: 'Haircut + Beard',
    price: '$60',
    duration: '60 min',
    description: 'The full package. Sharp cut plus beard shaped and lined up â€” you\'ll be good.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    featured: true,
  },
  {
    name: 'Beard Trim',
    price: '$25',
    duration: '30 min',
    description: 'Clean it up, shape it out. Your beard looking crisp from every angle.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    name: 'Kids Haircut',
    price: '$40',
    duration: '30 min',
    description: 'Little ones get the same attention as everyone else. Clean cuts for kids 12 and under.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Line Up',
    price: '$25',
    duration: '20 min',
    description: 'Edge-up on the hairline, temples, and neck. That finishing touch that hits different.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    name: 'Eyebrows',
    price: '$10',
    duration: '10 min',
    description: 'Quick clean-up that makes a big difference. Shaped and lined â€” no more looking rough.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
]

function ServiceCard({ service, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative card-dark p-8 transition-all duration-700 hover:border-gold-400/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-400/5 cursor-pointer ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${service.featured ? 'border-gold-400/30 shadow-lg shadow-gold-400/10' : ''}`}
    >
      {service.featured && (
        <div className="absolute top-0 right-0 bg-gold-400 text-dark-900 text-xs font-bold tracking-widest uppercase px-3 py-1">
          Popular
        </div>
      )}

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 mb-6 transition-colors duration-300 ${
          service.featured ? 'text-gold-400 bg-gold-400/10' : 'text-zinc-400 bg-white/5 group-hover:text-gold-400 group-hover:bg-gold-400/10'
        }`}
      >
        {service.icon}
      </div>

      {/* Name & Price */}
      <div className="flex items-start justify-between mb-3">
        <h3
          className={`font-serif text-xl font-bold transition-colors duration-300 ${
            service.featured ? 'text-gold-400' : 'text-white group-hover:text-gold-400'
          }`}
        >
          {service.name}
        </h3>
        <span className="font-serif text-2xl font-bold text-gold-400 ml-4 whitespace-nowrap">
          {service.price}
        </span>
      </div>

      {/* Duration */}
      <span className="text-zinc-500 text-xs tracking-widest uppercase mb-4 block">
        â± {service.duration}
      </span>

      {/* Description */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Book link */}
      <a
        href={BOOKSY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-gold-400 text-xs tracking-widest uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        Book This Service
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  )
}

export default function Services() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="services" className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            What We Offer
          </span>
          <h2 className="section-title">Services & Pricing</h2>
          <div className="gold-divider" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Every service is performed with precision and care. No rush, no shortcuts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} delay={i * 80} />
          ))}
        </div>

        {/* Book all */}
        <div className="text-center mt-14">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}
