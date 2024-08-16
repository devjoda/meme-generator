/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans'],
        anton: ['Anton', 'sans'],
      },
      content: {
        'top-text': 'attr(data-top-text)',
        'bottom-text': 'attr(data-bottom-text)',
      }
    },
  },
  variants: {
    extend: {
      content: ['before', 'after'],
    },
  },
  plugins: [],
}
