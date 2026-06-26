/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        accent: {
          indigo: '#6366F1',
          emerald: '#10B981',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        brandDark: '#0B0F19',
        brandLight: '#F8FAFC',
      }
    },
  },
  plugins: [],
}

