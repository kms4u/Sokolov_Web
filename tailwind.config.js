/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        'Chivo Mono': ['"Chivo Mono"', 'monospace'],
      },
      colors: {
        main : '#161616',
        light: '#cfcfcf',
        // palette
        greenyellow : '#8BB604',

        textcol : '#525C62',
        textcollight : '#232E35',

        tirecol : '#656D72',
        tirecollight : '#656D72',
        
        headcol : '#232E35',
        headcollight : '#232E35',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

