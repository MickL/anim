import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['motion-v/nuxt', '@vueuse/nuxt',],
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  css: ['assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
