// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head :{
      title: 'Nuxt App',
      meta:[
        {name: 'description', content: 'Everything'}
      ],
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})
