import { pipeline } from "@huggingface/transformers";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

function splitText(content: string, chunkSize: number = 3): string[] {
  const sentences = content.split(/(?<=[.!?])\s+/); // Splits by sentence
  const chunks: string[] = [];

  for (let i = 0; i < sentences.length; i += chunkSize) {
    chunks.push(sentences.slice(i, i + chunkSize).join(" "));
  }

  return chunks;
}

async function main() {
  const embeddingsFile = path.join(process.cwd(), "public", "embeddings.json");
  const embedder = await pipeline(
    "feature-extraction",
    "Xenova/multilingual-e5-small",
  );

  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content", "posts"),
    "utf-8",
  );

  const embeddings: Record<
    string,
    { textChunks: string[]; chunkEmbeddings: number[][] }
  > = {};

  for (const filename of files) {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src/content/posts", filename),
      "utf-8",
    );
    const { content } = matter(markdownWithMeta);

    const slug = filename.replace(".mdx", "");
    const textChunks = splitText(content);

    const chunkEmbeddings: number[][] = [];
    for (const chunk of textChunks) {
      const embedding = await embedder(chunk, {
        pooling: "mean",
        normalize: true,
      });
      chunkEmbeddings.push(Array.from(embedding.data));
    }

    embeddings[slug] = { textChunks, chunkEmbeddings };
  }

  fs.writeFileSync(embeddingsFile, JSON.stringify(embeddings, null, 2));
  console.log("Embeddings generated!");
}

main();
