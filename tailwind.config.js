/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3C31A3',
        secondary: '#132944',
        accent: '#FFD700',
        dark: '#0f0f0f',
        light: '#f1f1f1',
      },
      boxShadow: {
        'neu': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'neu-dark': '20px 20px 60px #0a0a0a, -20px -20px 60px #141414',
        'neu-inset': 'inset 10px 10px 20px #0a0a0a, inset -10px -10px 20px #141414',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glitch-1': 'glitch-1 0.3s infinite',
        'glitch-2': 'glitch-2 0.3s infinite',
      },
    },
  },
  plugins: [],
}