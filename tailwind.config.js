/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#247D3C',
        'brand-green-light': '#9FDFB0',
        'brand-green-mint': '#C2EFDC',
        'brand-green-bg': 'rgba(197, 255, 175, 0.42)',
        'brand-yellow': '#F1F0DB',
        'brand-dark': '#020202',
        'brand-white': '#FCFCFC',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        'tight-sm': '-0.75px',
        'tight-md': '-1px',
        'tight-lg': '-1.2px',
        'tight-xl': '-2.1px',
        'tight-2xl': '-2.4px',
        'tight-3xl': '-3.2px',
        'tight-4xl': '-3.75px',
      },
    },
  },
  plugins: [],
}
