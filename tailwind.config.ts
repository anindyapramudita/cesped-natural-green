import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['"Montserrat"', ...fontFamily.sans],
        serif: ['"Playfair Display"', ...fontFamily.serif],
      },
      colors: {
        "primary-green": "#809375",
        "secondary-beige": "#FFFAF6",
        black: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
export default config;
