import './scroll.css'

interface ScrollProps {
  height: string
}

export function Scroll({ height }: ScrollProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 40 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="scroll">
        <g id="Vector">
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
            fill="url(#paint0_linear_116_386)"
          />
          <path
            d="M40 50C40 61.0457 31.0457 70 20 70C8.9543 70 0 61.0457 0 50C0 38.9543 8.9543 30 20 30C31.0457 30 40 38.9543 40 50Z"
            fill="url(#paint1_linear_116_386)"
          />
          <path d="M0 20H40V50H0V20Z" fill="url(#paint2_linear_116_386)" />
        </g>
        <g id="Vector_2">
          <path
            d="M37 20C37 29.3888 29.3888 37 20 37C10.6112 37 3 29.3888 3 20C3 10.6112 10.6112 3 20 3C29.3888 3 37 10.6112 37 20Z"
            fill="#08343E"
          />
          <path
            d="M37 50C37 59.3888 29.3888 67 20 67C10.6112 67 3 59.3888 3 50C3 40.6112 10.6112 33 20 33C29.3888 33 37 40.6112 37 50Z"
            fill="#08343E"
          />
          <path d="M3 18H37V52H3V18Z" fill="#08343E" />
        </g>
        <circle
          id="circle"
          cx="20"
          cy="16"
          r="4"
          fill="url(#paint3_linear_116_386)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_116_386"
          x1="20"
          y1="0"
          x2="20"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFB2" />
          <stop offset="1" stopColor="#00A1FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_116_386"
          x1="20"
          y1="0"
          x2="20"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFB2" />
          <stop offset="1" stopColor="#00A1FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_116_386"
          x1="20"
          y1="0"
          x2="20"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFB2" />
          <stop offset="1" stopColor="#00A1FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_116_386"
          x1="20"
          y1="12"
          x2="20"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFB2" />
          <stop offset="1" stopColor="#00A1FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
