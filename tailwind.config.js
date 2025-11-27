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
        // Cores principais - Vermelho Marsala
        brand: '#8B3A3A',        // Vermelho Marsala principal
        brandDark: '#7C2D2D',    // Marsala escuro
        brandLight: '#A05252',   // Marsala claro
        accent: '#10b981',       // Verde moderno (mantido para contraste)
        accentLight: '#34d399',  // Verde claro
        
        // Cores de texto mais suaves
        text: {
          primary: '#1e293b',    // Azul escuro suave
          secondary: '#475569',  // Cinza azulado
          light: '#ffffff',      // Branco
        },
        
        // Cores de fundo mais claras
        bg: {
          primary: '#ffffff',    // Branco
          secondary: '#f8fafc',  // Cinza muito claro
          dark: '#f8fafc',       // Modo escuro mais claro
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'body': ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

