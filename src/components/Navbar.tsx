"use client";
import Image from "next/image";
import bikeLogo from "../assets/bike-logo.svg";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-40 flex w-screen items-center justify-between border-b border-green-400/20 bg-green-900 px-4 py-2 font-quick shadow-xl shadow-green-400/10 max-sm:justify-center lg:px-20">
      <div className="group flex cursor-pointer items-center gap-4">
        <Image src={bikeLogo} className="h-16 max-sm:h-10" alt="" />
        <span className=" bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-4xl text-transparent group-hover:from-green-300 group-hover:to-blue-400">
          E-CON BIKE
        </span>
      </div>
      <div className="flex items-center gap-6 text-lg max-xl:hidden">
        <a href="#beneficios" className="hover:text-white">
          Benefícios
        </a>
        <a href="#features" className="hover:text-white">
          Características
        </a>
        <a href="#components" className="hover:text-white">
          Componentes
        </a>
        <a href="#faq" className="hover:text-white">
          FAQ
        </a>
        <a href="#team" className="hover:text-white">
          O time
        </a>
        <a href="#contact" className="hover:text-white">
          Contato
        </a>
        <button className="group ml-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-0.5 hover:from-green-300 hover:to-blue-400">
          <div className="rounded-md bg-green-900 px-4 py-1">
            <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-xl font-semibold text-transparent group-hover:from-green-300 group-hover:to-blue-400">
              Comprar
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
