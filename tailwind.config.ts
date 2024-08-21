import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        white: "#fff",
        "ligh-blue": "#CAF0F8",
        blue: "#00B4D8",
        "dark-blue": "#03045E",
        yellow: "#ffd400",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};

export default config;
