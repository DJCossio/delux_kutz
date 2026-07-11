import { useState, useEffect } from 'react'
import { BOOKSY_URL, BUSINESS } from '../config'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? 'bg-dark-900/95 border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            aria-label="Deluxe Kutz home"
          >
            <img
              src="/images/logo.webp"
              alt="Deluxe Kutz Barber Lounge logo"
              className="w-12 h-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-bold text-white tracking-widest group-hover:text-gold-400 transition-colors duration-300">
                {BUSINESS.name}
              </span>
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
                {BUSINESS.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-zinc-400 hover:text-white text-sm tracking-wider uppercase font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now CTA */}
          <div className="flex items-center gap-4">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gold-400 text-dark-900 font-semibold px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-dark-900"
            >
              Book Now
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col gap-1.5 p-2 group"
            >
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-dark-800/98 border-t border-white/5 nav-blur`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-zinc-300 hover:text-gold-400 text-base tracking-wider uppercase font-medium py-3 border-b border-white/5 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-gold text-center"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  )
}
