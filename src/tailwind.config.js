// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        salud: {
          claro: '#06257D',
          medio: '#06257D',
          base: '#3B9EDC',
          oscuro: '#1B6FA8',
        },
      },
    },
  },
  plugins: [],
};
