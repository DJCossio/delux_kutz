import { useInView } from '../hooks/useInView'

const REVIEWS = [
  {
    id: 1,
    name: 'Marcus J.',
    rating: 5,
    date: '2 weeks ago',
    text: "Best barber I've ever been to, period. The fade is always perfectly blended and my line up is razor sharp every single time. Book him — you won't be disappointed.",
    initials: 'MJ',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'DeShawn T.',
    rating: 5,
    date: '1 month ago',
    text: "I drove 45 minutes because a friend recommended this spot. Worth every mile. The attention to detail is unreal and the vibe in the shop is just right. Already booked my next appointment.",
    initials: 'DT',
    color: 'bg-emerald-600',
    featured: true,
  },
  {
    id: 3,
    name: 'Carlos R.',
    rating: 5,
    date: '3 weeks ago',
    text: "Got a haircut + beard trim and walked out looking like a new man. My girl didn't even recognize me at first lol. This is now my go-to spot. No going back.",
    initials: 'CR',
    color: 'bg-orange-600',
  },
  {
    id: 4,
    name: 'Jaylen W.',
    rating: 5,
    date: '2 months ago',
    text: "Took my son for his first real cut and they made him feel so comfortable. Patient, professional, and the kid's fade came out clean as hell. We're both clients now.",
    initials: 'JW',
    color: 'bg-purple-600',
  },
  {
    id: 5,
    name: 'Anthony M.',
    rating: 5,
    date: '1 month ago',
    text: "This spot is exactly what the name says — deluxe. Never have to ask for corrections, never leave unsatisfied. Consistent quality every visit. That's rare.",
    initials: 'AM',
    color: 'bg-red-600',
  },
  {
    id: 6,
    name: 'Isaiah P.',
    rating: 5,
    date: '3 months ago',
    text: "The booking process is smooth through Booksy and the wait time is always on point. Professionalism is through the roof. This guy takes his craft seriously and it shows.",
    initials: 'IP',
    color: 'bg-teal-600',
  },
]

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold-400' : 'text-zinc-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative card-dark p-8 transition-all duration-700 hover:border-gold-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-400/5 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${review.featured ? 'border-gold-400/30 shadow-lg shadow-gold-400/10' : ''}`}
    >
      {review.featured && (
        <div className="absolute top-0 right-0 bg-gold-400 text-dark-900 text-xs font-bold tracking-widest uppercase px-3 py-1">
          &#9733; Top Review
        </div>
      )}

      <svg
        className="w-8 h-8 text-gold-400/20 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      <p className="text-zinc-300 leading-relaxed text-sm mb-6 italic">&ldquo;{review.text}&rdquo;</p>

      <Stars rating={review.rating} />

      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
        <div
          className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-zinc-600 text-xs">{review.date} &middot; Google Review</p>
        </div>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [headerRef, headerInView] = useInView()
  const [avgRef, avgInView] = useInView()

  return (
    <section id="reviews" className="py-28 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gold-400 text-xs tracking-[0.4em] uppercase font-medium block mb-4">
            Client Testimonials
          </span>
          <h2 className="section-title">What Clients Say</h2>
          <div className="gold-divider" />
          <p className="text-zinc-400 max-w-lg mx-auto text-base leading-relaxed">
            Don&apos;t take our word for it. Here&apos;s what the community is saying.
          </p>
        </div>

        <div
          ref={avgRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 p-8 bg-dark-700 border border-white/5 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            avgInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center">
            <div className="font-serif text-6xl font-black text-gold-400">5.0</div>
            <Stars rating={5} />
            <p className="text-zinc-500 text-xs mt-2 tracking-wider">Average Rating</p>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-white">La Crosse</div>
            <p className="text-zinc-500 text-xs mt-2 tracking-wider">730 Rose St, WI</p>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-white">Real</div>
            <p className="text-zinc-500 text-xs mt-2 tracking-wider">Every Review</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 80} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-zinc-500 text-sm">
            Read more reviews on{' '}
            <span className="text-gold-400">Google Maps</span>
          </p>
        </div>
      </div>
    </section>
  )
}
