import Image from "next/image";
import Equalizer from "../assets/equalizer.svg";
import PlugBattery from "../assets/plug-battery.svg";
import CircleArrows from "../assets/circle-arrows.svg";
import WrenchClock from "../assets/wrench-clock.svg";

export function Beneficios() {
  return (
    <section
      id="beneficios"
      className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-gray-50 px-4 py-2 font-quick text-green-900 lg:gap-12 lg:py-16"
    >
      <h3 className="mt-2 text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
        Muitos benefícios só para você!
      </h3>
      <div className="text-md mb-2 grid w-full grid-cols-1 flex-col items-start gap-8 font-medium sm:text-lg lg:grid-cols-2 lg:gap-32 lg:px-16  lg:text-xl">
        <div className="col-span-1 flex items-start justify-center">
          <Image
            src={Equalizer}
            alt=""
            className="lg:text-16 h-12 sm:h-16 xl:h-20"
          />
          <div className="max-w-lg p-4">
            <h4 className="mb-4 text-2xl font-semibold sm:text-3xl">
              Universalidade
            </h4>
            <p>
              O kit pode ser montado em qualquer modelo de bicicleta e em
              diversas configurações.
            </p>
            <p>Quem escolhe o seu visual é você!</p>
          </div>
        </div>
        <div className="col-span-1 flex items-start justify-center">
          <Image
            src={PlugBattery}
            alt=""
            className="lg:text-16 h-12 sm:h-16 xl:h-20"
          />
          <div className="max-w-lg p-4">
            <h4 className="mb-4 text-2xl font-semibold sm:text-3xl">
              Recarga mais simples
            </h4>
            <p>
              A bateria do kit é removível, permitindo que você faça a recarga
              do seu kit em qualquer lugar que possua uma tomada 110V/220V
            </p>
          </div>
        </div>

        <div className="col-span-1 flex items-start justify-center">
          <Image
            src={CircleArrows}
            alt=""
            className="lg:text-16 mx-2 h-12 sm:h-16 xl:h-20"
          />
          <div className="max-w-lg p-4">
            <h4 className="mb-4 text-2xl font-semibold sm:text-3xl">
              Ressignificação
            </h4>
            <p>
              Ao invés de se obrigar a comprar uma scooter ou patinete elétrico
              que não são visualmente agradáveis, ao utilizar o{" "}
              <span className="whitespace-nowrap">E-CON BIKE</span> você está
              trazendo um novo significado a sua bicicleta.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex items-start justify-center">
          <Image
            src={WrenchClock}
            alt=""
            className="lg:text-16 h-12 sm:h-16 xl:h-20"
          />
          <div className="max-w-lg p-4">
            <h4 className="mb-4 text-2xl font-semibold sm:text-3xl">
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
    </section>
  );
}
