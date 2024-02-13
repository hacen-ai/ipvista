// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-swiper", "@vueuse/motion/nuxt", "@nuxtjs/i18n"],
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      //germen
      {
        code: "de-DE",
        iso: "de-DE",
        name: "Deutsch",
        file: "de-DE.json",
      },
      //french
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "Français",
        file: "fr-FR.json",
      },
    ],
    defaultLocale: "en-US",
  },
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
