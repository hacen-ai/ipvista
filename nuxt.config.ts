// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
  css: [
    "~/assets/css/main.css",
    "@splidejs/splide/dist/css/splide.min.css",
    // or
    "@splidejs/splide/dist/css/themes/splide-skyblue.min.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
