import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      dark: "#1b1b1b",
      light: "#fff",
      accent: "#7B00D3",
      accentDark: "#ffdb4d",
      gray: "#747474",
    },
    fontFamily: {
      inter: ["var(--font-inter)"],
      manrope: ["var(--font-manrope)"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
