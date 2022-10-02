import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@/assets/tailwind.css";
import "@/assets/main.scss";
import VueGtag from "vue-gtag";
Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: "G-PX2613L1PQ",
    enabled: true,
  },
}),
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
