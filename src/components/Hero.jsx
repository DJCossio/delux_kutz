import { useEffect, useState } from 'react'
import { BOOKSY_URL, BUSINESS } from '../config'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background â€” your real shop photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.webp)', backgroundColor: '#111111' }}
        role="img"
        aria-label="Deluxe Kutz Barber Lounge interior"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/75 via-dark-900/55 to-dark-900/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/50 via-transparent to-dark-900/30" />

      {/* Top gold line */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gold-400 to-transparent transition-all duration-1000 ${
          loaded ? 'h-32 opacity-100' : 'h-0 opacity-0'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Logo mark */}
        <div
          className={`mb-8 transition-all duration-1000 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >

         {/* <img
            src="/images/logo.webp"
            alt="Deluxe Kutz Barber Lounge"
            className="w-28 h-28 md:w-36 md:h-36 object-contain mx-auto drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextSibling.style.display = 'flex'
            }}
          />  */}

          {/* Fallback if logo not yet added */}
          <div className="hidden flex-col items-center">
            <div className="w-16 h-px bg-gold-400 mb-5" />
            <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium">Est. 2020</span>
            <div className="w-16 h-px bg-gold-400 mt-5" />
          </div>
        </div>

        {/* Shop name */}
        <h1
          className={`font-serif leading-none mb-2 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight">
            {BUSINESS.name}
          </span>
          <span className="block text-2xl md:text-3xl font-light tracking-[0.5em] text-gold-400 uppercase mt-2">
            {BUSINESS.subtitle}
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-16 h-px bg-gold-400/60" />
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase">
            {BUSINESS.tagline}
          </span>
          <div className="w-16 h-px bg-gold-400/60" />
        </div>

        {/* Supporting text */}
        <p
          className={`text-zinc-300 text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          La Crosse's freshest spot. Come in looking regular, leave looking like you.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base px-10 py-5 shadow-2xl shadow-gold-400/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline text-base px-10 py-5"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1200ms] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-zinc-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent animate-bounce" />
      </div>
    </section>
  )
}
