import {
  FaAt,
  FaLocationDot,
  FaMap,
  FaVoicemail,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

export function Contatos() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-6 p-2 px-4 font-quick text-gray-50 md:px-32 lg:gap-12 lg:p-16"
    >
      <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl">
        Quer falar com a gente?
      </h3>

      <p className="max-w-xl text-center text-lg sm:text-xl lg:text-2xl">
        Envie uma mensagem pelo formulário
        <br />
        abaixo para combinarmos um cafézinho online.
      </p>

      <div className="flex w-full flex-col items-center justify-around overflow-hidden rounded-3xl lg:grid lg:grid-cols-3">
        <div className="text-md col-span-1 flex h-full w-full flex-col items-center justify-center gap-4 bg-white p-8 text-green-900 xl:text-lg">
          <p className="flex items-center gap-2">
            <FaAt size={24} color="#FFB300" />
            econbike@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaMap size={24} color="#FFB300" />
            R. X, 122
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot size={24} color="#FFB300" />
            Jaraguá do Sul, Santa Catarina
          </p>
          <p className="flex items-center gap-2">
            <FaVoicemail size={24} color="#FFB300" />
            (47) 99259-8001
          </p>
        </div>
        <form className="col-span-2 flex w-full flex-col items-center bg-green-500 p-8 text-gray-600">
          <div className="flex w-full flex-col items-end gap-8 md:w-2/3">
            <div className="flex w-full flex-col justify-between gap-8 xl:flex-row">
              <input
                type="text"
                id="name"
                placeholder="Nome"
                className="w-full rounded-md border-none shadow-lg placeholder:text-gray-200 focus:ring-white"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-md border-none shadow-lg placeholder:text-gray-200 focus:ring-white"
              />
            </div>
            <textarea
              id="message"
              placeholder="Como podemos ajudar?"
              className="min-h-[5rem] w-full rounded-md border-none shadow-lg placeholder:text-gray-200 focus:ring-white"
            />
            <button
              type="submit"
              className="text-md w-full rounded-md bg-white p-2 px-12 font-semibold text-green-900 shadow-2xl transition-all duration-300 hover:scale-95 hover:shadow-lg lg:w-fit lg:text-xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center gap-8 rounded-full bg-white px-8 py-2 md:gap-12 lg:gap-32 xl:px-16">
        <FaYoutube size={40} className="text-red-600" color="#FFB300" />
        <FaLinkedin size={40} className="text-blue-800" color="#FFB300" />
        <FaInstagram size={40} className="text-instagram-500" color="#FFB300" />
        <FaFacebook size={40} className="text-blue-600" color="#FFB300" />
      </div>
    </section>
  );
}
