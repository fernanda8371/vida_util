import Link from "next/link"

export function PensionesHero() {
  return (
    <section className="bg-[#1a2744] pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Pensiones
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            Asesoría especializada para maximizar tus beneficios de pensión y asegurar tu futuro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="#info"
              className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-6 py-3 rounded-full font-medium transition-colors text-center"
            >
              Conocer más
            </Link>
            <Link 
              href="/contacto"
              className="bg-transparent hover:bg-white/10 text-[#4ade80] border border-[#4ade80] px-6 py-3 rounded-full font-medium transition-colors text-center"
            >
              Solicitar asesoría
            </Link>
          </div>
        </div>
        
        {/* Decorative Circle */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-gray-300/30 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full bg-gray-400/40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
