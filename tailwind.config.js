/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.vue",
    "index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'innerxl': 'inset 0 0px 10px 0px rgba(0, 0, 0, 0.5)',
      },
      colors: {
      'darkest': '#2E3772',
      'darker': '#414B8B',
      'dark': '#475298',
      'normal': '#7381B0',
      'light': '#7081B1',
      'lighter': '#A9F5FF',
      'lightest': '#CEF1F5',
      'accent': '#E0AA2C',
      'accentLighter': '#F0DBA9'
      },

      fontFamily: {
        'illusion': ['Illusion', 'sans-serif']
      },
    
    },
  },
  plugins: [],
}

