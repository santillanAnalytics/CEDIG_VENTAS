/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#001391",
        brightColor: "#001391",
        backgroundColor: "#2165ca",
      },
    },
  },
  plugins: [],
}

