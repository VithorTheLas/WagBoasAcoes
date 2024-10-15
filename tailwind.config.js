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
      backgroundImage: {
        'home-people': "url('assets/images/home-bg.png')",
        'como-funciona-hands': "url('assets/images/como-funciona-bg.png')",
        'como-funciona-path': "url('assets/images/path.svg')"
      }
    },
  },
  plugins: [],
}

