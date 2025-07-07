// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        salud: {
          claro: '#7DB0B3',
          medio: '#7DB0B3',
          base: '#3B9EDC',
          oscuro: '#1B6FA8',
        },
      },
    },
  },
  plugins: [],
};
