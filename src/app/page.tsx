import { Beneficios } from '@/components/Beneficios'
import { Components } from '@/components/Components'
import { Contatos } from '@/components/Contatos'
import { FAQ } from '@/components/FAQ'
import { Features } from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Time } from '@/components/Time'
import { YouKnow } from '@/components/YouKnow'

export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-20 py-10">
      <Navbar />
      <Hero />
      <YouKnow />
      <Beneficios />
      <Features />
      <Components />
      <FAQ />
      <Time />
      <Contatos />
      <div
        id="bsection"
        className="font-alt flex h-[1000px] items-center justify-center text-6xl font-light"
      >
        Hello
      </div>
    </div>
  )
}
