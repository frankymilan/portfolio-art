/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': '#64748b',
        'anthracite': '#2b2d31',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night"],
    darkTheme: "night",
  },
}