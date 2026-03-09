export function PensionesInfo() {
  return (
    <section id="info" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-6 sm:mb-8">
          Servicios de Pensiones
        </h2>
        
        <p className="text-[#1a2744]/80 leading-relaxed text-sm sm:text-base mb-8 sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#f5f5f5] p-6 sm:p-8 rounded-2xl text-left">
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-3">Asesoría Previsional</h3>
            <p className="text-[#1a2744]/70 text-sm leading-relaxed">
              Te ayudamos a entender tus opciones de pensión y a tomar la mejor decisión para tu futuro.
            </p>
          </div>

          <div className="bg-[#f5f5f5] p-6 sm:p-8 rounded-2xl text-left">
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-3">Cálculo de Pensión</h3>
            <p className="text-[#1a2744]/70 text-sm leading-relaxed">
              Calculamos y optimizamos tu pensión para que recibas el máximo beneficio posible.
            </p>
          </div>

          <div className="bg-[#f5f5f5] p-6 sm:p-8 rounded-2xl text-left">
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-3">Trámites y Gestiones</h3>
            <p className="text-[#1a2744]/70 text-sm leading-relaxed">
              Gestionamos todos los trámites necesarios ante las instituciones correspondientes.
            </p>
          </div>

          <div className="bg-[#f5f5f5] p-6 sm:p-8 rounded-2xl text-left">
            <div className="w-12 h-12 bg-[#4ade80] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1a2744]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-3">Asesoría Familiar</h3>
            <p className="text-[#1a2744]/70 text-sm leading-relaxed">
              Orientación para beneficiarios y familiares sobre derechos y beneficios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
