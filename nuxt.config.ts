// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/styles/global.css'],
  modules: ['@nuxt/image', 'vue3-carousel-nuxt'],
});
