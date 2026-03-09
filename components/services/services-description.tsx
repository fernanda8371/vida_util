import Link from "next/link"

export function ServicesDescription() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-8">
          Lorem Ipsum An
        </h2>
        
        <div className="space-y-6 text-[#1a2744]/70 leading-relaxed text-sm md:text-base">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          
          <p>
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
          
          <p>
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          
          <p className="italic">-fugiat nulla</p>
          
          <p>
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
          
          <p>
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem Ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
        <Link 
          href="#contacto"
          className="inline-block mt-10 bg-[#4ade80] hover:bg-[#22c55e] text-[#1a2744] px-8 py-3 rounded-full font-medium transition-colors"
        >
          Your More
        </Link>
      </div>
    </section>
  )
}
