// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@ant-design-vue/nuxt'
  ],
  antd:{
    // Options
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  plugins: [
    { src: '~/plugins/ScrollMagic.js', mode: 'client' },
  ]
})