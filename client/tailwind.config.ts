import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22297C", // Primary color
        secondary: "#FFD101", // Secondary color
        text: "#555555", // Text color
        background: "#FFF", // Background color
        foreground: "#555555", // Foreground color
      },
      fontFamily: {
        michroma: ["Michroma", "sans-serif"], // Adding Michroma font
        roboto: ["Roboto Condensed", "sans-serif"], // Adding Roboto Condensed font
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;