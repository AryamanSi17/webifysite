/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        roll: 'roll 16s linear infinite',
      }
    },
  },
  plugins: [],
};