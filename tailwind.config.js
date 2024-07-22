/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/componen/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/src/assets/img/login.png')",
        'register': "url('/src/assets/img/register.png')",
        'hero': "url('/src/assets/img/hero-section.png')"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '769px'},
      // => @media (max-width: 768px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'min-lg': {'min': '1024px'},
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin') ,

    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',     /* Firefox */
        },
      });
    },
]

}
