/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#22c55e",
        "custom-gray": "#404f65",
      },
    },
  },
  plugins: [],
}

