import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080F",
        foreground: "#F0F0F5",
        brand: {
          primary: "#5B8DEF",
          secondary: "#E8823A",
        }
      },
    },
  },
  plugins: [],
};
export default config;
