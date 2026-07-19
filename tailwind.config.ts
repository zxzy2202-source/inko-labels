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
        navy: { DEFAULT: "#0F2744", light: "#1a3a5c", dark: "#091b30" },
        amber: { brand: "#E8A020", light: "#f5c060", dark: "#d4911c" },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "pulse-ring": "pulseRing 2s ease-out infinite",
      },
      keyframes: {
        ticker: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        pulseRing: { "0%": { transform: "scale(1)", opacity: "0.6" }, "100%": { transform: "scale(1.8)", opacity: "0" } },
      },
    },
  },
  plugins: [],
};
export default config;
