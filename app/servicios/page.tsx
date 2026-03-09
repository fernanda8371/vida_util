import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesDescription } from "@/components/services/services-description"
import { ServicesVideo } from "@/components/services/services-video"
import { ServicesAlternating } from "@/components/services/services-alternating"
import { ServicesGallery } from "@/components/services/services-gallery"
import { ServicesContact } from "@/components/services/services-contact"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen">
      <Header variant="light" />
      <ServicesHero />
      <ServicesDescription />
      <ServicesVideo />
      <ServicesAlternating />
      <ServicesGallery />
      <ServicesContact />
      <Footer />
    </main>
  )
}
