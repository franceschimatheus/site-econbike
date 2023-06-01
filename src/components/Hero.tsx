import { Biker } from './Biker/Biker'
import { Scroll } from './Scroll/Scroll'

export function Hero() {
  return (
    <div className="flex">
      <div className="flex w-2/5 flex-col items-start justify-center gap-10 font-quick">
        <div className="text-8xl">
          <h2>Va mais longe, pedale com</h2>
          <h1 className="mt-4 w-fit bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            E-CON BIKE
          </h1>
        </div>
        <p className="max-w-2xl font-quick text-2xl">
          A escolha inteligente para aqueles que optam por mais liberdade e
          sustentabilidade
        </p>
        <button className="mx-auto mt-8 h-16 w-1/2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 font-sans text-2xl font-bold text-green-900 transition-colors duration-1000 hover:from-green-300 hover:to-blue-400">
          COMPRE AGORA
        </button>
        <div className="mx-auto flex flex-col gap-4">
          <span className="text-lg">Saiba mais</span>
          <Scroll height="50px" />
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-center">
        <Biker height="70vh" />
      </div>
    </div>
  )
}
