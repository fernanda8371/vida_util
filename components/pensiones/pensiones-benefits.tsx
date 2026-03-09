const benefits = [
  "Análisis personalizado de tu situación",
  "Maximización de beneficios",
  "Asesoría continua y seguimiento",
  "Representación ante instituciones",
  "Información clara y transparente",
  "Equipo de expertos certificados"
]

export function PensionesBenefits() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-6 sm:mb-8">
              ¿Por qué elegirnos?
            </h2>
            
            <ul className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#4ade80] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#1a2744]/80 text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
