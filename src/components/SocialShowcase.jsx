import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { BUSINESS, INSTAGRAM_REELS } from '../config'

const REELS = [
  {
    id: 'ig1',
    thumbnail: '/images/reel-1.webp',
    caption: 'Clean skin fade. Book the link in bio!',
    likes: '2.4K',
    comments: '38',
    url: INSTAGRAM_REELS[0],
  },
  {
    id: 'ig2',
    thumbnail: '/images/reel-2.webp',
    caption: 'Classic taper + side part. DM to book your appointment.',
    likes: '3.1K',
    comments: '62',
    url: INSTAGRAM_REELS[1],
  },
  {
    id: 'ig3',
    thumbnail: '/images/reel-3.webp',
    caption: 'High fade looking clean as ever. Drop a like if you want this.',
    likes: '1.8K',
    comments: '29',
    url: INSTAGRAM_REELS[2],
  },
]

const BEFORE_AFTER = [
  {
    id: 'ba1',
    before: '/images/before-1.webp',
    after: '/images/after-1.webp',
    label: 'Transformation #1',
  },
  {
    id: 'ba2',
    before: '/images/before-2.webp',
    after: '/images/after-2.webp',
    label: 'Transformation #2',
  },
]

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
        <svg className="w-6 h-6 text-dark-900 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

function ReelCard({ item, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-dark-700 border border-white/5 hover:border-gold-400/30 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-dark-900/80 px-3 py-1.5 text-xs font-semibold tracking-wide">
        <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
        <span className="text-pink-400">Instagram Reel</span>
      </div>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden bg-dark-600"
        style={{ aspectRatio: '9/16', maxHeight: '320px' }}
      >
        <img
          src={item.thumbnail}
          alt={item.caption}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/10 transition-all duration-500" />
        <PlayButton />
      </a>

      <div className="p-4">
        <p className="text-zinc-300 text-sm leading-snug line-clamp-2 mb-3">{item.caption}</p>
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {item.likes}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {item.comments}
          </span>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterCard({ item, delay }) {
  const [ref, inView] = useInView()
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-dark-700 border border-white/5 hover:border-gold-400/30 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex border-b border-white/5">
        <button
          onClick={() => setShowAfter(false)}
          className={`flex-1 py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 ${
            !showAfter ? 'bg-gold-400 text-dark-900' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`flex-1 py-2.5 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 ${
            showAfter ? 'bg-gold-400 text-dark-900' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          After
        </button>
      </div>

      <div className="relative overflow-hidden bg-dark-600" style={{ aspectRatio: '4/5' }}>
        <img
          src={showAfter ? item.after : item.before}
          alt={`${item.label} ${showAfter ? 'after' : 'before'}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      <div className="p-4">
        <p className="text-zinc-300 text-sm font-medium">{item.label}</p>
        <p className="text-zinc-600 text-xs mt-1 italic">Tap Before / After to compare</p>
      </div>
    </div>
  )
}

export default function SocialShowcase() {
  const [headerRef, headerInView] = useInView()

  return (
    <section id="social" className="py-28 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            Instagram
          </span>
          <h2 className="section-title">Latest Cuts</h2>
          <div className="gold-divider" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Fresh content dropping regularly. Follow along for cuts, transformations, and behind-the-scenes.
          </p>

          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-zinc-400 hover:text-pink-400 transition-colors duration-200 text-sm"
          >
            <InstagramIcon />
            <span>Follow on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {REELS.map((item, i) => (
            <ReelCard key={item.id} item={item} delay={i * 80} />
          ))}
          {BEFORE_AFTER.map((item, i) => (
            <BeforeAfterCard key={item.id} item={item} delay={(REELS.length + i) * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
