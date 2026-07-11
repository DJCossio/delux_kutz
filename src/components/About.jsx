import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '4+', label: 'Years in the Game' },
  { value: '24', label: 'Years Young' },
  { value: '100%', label: 'Every Time' },
]

export default function About() {
  const [sectionRef, sectionInView] = useInView()
  const [imgRef, imgInView] = useInView()

  return (
    <section id="about" className="py-28 bg-dark-800 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-gold-400/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-1000 ${
              imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-gold-400/30 z-0" />

              <img
                src="/images/shop-1.webp"
                alt="Deluxe Kutz Barber Lounge interior"
                className="relative z-10 w-full object-cover transition-all duration-700 bg-dark-700"
                style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
                loading="eager"
                decoding="async"
              />

              {/* Badge */}
              <div className="absolute bottom-6 -right-6 z-20 bg-gold-400 text-dark-900 px-6 py-4 text-center shadow-2xl">
                <span className="block font-serif text-3xl font-black leading-none">4+</span>
                <span className="block text-xs uppercase tracking-widest font-semibold mt-1">Years</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={sectionRef}
            className={`transition-all duration-1000 delay-200 ${
              sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
              The Spot
            </span>

            <h2 className="section-title mb-2">
              Deluxe Kutz
            </h2>
            <p className="text-gold-400 font-serif text-lg italic mb-6">Barber Lounge â€” La Crosse, WI</p>

            <div className="w-12 h-px bg-gold-400 mb-8" />

            <div className="space-y-5 text-zinc-400 leading-relaxed text-base">
              <p>
                Young barber. Fresh shop. Real talent. Deluxe Kutz isn't your average spot â€”
                it's where you come to actually look good, not just get a cut.
              </p>
              <p>
                4 years deep in the craft and just opened his own lounge, the mission is simple:
                keep it clean, keep it sharp, and make sure every single client walks out
                <span className="text-white font-medium"> looking like the best version of themselves.</span>
              </p>
              <p>
                The vibe is right, the cuts are clean, and the attention to detail is on point â€”
                every time, no exceptions.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Skin Fades', 'Beard Design', 'Line-Ups', 'Kids Cuts', 'Eyebrows'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-gold-400/30 text-gold-400 text-xs tracking-widest uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-gold-400">{stat.value}</div>
                  <div className="text-zinc-500 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
