import type { Metadata } from "next";

import { SemanticSearch } from "./semantic-search";

export const metadata: Metadata = {
  title: "Busca Semântica",
  // description: "",
};

export default function TestPage() {
  return (
    <div className="p-10">
      <SemanticSearch />
    </div>
  );
}
