import { defineNuxtPlugin } from '#app';
import Vue3GoogleLogin from 'vue3-google-login';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const clientId = config.public.clientId;

  nuxtApp.vueApp.use(Vue3GoogleLogin, {
    clientId,
  });
});
