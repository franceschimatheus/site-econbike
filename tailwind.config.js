/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        quick: 'var(--font-quicksand)',
      },

      colors: {
        instagram: { 500: '#881166' },
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        blue: {
          400: '#3da2ff',
          500: '#0085FF',
          600: '#0056bf',
        },
        green: {
          300: '#69ffe3',
          400: '#00FFD1',
          500: '#06c7a4',
          900: '#08343E',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
