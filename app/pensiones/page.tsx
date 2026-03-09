import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PensionesHero } from "@/components/pensiones/pensiones-hero"
import { PensionesInfo } from "@/components/pensiones/pensiones-info"
import { PensionesBenefits } from "@/components/pensiones/pensiones-benefits"
import { PensionesFAQ } from "@/components/pensiones/pensiones-faq"
import { ContactSection } from "@/components/home/contact-section"

export const metadata: Metadata = {
  title: "Pensiones - Vida Util",
  description: "Asesoría especializada en pensiones y sistemas previsionales. Maximiza tus beneficios con nuestros expertos.",
}

export default function PensionesPage() {
  return (
    <main className="min-h-screen">
      <Header variant="light" />
      <PensionesHero />
      <PensionesInfo />
      <PensionesBenefits />
      <PensionesFAQ />
      <ContactSection />
      <Footer />
    </main>
  )
}
