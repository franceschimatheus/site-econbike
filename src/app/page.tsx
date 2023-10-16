import { Beneficios } from "@/components/Beneficios";
import { Components } from "@/components/Components";
import { Contatos } from "@/components/Contatos";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Time } from "@/components/Time";
import { YouKnow } from "@/components/YouKnow";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 px-4 py-2 md:gap-20 lg:px-20 lg:py-10">
      <Navbar />
      <Hero />
      <YouKnow />
      <Beneficios />
      <Features />
      <Components />
      <FAQ />
      <Time />
      <Contatos />
      <div className="h-[1000px]"></div>
    </div>
  );
}
