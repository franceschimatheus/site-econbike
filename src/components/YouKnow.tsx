import Image from 'next/image'
import Blob from '../assets/blob.svg'

export function YouKnow() {
  return (
    <section className="flex items-center justify-center ">
      <div className="relative flex w-1/2 justify-center font-quick font-semibold text-green-900">
        <Image src={Blob} alt="" />
        <div className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8 text-center text-2xl leading-tight">
          <h3 className="text-5xl">VOCÊ SABIA QUE...</h3>
          <p>
            Ao optar por um kit E-CON BIKE, você poderá converter a sua
            bibicleta convencional em uma elétrica!
          </p>
          <p>
            Com isso você terá um meio de transporte muito mais inteligente e
            sustentável
          </p>
        </div>
      </div>
      <div className="relative flex w-1/2 justify-center font-quick font-semibold text-green-900">
        <Image src={Blob} alt="" />
        <div className="absolute left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8 text-center text-2xl leading-tight">
          <h3 className="text-5xl">UMA IMAGEM</h3>
        </div>
      </div>
    </section>
  )
}
