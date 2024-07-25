import CTASection from "@/components/home-page/CTASection"
import FeatureSection from "@/components/home-page/FeatureSection"
import Footer from "@/components/home-page/Footer"
import { Hero } from "@/components/home-page/Hero"
import Navbar from "@/components/home-page/Navbar"


export default function Home() {
  return (
    <div className="home-container bg-black/[0.96]">
      <Navbar />
      <Hero />
      <FeatureSection />
      <CTASection />
      <Footer />
    </div>
  )
}
