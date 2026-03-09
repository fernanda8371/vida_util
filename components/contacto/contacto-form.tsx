"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage("")

    try {
      // Construir el mensaje completo
      const fullMessage = `
DATOS DE CONTACTO:
-------------------
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || 'No proporcionado'}
Servicio de interés: ${formData.service || 'No especificado'}

MENSAJE:
-------------------
${formData.message}
      `.trim()

      // Enviar directamente a Web3Forms desde el cliente
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '849f4881-f63c-466f-9835-44486a5d8ed3',
          name: formData.name,
          email: formData.email,
          message: fullMessage,
          subject: `Nuevo mensaje de contacto - ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email
        })
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        // Limpiar formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
        // Reset estado después de 5 segundos
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.')
      console.error('Error:', error)
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2744] mb-6 sm:mb-8 text-center">
          Envíanos un mensaje
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1a2744] mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1a2744] mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#1a2744] mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base"
                placeholder="Tu teléfono"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-[#1a2744] mb-2">
                Servicio de interés
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] text-sm sm:text-base bg-white"
              >
                <option value="">Selecciona un servicio</option>
                <option value="dictaminacion">Dictaminación</option>
                <option value="pensiones">Pensiones</option>
                <option value="contabilidad">Contabilidad</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#1a2744] mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#4ade80] focus:ring-1 focus:ring-[#4ade80] text-[#1a2744] resize-none text-sm sm:text-base"
              placeholder="¿En qué podemos ayudarte?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#1a2744]"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} />
                Enviar mensaje
              </>
            )}
          </button>

          {/* Mensaje de éxito */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl justify-center">
              <CheckCircle2 size={20} />
              <span className="text-sm font-medium">¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</span>
            </div>
          )}

          {/* Mensaje de error */}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl justify-center">
              <AlertCircle size={20} />
              <span className="text-sm font-medium">{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
