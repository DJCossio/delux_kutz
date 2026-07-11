import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const GALLERY_ITEMS = [
  { id: 1, src: '/images/cut-1.webp', alt: 'Clean skin fade by Deluxe Kutz', label: 'Skin Fade' },
  { id: 2, src: '/images/cut-2.webp', alt: 'Classic side part taper by Deluxe Kutz', label: 'Classic Taper' },
  { id: 3, src: '/images/cut-3.webp', alt: 'High skin fade by Deluxe Kutz', label: 'High Fade' },
  { id: 4, src: '/images/cut-4.webp', alt: 'Fresh cut by Deluxe Kutz', label: 'Fresh Cut' },
  { id: 5, src: '/images/cut-5.webp', alt: 'Precision cut by Deluxe Kutz', label: 'Precision Cut' },
  { id: 6, src: '/images/shop-2.webp', alt: 'Deluxe Kutz waiting area with neon sign', label: 'The Lounge' },
  { id: 7, src: '/images/barber-pole.webp', alt: 'Deluxe Kutz gold barber pole', label: 'Deluxe Kutz' },
  { id: 8, src: '/images/shop-1.webp', alt: 'Deluxe Kutz barber station', label: 'The Station' },
]

function GalleryImage({ item, delay }) {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative overflow-hidden group cursor-pointer bg-dark-700 transition-all duration-700 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-700 ${
          hovered ? 'scale-110 grayscale-0' : 'scale-100 grayscale'
        }`}
        style={{ minHeight: '280px' }}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent transition-all duration-500 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <span className="block text-xs text-gold-400 tracking-widest uppercase mb-1">
          {item.label}
        </span>
        <div className="w-8 h-px bg-gold-400" />
      </div>

      <div className={`absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-400 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-400 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}

export default function Gallery() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="gallery" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            Our Work
          </span>
          <h2 className="section-title">Gallery</h2>
          <div className="gold-divider" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Every cut tells a story. Hover over the photos to see the work up close.
          </p>
        </div>

        {/* 4-col grid — 8 items = 2 clean rows, no gaps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryImage key={item.id} item={item} delay={i * 60} />
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-zinc-500 text-sm">
            See more on{' '}
            <a
              href="https://www.instagram.com/deluxe_kutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
