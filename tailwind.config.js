/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/views/*.{html,js,ejs}", "./public/*/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter var']
      }
    },
  },
  plugins: [],
}