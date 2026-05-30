import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07142F",
        midnight: "#0A1E42",
        cyan: "#00D7FF",
        gold: "#F5B942",
        ink: "#102033",
        mist: "#F4F7FB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 55px rgba(0, 215, 255, 0.18)",
        gold: "0 18px 40px rgba(245, 185, 66, 0.28)",
        clinic: "0 18px 60px rgba(7, 20, 47, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
