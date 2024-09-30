// plugins/scrollmagic.client.js
import ScrollMagic from 'scrollmagic';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('scrollmagic', ScrollMagic);
});
