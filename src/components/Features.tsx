import Image from 'next/image'
import Lightning from '../assets/lightning.svg'
import GasPump from '../assets/gas-pump.svg'
import Weight from '../assets/weigth.svg'
import Money from '../assets/money.svg'

export function Features() {
  return (
    <section className="justify flex min-h-[70vh] flex-col items-center gap-12 bg-center p-16 px-32 text-gray-50">
      <h3 className="font-quick text-5xl">Features</h3>
      <div className="flex h-full w-full gap-12 text-green-900">
        <div className="group relative h-fit flex-1 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8">
          <Image src={Lightning} alt="" className="absolute left-4 top-4" />
          <div className=" flex flex-col items-center gap-2">
            <h4 className="text-2xl">Potência</h4>
            <span className="text-3xl font-semibold group-hover:hidden">
              350W
            </span>
            <div className="mt-6 hidden h-0 rounded-xl bg-gray-50 p-4 py-8 text-center text-lg group-hover:inline group-hover:h-full">
              O uso do motor elétrico do tipo BLDC, tem grandes vantagens em
              relação a outros motores. Sua eficiência energética ultrapassa os
              90% e raramente precisam de manutenção antes do fim de sua vida
              útil.
            </div>
          </div>
        </div>
        <div className="group relative h-fit flex-1 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8">
          <Image src={GasPump} alt="" className="absolute left-4 top-4" />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Autonomia</h4>
            <span className="text-3xl font-semibold group-hover:hidden">
              {'>'}50km
            </span>
            <div className="mt-6 hidden h-0 rounded-xl bg-gray-50 p-4 py-8 text-center text-lg group-hover:inline group-hover:h-full">
              O E-CON BIKE conta com um pack de baterias de lítio de alta
              qualidade, que proporcionam uma recarga mais rápida e uma
              autonomia muito elevada. Conta também com um sistema regenerativo,
              onde a bateria é recarregada ao pedalar ou descer ladeiras.
            </div>
          </div>
        </div>
        <div className="group relative h-fit flex-1 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8">
          <Image src={Weight} alt="" className="absolute left-4 top-4" />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Peso</h4>
            <span className="text-3xl font-semibold group-hover:hidden">
              5kg
            </span>
            <div className="mt-6 hidden h-0 rounded-xl bg-gray-50 p-4 py-8 text-center text-lg group-hover:inline group-hover:h-full">
              Devido ao uso de baterias de lítio, o kit possui um peso 4 vezes
              menor que o sistema de uma scooter elétrica disoponível no
              mercado. E ainda por cima, possui uma vida útil 3 vezes maior em
              comparação com outros tipos de bateria usados nestes veículos.
            </div>
          </div>
        </div>
        <div className="group relative h-fit flex-1 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8">
          <Image src={Money} alt="" className="absolute left-5 top-4" />
          <div className="flex flex-col items-center gap-2">
            <h4 className="text-2xl">Custo</h4>
            <span className="text-3xl font-semibold group-hover:hidden">
              R$0,40
              <small className="text-md font-normal leading-tight">
                /recarga
              </small>
            </span>
            <div className="mt-6 hidden h-0 rounded-xl bg-gray-50 p-4 py-8 text-center text-lg group-hover:inline group-hover:h-full">
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
