import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import SocialShowcase from './components/SocialShowcase'
import Barbers from './components/Barbers'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <SocialShowcase />
        {/*<Barbers/>*/}
        <Reviews />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
