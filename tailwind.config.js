/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#cd1818",
        nav: "#252525",
        paragraph: "#212529",
      },
      width: {
        search: "496px",
        app: "1200px",
      },
      height: {
        search: "38px",
        header: "56px",
        nav: "36px",
      },
    },
  },
  plugins: [],
};
