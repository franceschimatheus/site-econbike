"use client";
import { useEffect, useState } from "react";
import { Biker } from "./Biker/Biker";
import { Scroll } from "./Scroll/Scroll";

export function Hero() {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-start justify-center gap-10 font-quick md:w-2/5">
        <div className="text-5xl md:text-6xl xl:text-[5rem]">
          <h2>Vá mais longe, pedale com</h2>
          <h1 className="mt-4 w-fit bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            E-CON BIKE
          </h1>
        </div>
        {width <= 768 && (
          <div className="flex h-fit w-full items-center justify-center overflow-hidden md:w-3/5">
            <Biker height="30vh" />
          </div>
        )}
        <p className="max-w-2xl font-quick text-lg lg:text-xl xl:text-2xl">
          A escolha inteligente para aqueles que optam por mais liberdade e
          sustentabilidade
        </p>
        <button className="mx-auto mt-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-5 py-3 font-sans text-lg font-bold text-green-900 transition-colors duration-1000 hover:from-green-300 hover:to-blue-400 lg:mt-6 lg:text-xl xl:mt-8 xl:text-2xl">
          COMPRE AGORA
        </button>
        <div className="mx-auto flex flex-col gap-4">
          <span className="text-xl">Saiba mais</span>
          <Scroll height="50px" />
        </div>
      </div>
      <div className="flex h-0 items-center justify-center overflow-hidden md:h-[70vh] md:w-3/5">
        {width > 768 && <Biker height="70vh" />}
      </div>
    </div>
  );
}
