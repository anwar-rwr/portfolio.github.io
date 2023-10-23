/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        judul: '#cbd5e1',
        background: '#020617',
        backgrounds: '#0f172a',
        dark: '#475569',
        paragraph: '#CBD5E1',
        other: '#e2e8f0',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
