"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-3 sm:mb-4">
          Contacto
        </h2>
        
        <p className="text-[#1a2744]/70 mb-6 sm:mb-8 text-sm sm:text-base">
          Contáctanos y un asesor se pondrá en contacto contigo a la brevedad.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto sm:mx-auto"
          >
            <Mail size={18} />
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}
