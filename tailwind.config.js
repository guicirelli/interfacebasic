/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#6A1B32',
        brandDark: '#42111F',
        brandLight: '#C36B83',
        accent: '#0F766E',
        accentLight: '#2DD4BF',
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          600: '#475569',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          muted: '#64748b',
          light: '#ffffff',
        },
        surface: {
          base: '#ffffff',
          subtle: '#f8fafc',
        },
      },
      fontFamily: {
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'body': ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

