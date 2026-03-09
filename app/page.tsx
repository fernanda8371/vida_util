import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { CTABanner } from "@/components/home/cta-banner"
import { ServicesSection } from "@/components/home/services-section"
import { AboutSection } from "@/components/home/about-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header variant="dark" />
      <HeroSection />
      <CTABanner />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
