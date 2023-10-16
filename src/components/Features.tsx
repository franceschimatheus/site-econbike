import Lightning from '../assets/lightning.svg'
import GasPump from '../assets/gas-pump.svg'
import Weight from '../assets/weigth.svg'
import Money from '../assets/money.svg'
import FeatureItem from './FeatureItem'

export function Features() {
  return (
    <section className="justify flex min-h-[75vh] w-full flex-col items-center justify-start gap-6 px-8 py-2 font-quick text-gray-50 lg:gap-12 lg:py-16">
      <h3 className="font-quick text-5xl">Features</h3>
      <div className="grid h-full w-full grid-cols-4 gap-6 text-green-900">
        <FeatureItem
          icon={Lightning}
          title="Potência"
          span="350W"
          small=""
          text="O uso do motor elétrico do tipo BLDC, tem grandes vantagens em
              relação a outros motores. Sua eficiência energética ultrapassa os
              90% e raramente precisam de manutenção antes do fim de sua vida
              útil."
        />

        <FeatureItem
          icon={GasPump}
          title="Autonomia"
          span=">50km"
          small=""
          text="O E-CON BIKE conta com um pack de baterias de lítio de alta
          qualidade, que proporcionam uma recarga mais rápida e uma
          autonomia muito elevada. Conta também com um sistema regenerativo,
          onde a bateria é recarregada ao pedalar ou descer ladeiras."
        />

        <FeatureItem
          icon={Weight}
          title="Peso"
          span="5kg"
          small=""
          text="Devido ao uso de baterias de lítio, o kit possui um peso 4 vezes
          menor que o sistema de uma scooter elétrica disoponível no
          mercado. E ainda por cima, possui uma vida útil 3 vezes maior em
          comparação com outros tipos de bateria usados nestes veículos."
        />

        <FeatureItem
          icon={Money}
          title="Custo"
          span="R$0,40"
          small="/recarga"
          text="Se você utiliza de um carro popular para se locomover em média
          15km em um dia. Ao substituir seu veículo diário por uma bicicleta
          com o kit E-CON BIKE, você terá economizado ao final de 1 ano
          cerca de R$ 3000,00. E convenhamos, a sensação de liberdade é
          inigualável!"
        />
      </div>
    </section>
  )
}
