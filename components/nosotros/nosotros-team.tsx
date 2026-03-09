const team = [
  {
    name: "María García",
    role: "Directora General",
    description: "Experta en consultoría patrimonial con más de 20 años de experiencia."
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Pensiones",
    description: "Especialista en sistemas de pensiones y asesoría previsional."
  },
  {
    name: "Ana Martínez",
    role: "Contadora Principal",
    description: "Contadora certificada con amplia experiencia en dictaminación."
  }
]

export function NosotrosTeam() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-10 sm:mb-16 text-center">
          Nuestro Equipo
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-200 mx-auto mb-4 sm:mb-6"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a2744] mb-1">
                {member.name}
              </h3>
              <p className="text-[#4ade80] font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-[#1a2744]/70 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
