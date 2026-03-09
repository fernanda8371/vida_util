import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-24 sm:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 text-balance">
          Vida Util
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Consultores y Asesores Patrimoniales
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link 
            href="/servicios"
            className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-6 sm:px-8 py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
          >
            Ver Servicios
          </Link>
          <Link 
            href="/contacto"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 sm:px-8 py-3 rounded-full font-medium transition-colors backdrop-blur-sm text-sm sm:text-base"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Decorative element at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 hidden sm:block">
        <div className="w-12 h-12 bg-[#f5f5f5] rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 60 60" fill="none">
            <g transform="translate(15, 15)">
              <circle cx="15" cy="8" r="5" fill="#4ade80" />
              <circle cx="8" cy="15" r="5" fill="#4ade80" />
              <circle cx="22" cy="15" r="5" fill="#4ade80" />
              <circle cx="10" cy="24" r="5" fill="#4ade80" />
              <circle cx="20" cy="24" r="5" fill="#4ade80" />
              <circle cx="15" cy="16" r="4" fill="#1a2744" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
