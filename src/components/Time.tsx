import { FaCode, FaBriefcase } from "react-icons/fa6";

import Image from "next/image";

import Matheus from "../assets/matheus.png";

export function Time() {
  return (
    <section
      id="team"
      className="flex w-full flex-col items-center justify-center gap-6 px-4 py-2 font-quick text-gray-50 lg:gap-12 lg:py-16"
    >
      <h3 className="text-3xl sm:text-4xl lg:text-5xl">O Time</h3>
      <div className="flex w-full flex-col items-center justify-evenly gap-8 md:flex-row">
        <div className="flex w-72 flex-col items-center justify-center gap-8 rounded-3xl bg-white p-4 text-green-900 sm:w-96 sm:p-8 md:px-4 lg:p-8">
          <Image
            src={Matheus}
            alt=""
            className="h-60 w-60 rounded-full drop-shadow-xl sm:h-72 sm:w-72 md:h-64 md:w-64 xl:h-80 xl:w-80"
          />

          <h4 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-2xl lg:text-3xl">
            <FaCode size={24} /> Matheus Franceschi
          </h4>
          <p className="text-center">
            Formado engenheiro de controle e automação, com experiência em
            eletrônica e programação
          </p>
        </div>
        <div className="flex w-72 flex-col items-center justify-center gap-8 rounded-3xl bg-white p-4 text-green-900 sm:w-96 sm:p-8 md:px-4 lg:p-8">
          <Image
            src={Matheus}
            alt=""
            className="h-60 w-60 rounded-full drop-shadow-xl sm:h-72 sm:w-72 md:h-64 md:w-64 xl:h-80 xl:w-80"
          />

          <h4 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-2xl lg:text-3xl">
            <FaBriefcase size={24} /> Oscar harbs
          </h4>
          <p className="text-center">
            Formado engenheiro de controle e automação, com experiência em
            eletrônica e programação
          </p>
        </div>
      </div>
    </section>
  );
}
