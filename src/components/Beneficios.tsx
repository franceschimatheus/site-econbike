import Image from 'next/image'
import Equalizer from '../assets/equalizer.svg'
import PlugBattery from '../assets/plug-battery.svg'
import CircleArrows from '../assets/circle-arrows.svg'
import WrenchClock from '../assets/wrench-clock.svg'

export function Beneficios() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 rounded-3xl bg-gray-50 p-16 px-32 font-quick text-green-900">
      <h3 className="text-5xl font-semibold">
        Muitos benefícios só para você!
      </h3>
      <div className="flex w-full flex-col items-center justify-center gap-32 text-2xl font-medium">
        <div className="flex gap-32">
          <div className="flex items-start justify-center">
            <Image src={Equalizer} alt="" className="h-20" />
            <div className="max-w-lg p-4">
              <h4 className="mb-4 text-4xl font-semibold">Universalidade</h4>
              <p>
                O kit pode ser montado em qualquer modelo de bicicleta e em
                diversas configurações.
              </p>
              <p>Quem escolhe o seu visual é você!</p>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <Image src={PlugBattery} alt="" className="h-20" />
            <div className="max-w-lg p-4">
              <h4 className="mb-4 text-4xl font-semibold">
                Recarga mais simples
              </h4>
              <p>
                A bateria do kit é removível, permitindo que você faça a recarga
                do seu kit em qualquer lugar que possua uma tomada 110V/220V
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-32">
          <div className="flex items-start justify-center">
            <Image src={CircleArrows} alt="" className="h-20" />
            <div className="max-w-lg p-4">
              <h4 className="mb-4 text-4xl font-semibold">Ressignificação</h4>
              <p>
                Ao invés de se obrigar a comprar uma scooter ou patinete
                elétrico que não são visualmente agradáveis, ao utilizar o{' '}
                <span className="whitespace-nowrap">E-CON BIKE</span> você está
                trazendo um novo significado a sua bicicleta.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <Image src={WrenchClock} alt="" className="h-20" />
            <div className="max-w-lg p-4">
              <h4 className="mb-4 text-4xl font-semibold">
                Facilidade de instalação
              </h4>
              <p>
                Você mesmo pode instalar seu kit em casa em menos de 2 horas ou
                contar com a instalação especializada de lojas e oficinas
                homologadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
