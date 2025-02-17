import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";

import { remarkRemoveFrontmatter } from "@/utils/front-matter";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // See https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },
  output: "export",
  basePath: "/daily-code",
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkRemoveFrontmatter, remarkFrontmatter],
  },
});

export default withMDX(nextConfig);
