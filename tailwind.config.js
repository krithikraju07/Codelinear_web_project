/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: 'hidden',
      },
      textShadow: {
        'black-md': '2px 2px 4px rgba(0, 0, 0, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.6), 6px 6px 12px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'custom-black': '0px 0px 42.75px 0px #1224611A',
      },
      colors: {
        'custom-bg': '#F9F9F9',
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 0.5s ease forwards',
      },
    },
  },
  
  plugins: [ function({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-custom': {
        textShadow: '0px 0px 42.75px #1224611A',
      },
    }

    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
  variants: {
    extend: {
        display: ["group-hover"],
        opacity: ['hover'],
    },
},
}

