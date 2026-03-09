import Image from "next/image"

export function Logo({ size = 40, variant = "icon" }: { size?: number, variant?: "icon" | "full" }) {
  if (variant === "full") {
    return (
      <Image 
        src="/long_logo.png" 
        alt="Vida Util - Consultores y Asesores Patrimoniales"
        width={size * 3.38} // proporción 345/102
        height={size}
        priority
        className="object-contain"
      />
    )
  }
  
  return (
    <Image 
      src="/vidautillogo.png" 
      alt="Vida Util"
      width={size}
      height={size}
      priority
      className="object-contain"
    />
  )
}
