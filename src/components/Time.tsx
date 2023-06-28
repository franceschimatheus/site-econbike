import Image from 'next/image'

import Matheus from '../assets/matheus.png'

export function Time() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 p-16 px-32 font-quick text-gray-50">
      <h3 className="text-5xl">O Time</h3>
      <div className="flex w-full items-center justify-around">
        <div className="flex w-96 flex-col items-center justify-center gap-8">
          <Image
            src={Matheus}
            alt=""
            className="h-96 w-96 rounded-full drop-shadow-xl"
          />
          <h4 className="text-3xl">Matheus Franceschi</h4>
          <p className="text-center">
            Formado engenheiro de controle e automação, com experiência em
            eletrônica e programação
          </p>
        </div>
        <Image src={Matheus} alt="" className="h-96 w-96 rounded-full" />
      </div>
    </section>
  )
}
