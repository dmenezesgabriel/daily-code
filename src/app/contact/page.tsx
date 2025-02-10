import type { Metadata } from "next";

import { ContactForm } from "./from";

export const metadata: Metadata = {
  title: "Contato",
  // description: "",
};

export default function Contact() {
  return (
    <div className="container mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture rounded-lg bg-white p-8">
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
          <ContactForm />
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
