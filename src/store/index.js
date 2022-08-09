import Vue from "vue";
import Vuex from "vuex";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseconfig";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
  },
  getters: {},
  mutations: {
    SET_REVIEWS_URLS(state, payload) {
      state.reviews.push(payload);
    },
  },
  actions: {
    async getMetaData({ commit }) {
      const listRef = ref(storage, "/reviews");
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            getDownloadURL(ref(storage, itemRef._location.path))
              .then((res) => {
                commit("SET_REVIEWS_URLS", res);
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
