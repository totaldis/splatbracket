/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js, ts, tsx}',
    './src/App.tsx',
  ],
  theme: {
    extend: {
      textStroke: {
        'purple': '1px #4C1D95',
      },
    },
  },
  plugins: [],
}