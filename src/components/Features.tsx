import Image from 'next/image'
import Lightning from '../assets/lightning.svg'
import GasPump from '../assets/gas-pump.svg'
import Weight from '../assets/weigth.svg'
import Money from '../assets/money.svg'

export function Features() {
  return (
    <section className="justify flex min-h-[75vh] w-full flex-col items-center justify-start gap-6 px-8 py-2 font-quick text-gray-50 lg:gap-12 lg:py-16">
      <h3 className="font-quick text-5xl">Features</h3>
      <div className="grid h-full w-full grid-cols-4 gap-6 text-green-900">
        <div className="group relative col-span-4 mx-auto h-fit max-w-[320px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8 sm:col-span-2 min-[1360px]:col-span-1">
          <Image
            src={Lightning}
            alt=""
            className="absolute left-4 top-4 h-10 w-10"
          />
          <div className=" flex flex-col items-center gap-2">
            <h4 className="text-2xl">Potência</h4>
            <span className="text-3xl font-semibold">350W</span>
            <div className="max-h-0 overflow-hidden rounded-xl bg-gray-50 text-center text-lg text-gray-100 transition-all duration-1000 group-hover:inline group-hover:max-h-96 group-hover:p-4 group-hover:py-8 group-hover:text-green-900 group-hover:transition-all group-hover:duration-1000">
              O uso do motor elétrico do tipo BLDC, tem grandes vantagens em
              relação a outros motores. Sua eficiência energética ultrapassa os
              90% e raramente precisam de manutenção antes do fim de sua vida
              útil.
            </div>
          </div>
        </div>
        <div className="group relative col-span-4 mx-auto h-fit max-w-[320px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8 sm:col-span-2 min-[1360px]:col-span-1">
          <Image
            src={GasPump}
            alt=""
            className="absolute left-4 top-4 h-10 w-10"
          />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Autonomia</h4>
            <span className="text-3xl font-semibold">{'>'}50km</span>
            <div className="max-h-0 overflow-hidden rounded-xl bg-gray-50 text-center text-lg text-gray-100 transition-all duration-1000 group-hover:inline group-hover:max-h-96 group-hover:p-4 group-hover:py-8 group-hover:text-green-900 group-hover:transition-all group-hover:duration-1000">
              O E-CON BIKE conta com um pack de baterias de lítio de alta
              qualidade, que proporcionam uma recarga mais rápida e uma
              autonomia muito elevada. Conta também com um sistema regenerativo,
              onde a bateria é recarregada ao pedalar ou descer ladeiras.
            </div>
          </div>
        </div>
        <div className="group relative col-span-4 mx-auto h-fit max-w-[320px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8 sm:col-span-2 min-[1360px]:col-span-1">
          <Image
            src={Weight}
            alt=""
            className="absolute left-4 top-4 h-10 w-10"
          />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Peso</h4>
            <span className="text-3xl font-semibold">5kg</span>
            <div className="max-h-0 overflow-hidden rounded-xl bg-gray-50 text-center text-lg text-gray-100 transition-all duration-1000 group-hover:inline group-hover:max-h-96 group-hover:p-4 group-hover:py-8 group-hover:text-green-900 group-hover:transition-all group-hover:duration-1000">
              Devido ao uso de baterias de lítio, o kit possui um peso 4 vezes
              menor que o sistema de uma scooter elétrica disoponível no
              mercado. E ainda por cima, possui uma vida útil 3 vezes maior em
              comparação com outros tipos de bateria usados nestes veículos.
            </div>
          </div>
        </div>
        <div className="group relative col-span-4 mx-auto h-fit max-w-[320px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8 sm:col-span-2 min-[1360px]:col-span-1">
          <Image
            src={Money}
            alt=""
            className="absolute left-5 top-4 h-10 w-10"
          />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Custo</h4>
            <span className="text-3xl font-semibold">
              R$0,40
              <small className="text-md font-normal leading-tight">
                /recarga
              </small>
            </span>
            <div className="max-h-0 overflow-hidden rounded-xl bg-gray-50 text-center text-lg text-gray-100 transition-all duration-1000 group-hover:inline group-hover:max-h-96 group-hover:p-4 group-hover:py-8 group-hover:text-green-900 group-hover:transition-all group-hover:duration-1000">
              Se você utiliza de um carro popular para se locomover em média
              15km em um dia. Ao substituir seu veículo diário por uma bicicleta
              com o kit E-CON BIKE, você terá economizado ao final de 1 ano
              cerca de R$ 3000,00. E convenhamos, a sensação de liberdade é
              inigualável!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
