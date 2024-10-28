/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgColor1: 'hsla(194, 94%, 7%, 1)',
        creamColor: 'hsla(28, 87%, 97%, 1)',
        darkBlack: 'hsla(0, 0%, 26%, 1)',
        lightGreen: 'hsla(136, 53%, 43%, 1)',
        borderGreen: 'hsla(158, 96%, 18%, 1)',
        lightYellow: 'hsla(64, 94%, 58%, 1)',
        darkGreen: 'hsla(148, 43%, 45%, 1)',
        lightPink: 'hsla(19, 96%, 69%, 1)',
        bgColor2: 'hsla(180, 6%, 97%, 1)',
        bgColor3: 'hsl(44, 73%, 97% )',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

