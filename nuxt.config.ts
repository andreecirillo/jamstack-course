// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css:["@/assets/main.css"],
  modules: [
    ["@storyblok/nuxt", {
      accessToken: "43G15Vvf3bBEn9IMxFQYcwtt"
    }]
  ]
})
