/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/componen/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') 
]

}
