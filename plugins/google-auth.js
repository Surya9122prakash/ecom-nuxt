import GAuth from "vue3-google-oauth2";

export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    nuxtApp.vueApp.use(GAuth, {
      clientId: "176703404339-4s6fvcu307i2bmp2k35hnt8iv3efo8ta.apps.googleusercontent.com",
      scope: "email",
      prompt: "consent",
      fetch_basic_profile: false
    });
  }
});
