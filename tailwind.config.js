/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'bg-circleStart': "url('/images/circleStart.webp')",
      'bg-circleStarts': "url('~/assets/images/circleStart.webp')",
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

