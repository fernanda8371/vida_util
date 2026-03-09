export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="28" stroke="#4ade80" strokeWidth="2" fill="none" />
      <g transform="translate(15, 15)">
        {/* Flower pattern */}
        <circle cx="15" cy="8" r="6" fill="#4ade80" />
        <circle cx="8" cy="15" r="6" fill="#4ade80" />
        <circle cx="22" cy="15" r="6" fill="#4ade80" />
        <circle cx="10" cy="24" r="6" fill="#4ade80" />
        <circle cx="20" cy="24" r="6" fill="#4ade80" />
        <circle cx="15" cy="16" r="5" fill="#1a2744" />
      </g>
    </svg>
  )
}
