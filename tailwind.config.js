/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        nav: 'var(--color-navigation)',
        paragraph: 'var(--color-paragraph)',
      },
      width: {
        search: 'var(--width-search)',
        app: 'var(--width-app)',
      },
      height: {
        search: 'var(--height-search)',
        header: 'var(--height-header)',
        nav: 'var(--height-nav)',
      },
    },
  },
  plugins: [],
};
