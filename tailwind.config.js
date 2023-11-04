/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moderateCyan: "hsl(var(--moderate-cyan))",
        darkCyan: "hsl(var(--dark-cyan))",
        black: "hsl(var(--black))",
        darkGray: "hsl(var(--dark-gray))",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
