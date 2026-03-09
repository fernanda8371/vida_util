export function NosotrosContent() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-6 sm:mb-8 text-center">
          Nuestra Historia
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-[#1a2744]/80 leading-relaxed text-sm sm:text-base">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          
          <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 bg-[#f5f5f5] rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#4ade80] mb-2">15+</div>
            <p className="text-[#1a2744]/70 text-sm">Años de experiencia</p>
          </div>
          <div className="text-center p-6 bg-[#f5f5f5] rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#4ade80] mb-2">500+</div>
            <p className="text-[#1a2744]/70 text-sm">Clientes satisfechos</p>
          </div>
          <div className="text-center p-6 bg-[#f5f5f5] rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#4ade80] mb-2">100%</div>
            <p className="text-[#1a2744]/70 text-sm">Compromiso</p>
          </div>
        </div>
      </div>
    </section>
  )
}
