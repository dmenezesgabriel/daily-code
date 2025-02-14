"use client";

import { useState } from "react";

import { Button } from "@/components/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { message } = formData;
    const subject = "Mensagem de Contato";
    const body = message;

    // send a message to linkedIn instead
    const mailtoLink = `mailto:seu-email@exemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl"
      id="contact-form"
      aria-describedby="form-instructions"
    >
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
          Seu Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          placeholder="João da Silva"
          aria-label="Seu nome completo"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
          Seu E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          placeholder="joao@exemplo.com"
          aria-label="Seu e-mail"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="mb-2 block font-bold text-gray-700">
          Sua Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="cartoon-border w-full rounded-lg border px-3 py-2 text-gray-700 focus:outline-none"
          placeholder="O que você gostaria de dizer?"
          aria-label="Sua mensagem"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <Button
          type="submit"
          size="sm"
          variant="blog"
          aria-label="Enviar mensagem"
        >
          Enviar
        </Button>
      </div>
    </form>
  );
}
