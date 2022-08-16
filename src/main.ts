import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import { VueQueryPlugin } from "vue-query";
import router from "@/lib/router";

import App from "@/App.vue";

import "@/style.css";
const store = createPinia();
const app = createApp(App);

app
  .use(router)
  .use(PiniaVuePlugin)
  .use(store)
  .use(VueQueryPlugin)
  .mount("#app");
