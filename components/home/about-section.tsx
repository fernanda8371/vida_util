import Link from "next/link"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2744] mb-6 sm:mb-8">
          Nosotros
        </h2>
        
        <div className="space-y-4 sm:space-y-6 text-[#1a2744]/80 leading-relaxed text-sm sm:text-base">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
            standard dummy text.
          </p>
          
          <p>
            Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          
          <p>
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          
          <p>
            Has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to.
          </p>
        </div>
        
        <Link 
          href="/nosotros"
          className="inline-block mt-6 sm:mt-8 bg-[#1a2744] hover:bg-[#2a3754] text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
        >
          Conocer más
        </Link>
      </div>
    </section>
  )
}
