import Image from 'next/image'

import bikeLogo from '../assets/bike-logo.svg'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="group flex cursor-pointer items-center gap-4">
        <Image src={bikeLogo} alt="" />
        <span className=" bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-light text-transparent group-hover:from-green-300 group-hover:to-blue-400">
          E-CON BIKE
        </span>
      </div>
      <div>
        <a href="bsection">My first section</a>
      </div>
    </nav>
  )
}
