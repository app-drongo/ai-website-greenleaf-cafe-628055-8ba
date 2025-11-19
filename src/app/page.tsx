import Hero from '@/components/sections/home/Hero'
import About from '@/components/sections/home/About'
import Gallery from '@/components/sections/home/Gallery'
import Map from '@/components/sections/home/Map'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Map />
      <Contact />
    </>
  )
}