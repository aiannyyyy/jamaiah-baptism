/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50:  "#FFF7F8",
          100: "#FEEBEF",
          200: "#FBD3DB",
          300: "#F4A9B8",
          400: "#EA8095",
          500: "#D65B75",
          600: "#B23D5A",
          700: "#8A2C44",
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', "cursive"],
        serif:  ['"Cormorant Garamond"', "serif"],
        sans:   ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px -12px rgba(178, 61, 90, 0.25)",
      },
    },
  },
  plugins: [],
};