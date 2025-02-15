"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className="cartoon-border overflow-hidden bg-yellow-300 p-6 text-gray-900"
      role="banner"
    >
      <div className="halftone-bg absolute inset-0" />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between md:flex-row">
        <Link
          href="/"
          className="wobble mb-4 text-4xl font-bold transition-colors hover:text-red-600 md:mb-0"
          aria-label="gm.dev Home"
        >
          <div className="flex flex-row">
            <span>gm</span>
            <span className="text-green-400">|</span>
            <span>dev</span>
          </div>
        </Link>
        <nav role="navigation" aria-label="Main Navigation">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`text-xl transition-colors ${isActive("/") ? "active-link" : "hover:text-red-600"}`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-xl transition-colors ${isActive("/about") ? "active-link" : "hover:text-red-600"}`}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-xl transition-colors ${isActive("/contact") ? "active-link" : "hover:text-red-600"}`}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contato
              </Link>
            </li>
            <li>
              <Link
                href="/garden"
                className={`text-xl transition-colors hover:text-green-600 ${isActive("/garden") ? "active-link" : "hover:text-red-600"}`}
                aria-current={isActive("/garden") ? "page" : undefined}
              >
                Jardim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
