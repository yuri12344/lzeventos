/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="banner">
        <div className="relative">
          <Image
            src="/backgrounds/chicken.png"
            alt="lz-churrasco-e-eventos-logo"
            fill
            className="absolute h-64 w-64 rounded-full top-20 right-20 opacity-75"
          />
        </div>
        <h1 className="relative text-6xl text-center font-bold max-w-md">
          CHURRASCO E BUFFETS PARA O SEU EVENTO
        </h1>
        <button className="py-4 px-6 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all active:scale-95">
          Ver mais
        </button>
      </section>
      <section id="sobre">
        <div className="relative">
          <Image
            src="/backgrounds/meat.png"
            alt="lz-churrasco-e-eventos-logo"
            fill
            className="max-h-[60vh] md:w-full cursor-pointer hover:scale-105 hover:translate-x-5 transition-all active:scale-95"
          />
        </div>
        <div className="content">
          <h2 className="text-4xl font-bold">Sobre</h2>
          <p>
            Somos a LZ Churrasco & Eventos, uma empresa especializada e
            comprometida com a realização do seu evento, seja ele casamento,
            aniversário, ou corporativo. Temos 10 anos de experiência na área,
            atendendo conforme a sua necessidade buffets de churrasco, feijoada,
            espetinhos, costela no fogo de chão, saladas e massas, seja qual for
            o tamanho do seu evento. Nosso objetivo é entregar à você um
            cardápio de qualidade com atendimento especializado.
          </p>
        </div>
      </section>
    </>
  );
}
