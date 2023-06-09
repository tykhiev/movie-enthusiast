/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      montserrat: ["var(--font-montserrat)"],
      gridTemplateColumns: { 
        fluid: "repeat(auto-fit, minmax(250px, 1fr))",
    },
  },
  plugins: [],
}}
