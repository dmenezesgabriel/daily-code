import TailwindCssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            minWidth: "80%",
            a: { textDecoration: "none" },
          },
        },
      }),
    },
  },
  plugins: [TailwindCssTypography],
} satisfies Config;
