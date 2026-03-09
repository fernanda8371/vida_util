"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { usePathname } from "next/navigation"

export function Header({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  
  // En páginas internas, el header siempre tiene fondo
  const [isScrolled, setIsScrolled] = useState(!isHome)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || !isHome)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  useEffect(() => {
    setIsMenuOpen(false)
    // Actualizar isScrolled cuando cambia la ruta
    setIsScrolled(!isHome)
  }, [pathname, isHome])

  const bgColor = isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
  const textColor = isScrolled ? "text-[#1a2744]" : variant === "dark" ? "text-white" : "text-[#1a2744]"
  const logoTextColor = isScrolled ? "text-[#1a2744]" : variant === "dark" ? "text-white" : "text-[#1a2744]"
  const subtitleColor = isScrolled ? "text-[#1a2744]/70" : variant === "dark" ? "text-white/70" : "text-[#1a2744]/70"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${bgColor}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Desktop: Logo completo */}
          <div className="hidden sm:block">
            <Logo size={50} variant="full" />
          </div>
          {/* Mobile: Solo ícono con texto */}
          <div className="sm:hidden flex items-center gap-2">
            <Logo size={32} variant="icon" />
            <span className={`font-semibold text-base ${logoTextColor} transition-colors`}>
              Vida Util
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/nosotros" className={`text-sm font-medium ${textColor} hover:text-[#4ade80] transition-colors`}>
            Nosotros
          </Link>
          <Link href="/servicios" className={`text-sm font-medium ${textColor} hover:text-[#4ade80] transition-colors`}>
            Servicios
          </Link>
          <Link href="/pensiones" className={`text-sm font-medium ${textColor} hover:text-[#4ade80] transition-colors`}>
            Pensiones
          </Link>
          <Link 
            href="/contacto" 
            className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-2 ${textColor} transition-colors`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="py-4 px-6">
          <div className="flex flex-col gap-1">
            <Link 
              href="/nosotros" 
              className="text-base font-medium text-[#1a2744] hover:text-[#4ade80] hover:bg-[#f5f5f5] transition-colors py-3 px-4 rounded-lg"
            >
              Nosotros
            </Link>
            <Link 
              href="/servicios" 
              className="text-base font-medium text-[#1a2744] hover:text-[#4ade80] hover:bg-[#f5f5f5] transition-colors py-3 px-4 rounded-lg"
            >
              Servicios
            </Link>
            <Link 
              href="/pensiones" 
              className="text-base font-medium text-[#1a2744] hover:text-[#4ade80] hover:bg-[#f5f5f5] transition-colors py-3 px-4 rounded-lg"
            >
              Pensiones
            </Link>
            <Link 
              href="/contacto" 
              className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-5 py-3 rounded-full text-base font-medium transition-colors text-center mt-2"
            >
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
