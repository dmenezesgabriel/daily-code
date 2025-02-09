import { pipeline } from "@huggingface/transformers";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

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

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src/content/", "posts", filename),
      "utf-8",
    );

    const { content } = matter(markdownWithMeta);

    return { slug: filename.replace(".mdx", ""), content };
  });

  const embeddings: Record<string, number[]> = {};

  for (const post of posts) {
    const embedding = await embedder(post.content, {
      pooling: "mean",
      normalize: true,
    });
    embeddings[post.slug] = Array.from(embedding.data);
  }

  fs.writeFileSync(embeddingsFile, JSON.stringify(embeddings, null, 2));
}

main().then(() => console.log("embeddings generated"));
