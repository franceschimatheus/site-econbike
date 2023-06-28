export function Contatos() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 p-16 px-32 font-quick text-gray-50">
      <h3 className="text-5xl">Quer falar com a gente?</h3>

      <p className="max-w-xl text-center text-2xl">
        Envie uma mensagem pelo formulário
        <br /> abaixo para combinarmos um cafézinho online.
      </p>

      <div className="grid w-full grid-cols-3 items-center justify-around overflow-hidden rounded-3xl">
        <div className="col-span-1 flex h-full flex-col items-center justify-center gap-4 bg-gray-50 p-8 text-xl text-green-900">
          <p>econbike@gmail.com</p>
          <p>R. X, 122</p>
          <p>Jaraguá do Sul, Santa Catarina</p>
        </div>
        <form className="col-span-2 flex flex-col items-center gap-8 bg-green-400 p-8 text-gray-600">
          <div className="flex w-2/3 justify-between gap-8">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              className="w-full rounded-md border-none shadow-lg placeholder:text-gray-200"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md border-none shadow-lg placeholder:text-gray-200"
            />
          </div>
          <textarea
            id="message"
            placeholder="Como podemos ajudar?"
            className="min-h-[5rem] w-2/3 rounded-md border-none shadow-lg placeholder:text-gray-200"
          />
          <button
            type="submit"
            className="rounded-md bg-white p-2 px-12 text-xl font-medium hover:bg-opacity-95"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
