import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactoHero } from "@/components/contacto/contacto-hero"
import { ContactoForm } from "@/components/contacto/contacto-form"
import { ContactoInfo } from "@/components/contacto/contacto-info"

export const metadata: Metadata = {
  title: "Contacto - Vida Util",
  description: "Contáctanos para recibir asesoría personalizada en pensiones, dictaminación y contabilidad.",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header variant="light" />
      <ContactoHero />
      <ContactoForm />
      <ContactoInfo />
      <Footer />
    </main>
  )
}
