import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag";
import "@/assets/tailwind.css";
import "@/assets/main.scss";

Vue.config.productionTip = false;
Vue.use(VueGtag, {
  config: { id: "328440093" }
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
