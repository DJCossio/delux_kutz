import { BUSINESS, BOOKSY_URL } from '../config'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.webp"
                alt="Deluxe Kutz logo"
                className="w-12 h-12 object-contain rounded-full"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-widest block">
                  {BUSINESS.name}
                </span>
                <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">{BUSINESS.subtitle}</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Precision cuts and professional service. Where every client leaves looking and feeling
              their absolute best.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block text-zinc-500 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-zinc-500">
              <p>{BUSINESS.phone}</p>
              <p className="leading-relaxed">{BUSINESS.address}</p>
              <div className="flex gap-4 pt-2">
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-pink-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <span className="text-zinc-700">·</span>
                <a
                  href={BOOKSY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-gold-400 transition-colors duration-200"
                >
                  Booksy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name} {BUSINESS.subtitle}. All rights reserved.</p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 transition-colors duration-200 tracking-wider uppercase font-semibold"
          >
            Book Now &rarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
