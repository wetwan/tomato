/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        prata: ['"Prata"', 'sans-serif'],
      },
      backgroundImage: {
        'header': "url('header_img.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    
    },
  },
  plugins: [],
}