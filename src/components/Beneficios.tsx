import Image from 'next/image'
import Equalizer from '../assets/equalizer.svg'

export function Beneficios() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 rounded-3xl bg-gray-50 p-16 px-32 font-quick text-green-900">
      <h3 className="text-5xl font-semibold">
        Muitos benefícios só para você!
      </h3>
      <ul className="grid w-full grid-cols-2 items-center justify-center gap-32 text-lg">
        <li className="flex items-start justify-center">
          <Image src={Equalizer} alt="" className="h-20" />
          <div className="max-w-md p-4">
            <h4 className="mb-4 text-3xl font-semibold">Universalidade</h4>
            <p>
              O kit pode ser montado em qualquer modelo de bicicleta e em
              diversas configurações.
            </p>
            <p>Quem escolhe o seu visual é você!</p>
          </div>
        </li>
        <li className="flex items-start justify-center">
          <Image src={Equalizer} alt="" className="h-20" />
          <div className="max-w-md p-4">
            <h4 className="mb-4 text-3xl font-semibold">Universalidade</h4>
            <p>
              O kit pode ser montado em qualquer modelo de bicicleta e em
              diversas configurações.
            </p>
            <p>Quem escolhe o seu visual é você!</p>
          </div>
        </li>
        <li className="flex items-start justify-center">
          <Image src={Equalizer} alt="" className="h-20" />
          <div className="max-w-md p-4">
            <h4 className="mb-4 text-3xl font-semibold">Universalidade</h4>
            <p>
              O kit pode ser montado em qualquer modelo de bicicleta e em
              diversas configurações.
            </p>
            <p>Quem escolhe o seu visual é você!</p>
          </div>
        </li>
        <li className="flex items-start justify-center">
          <Image src={Equalizer} alt="" className="h-20" />
          <div className="max-w-md p-4">
            <h4 className="mb-4 text-3xl font-semibold">Universalidade</h4>
            <p>
              O kit pode ser montado em qualquer modelo de bicicleta e em
              diversas configurações.
            </p>
            <p>Quem escolhe o seu visual é você!</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
