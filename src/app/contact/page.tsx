import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  // description: "",
};

export default function Contact() {
  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        <header>
          <h1 className="wobble mb-6 text-center text-4xl font-bold">
            Contato
          </h1>
          <p className="mb-8 text-center text-lg">
            Tem uma dica? Uma piada? Ou só quer dar um oi? Me mande uma
            mensagem!
          </p>
        </header>

        <section
          className="mb-8 flex flex-col items-center md:flex-row"
          aria-labelledby="contact-form"
        >
          <form
            className="mx-auto w-full max-w-xl"
            id="contact-form"
            aria-describedby="form-instructions"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block font-bold text-gray-700"
              >
                Seu Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
                placeholder="João da Silva"
                aria-label="Seu nome completo"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-bold text-gray-700"
              >
                Seu E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
                placeholder="joao@exemplo.com"
                aria-label="Seu e-mail"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block font-bold text-gray-700"
              >
                Sua Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
                placeholder="O que você gostaria de dizer?"
                aria-label="Sua mensagem"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
                aria-label="Enviar mensagem"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>

        <section
          className="cartoon-border mt-12 rounded-lg bg-pink-200 p-4"
          aria-labelledby="secret-message"
        >
          <h3
            id="secret-message"
            className="mb-2 text-center text-xl font-bold"
          >
            Psst! Mensagem Secreta!
          </h3>
          <p className="text-center">
            Se você chegou até aqui, você é oficialmente incrível! Aqui vai um
            high-five virtual! ✋
          </p>
        </section>
      </div>
    </div>
  );
}
