import { useInView } from '../hooks/useInView'

// ─────────────────────────────────────────────
//  Add each barber's real info below.
//  Photos go in public/images/ — e.g. barber-1.webp, barber-2.webp
// ─────────────────────────────────────────────
const BARBERS = [
  {
    id: 1,
    name: '[Barber 1 Name]',
    title: 'Owner & Master Barber',
    photo: '/images/shop-1.webp',
    specialty: 'Skin Fades, Designs, Beard Work',
    bio: 'The man behind Deluxe Kutz. 4 years deep and still leveling up — every cut is personal.',
    booksy: 'https://booksy.com/en-us/dl/show-business/1601417',
    instagram: 'https://www.instagram.com/deluxe_kutz',
    workPhotos: ['/images/cut-1.webp', '/images/cut-2.webp', '/images/cut-3.webp'],
  },
  {
    id: 2,
    name: '[Barber 2 Name]',
    title: 'Barber',
    photo: '/images/shop-2.webp',
    specialty: 'Tapers, Line-Ups, Classic Cuts',
    bio: 'Bringing his own style and precision to the lounge. Clean cuts, good energy, every time.',
    booksy: 'https://booksy.com/en-us/YOUR_BARBER2_ID',
    instagram: 'https://www.instagram.com/YOUR_BARBER2_HANDLE',
    workPhotos: ['/images/cut-4.webp', '/images/cut-5.webp', '/images/barber-pole.webp'],
  },
]

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function BarberCard({ barber, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bg-dark-700 border border-white/5 hover:border-gold-400/20 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Photo */}
      <div className="relative overflow-hidden bg-dark-600" style={{ aspectRatio: '4/3' }}>
        <img
          src={barber.photo}
          alt={barber.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent p-5">
          <h3 className="font-serif text-xl font-bold text-white">{barber.name}</h3>
          <p className="text-gold-400 text-xs tracking-widest uppercase mt-1">{barber.title}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Specialty */}
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-3">{barber.specialty}</p>

        {/* Bio */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{barber.bio}</p>

        {/* Work photos mini-grid */}
        <div className="grid grid-cols-3 gap-1.5 mb-6">
          {barber.workPhotos.map((src, i) => (
            <div key={i} className="overflow-hidden bg-dark-600" style={{ aspectRatio: '1' }}>
              <img
                src={src}
                alt={`${barber.name} work ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <a
            href={barber.booksy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gold-400 text-dark-900 text-xs font-bold tracking-widest uppercase py-3 hover:bg-gold-300 transition-colors duration-200"
          >
            Book Now
          </a>
          <a
            href={barber.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/10 text-zinc-400 hover:text-pink-400 hover:border-pink-400/40 text-xs font-semibold tracking-widest uppercase px-4 py-3 transition-all duration-200"
          >
            <InstagramIcon />
            Follow
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Barbers() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="barbers" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            The Team
          </span>
          <h2 className="section-title">Meet the Barbers</h2>
          <div className="gold-divider" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Every chair at Deluxe Kutz is occupied by someone who takes the craft seriously.
            Pick your barber and book direct.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 ${BARBERS.length >= 3 ? 'lg:grid-cols-3' : 'max-w-3xl mx-auto'}`}>
          {BARBERS.map((barber, i) => (
            <BarberCard key={barber.id} barber={barber} delay={i * 150} />
          ))}
        </div>

        {/* Placeholder for third barber — remove this block when ready */}
        <div
          className={`mt-8 border border-dashed border-white/10 p-10 text-center transition-all duration-700 delay-300 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-zinc-600 text-sm tracking-wider">
            + Third barber coming soon
          </p>
        </div>
      </div>
    </section>
  )
}
