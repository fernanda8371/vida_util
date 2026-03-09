import Link from "next/link"

const items = [
  {
    id: "dictaminacion",
    title: "Dictaminación",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.",
    imagePosition: "right"
  },
  {
    id: "pensiones", 
    title: "Pensiones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.",
    imagePosition: "left"
  },
  {
    id: "contabilidad",
    title: "Contabilidad", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.",
    imagePosition: "right"
  }
]

export function ServicesAlternating() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-10 sm:mb-16 text-center">
          Nuestros servicios en detalle
        </h2>
        
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {items.map((item) => (
            <div 
              key={item.id}
              id={item.id}
              className={`flex flex-col ${
                item.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-6 sm:gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a2744] mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-[#1a2744]/70 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                  {item.description}
                </p>
                <Link 
                  href="/contacto"
                  className="inline-block bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Más información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
