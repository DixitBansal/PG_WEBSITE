/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-purple': '#955DDA',
      'base-white': '#ffffff',
      'ligh-primary': '#B587EE',
      'subheadline': '#939393',
      'dark-primary': '#3D016D',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#595959',
      'text-gray' : "#595959",
      'gray-light': '#d3dce6',
      'gradient-purple-start' : "#F9F2FF",
      'gradient-purple-mid' : '#ffffff7d',
      'gradient-purple-end' : '#F9F2FF'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'mainheading-size': "3rem",
      'heading-size': '2rem',
      'subheading-size': '1.5rem',
      'title-size' : '1.5rem',
      'subtitle-size': '1.25rem'
    },
    fontWeight: {
      'bold': "500",
      'extrabold': '700',
      'thin': "200",
      'extrathin': '100'
    },
    extend: {
      boxShadow: {
        'xl': '0 0px 30px -10px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'buttonradius': '2px',
        'cardradius': '10px'
      },
      backgroundImage: {
        'careers': "url('./images/footerbg.svg')"
      }
    },
  },
  plugins: [],
}

