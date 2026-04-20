import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        accent: {
          blue: "#00F2FF",
          purple: "#BC13FE",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(to right, #3B82F6, #8B5CF6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { "box-shadow": "0 0 5px #3B82F6, 0 0 10px #3B82F6" },
          "100%": { "box-shadow": "0 0 20px #3B82F6, 0 0 30px #8B5CF6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
