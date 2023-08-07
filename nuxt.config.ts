// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["@/assets/main.css"],
  modules: [
    ["@storyblok/nuxt", {
      accessToken: process.env.STORYBLOK_TOKEN
    }]
  ]
})
