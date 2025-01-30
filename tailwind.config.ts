import type { Config } from "tailwindcss";

export default {
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
        "gradient-1":
          "linear-gradient(120deg, rgba(84, 150, 182, 0.25) 0%, rgba(15, 107, 151, 0.25) 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "accent-blue": "#59CAEE",
        "accent-blue-darken-1": "#25B7E4",
        "accent-green": "#5EEAD4",
        "primary-text": "#E2E8F0",
        "secondary-text": "#94A3B8",
        "secondary-darken-text": "#64748B",
        "dark-base": "#1A191D",
        "dark-lighten-1": "#202022",
        "dark-lighten-2": "#313438",
        "dark-lighten-3": "#555759",
        "hover": "rgba(45, 152, 212, 0.05)"
      },
    },
  },
  plugins: [],
} satisfies Config;
