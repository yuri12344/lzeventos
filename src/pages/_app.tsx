/* eslint-disable @next/next/no-img-element */
import "@/styles/globals.css";
import { Icon } from "@iconify/react";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col max-w-5xl w-full m-auto">
      <header className="w-full max-w-5xl fixed flex z-50 items-center h-32 px-8 justify-between">
        <Link
          href="/"
          className="relative opacity-100 hover:opacity-75 transition-all active:scale-95"
        >
          <img
            src="/logo.svg"
            alt="lz-churrasco-e-eventos-logo"
            className="h-16"
          />
        </Link>
        <ul className="relative flex gap-4">
          <li>
            <Link href="#sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/galeria">Galeria</Link>
          </li>
          <li>
            <Link href="#contato">Contato</Link>
          </li>
        </ul>
      </header>
      <Component {...pageProps} />
      <footer
        id="contato"
        className="flex items-center justify-center mb-16 px-4"
      >
        <img
          src="/backgrounds/cutting-board.png"
          alt="lz-churrasco-e-eventos-logo"
        />
        <div className="content">
          <h2 className="lg:text-6xl font-bold">Contato</h2>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=554199509292"
            type="button"
            className="text-2xl hover:bg-green-500 hover:text-white flex gap-2 text-green-500 items-center border-2 px-8 border-green-500 rounded-full h-16"
          >
            <Icon icon="ic:baseline-whatsapp" />
            Quero fazer um orçamento!
          </Link>
          <ul className="mt-8 lg:mt-16">
            <li className="lg:text-2xl font-bold">lzchurrasco@email.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
