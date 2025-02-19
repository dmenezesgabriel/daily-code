import Link from "next/link";

import { Button } from "@/components/button";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container prose mx-auto px-4 py-12">
      <article className="cartoon-border subtle-card-texture rounded-lg bg-white p-8">
        {children}
        <Link href="/">
          <Button variant="blog">Voltar para página inicial</Button>
        </Link>
      </article>
    </main>
  );
}
