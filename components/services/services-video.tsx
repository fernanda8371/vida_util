"use client"

import { useState } from "react"
import { Play, Plus } from "lucide-react"

export function ServicesVideo() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="py-20 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-12 text-center">
          Lorem Ipsum Dolor Sit An
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#1a2744] mb-4">
              Lorem Ipsum Dolor Sit An
            </h3>
            <p className="text-[#1a2744]/70 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore dolore magna. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
              mod tempor incididunt ut labore dolore magna.
            </p>
            
            <button className="flex items-center gap-2 text-[#4ade80] hover:text-[#22c55e] font-medium transition-colors">
              <span className="w-8 h-8 bg-[#4ade80] rounded-full flex items-center justify-center">
                <Plus size={16} className="text-[#1a2744]" />
              </span>
              Roboto Con
            </button>
          </div>
          
          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gray-300 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-16 h-16 bg-[#4ade80] hover:bg-[#22c55e] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Play video"
                >
                  <Play size={24} className="text-[#1a2744] ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeSlide === index ? "bg-[#1a2744]" : "bg-[#1a2744]/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
