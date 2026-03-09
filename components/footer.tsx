import Link from "next/link"
import { Logo } from "./logo"
import { Phone, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo size={40} />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Consultores y Asesores Patrimoniales con más de 15 años de experiencia 
              brindando servicios de calidad.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm sm:text-base">VIDA UTIL</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-[#4ade80] hover:text-[#22c55e] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-[#4ade80] hover:text-[#22c55e] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-white/70 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/pensiones" className="text-sm text-[#4ade80] hover:text-[#22c55e] transition-colors">
                  Pensiones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm sm:text-base">SERVICIOS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#dictaminacion" className="text-sm text-white/70 hover:text-white transition-colors">
                  Dictaminación
                </Link>
              </li>
              <li>
                <Link href="/servicios#pensiones" className="text-sm text-white/70 hover:text-white transition-colors">
                  Pensiones
                </Link>
              </li>
              <li>
                <Link href="/servicios#contabilidad" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contabilidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm sm:text-base">CONTACTO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#4ade80] flex-shrink-0" />
                <span className="text-sm text-white/70">123-456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#4ade80] flex-shrink-0" />
                <span className="text-sm text-white/70">info@vidautil.com</span>
              </li>
            </ul>

            <h4 className="font-semibold mt-6 mb-4 text-white text-sm sm:text-base">SOCIAL</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-8 h-8 bg-[#4ade80] rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} className="text-[#1a2744]" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-[#4ade80] rounded-full flex items-center justify-center hover:bg-[#22c55e] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#1a2744]">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-center text-xs text-white/50">
            © 2024 Vida Util - Consultores y Asesores Patrimoniales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
