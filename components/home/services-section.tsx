import Link from "next/link"

const services = [
  {
    title: "Dictaminación",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel arcu eget nulla facilisis lobortis. Nunc eu erat sed nunc lobortis eleifend.",
    href: "/servicios#dictaminacion"
  },
  {
    title: "Pensiones",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel arcu eget nulla facilisis lobortis. Nunc eu erat sed nunc lobortis eleifend.",
    href: "/pensiones"
  },
  {
    title: "Contabilidad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel arcu eget nulla facilisis lobortis. Nunc eu erat sed nunc lobortis eleifend.",
    href: "/servicios#contabilidad"
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#1a2744] mb-10 sm:mb-16">
          Servicios
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center sm:text-left p-4 sm:p-6 bg-[#f5f5f5] rounded-2xl">
              <p className="text-[#1a2744]/80 leading-relaxed mb-4 text-sm sm:text-base">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="text-[#4ade80] hover:text-[#22c55e] font-medium transition-colors inline-flex items-center gap-1 text-sm sm:text-base"
              >
                {service.title}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
