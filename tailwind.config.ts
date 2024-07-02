import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "botw": "url('../public/images/background.jpg')"
      },
      colors:{
        'pink': '#E4D8E5'
      },
      animation: {
        'wish': 'wish 300ms ease-out 1'
      },
      keyframes: {
        wish: {
          '0%': { transform: 'scale(0.8)' },
          '40%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
