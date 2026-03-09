import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="bg-[#1a2744] pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Servicios
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Lorem Ipsum is simply do
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#servicios"
              className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-6 py-3 rounded-full font-medium transition-colors"
            >
              Yours More
            </Link>
            <Link 
              href="#contacto"
              className="bg-transparent hover:bg-white/10 text-[#4ade80] border border-[#4ade80] px-6 py-3 rounded-full font-medium transition-colors"
            >
              There Many
            </Link>
          </div>
        </div>
        
        {/* Decorative Circle */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-300/30 flex items-center justify-center">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gray-400/40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
