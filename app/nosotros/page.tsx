import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NosotrosHero } from "@/components/nosotros/nosotros-hero"
import { NosotrosContent } from "@/components/nosotros/nosotros-content"
import { NosotrosTeam } from "@/components/nosotros/nosotros-team"
import { ContactSection } from "@/components/home/contact-section"

export const metadata: Metadata = {
  title: "Nosotros - Vida Util",
  description: "Conoce más sobre Vida Util, consultores y asesores patrimoniales con años de experiencia.",
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen">
      <Header variant="light" />
      <NosotrosHero />
      <NosotrosContent />
      {/* <NosotrosTeam /> */}
      <ContactSection />
      <Footer />
    </main>
  )
}
