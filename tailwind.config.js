/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['museo-sans'],
    },
    extend: {
      colors: {
        'custom-blue': '#045CA3',
        'custom-blue-2': '#04559A',
        'custom-gray': '#969696',
      },
      }
    },
  },
  plugins: [],
}

