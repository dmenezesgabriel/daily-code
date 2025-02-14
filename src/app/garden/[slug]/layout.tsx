import Link from "next/link";

import { Button } from "@/components/button";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container prose mx-auto py-12">
      <article className="cartoon-border subtle-card-texture rounded-lg border-green-500 bg-white p-8">
        <div className="mb-4 font-bold text-green-600">🌱 Garden Note</div>
        {children}
        <Link href="/garden">
          <Button variant="garden">Back to Garden</Button>
        </Link>
      </article>
    </div>
  );
}
