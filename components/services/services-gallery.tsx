import Link from "next/link"

const galleryItems = [
  {
    tag: "DICTAMINACIÓN",
    title: "Servicios de Dictaminación",
    subtitle: "Para empresas",
    href: "/servicios#dictaminacion"
  },
  {
    tag: "PENSIONES",
    title: "Asesoría en Pensiones",
    subtitle: "Para particulares",
    href: "/pensiones"
  },
  {
    tag: "CONTABILIDAD",
    title: "Servicios Contables",
    subtitle: "Para negocios",
    href: "/servicios#contabilidad"
  },
  {
    tag: "ASESORÍA",
    title: "Consultoría Patrimonial",
    subtitle: "Personalizada",
    href: "/contacto"
  }
]

export function ServicesGallery() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744]">
            Explora nuestros servicios
          </h2>
          <Link 
            href="/contacto"
            className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Contactar ahora
          </Link>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              className="group block"
            >
              <div className="relative aspect-[3/4] bg-gray-300 rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                
                {/* Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-[#4ade80] text-[#1a2744] px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-[#1a2744] mb-1 group-hover:text-[#4ade80] transition-colors text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1a2744]/60">
                {item.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#4ade80] mt-1 flex items-center gap-1">
                Ver más 
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
