import Vue from "vue";
import Vuex from "vuex";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseconfig";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reviews: [],
    catalogs: [],
    galery: [
      { url: [], name: "/tables" },
      { url: [], name: "/figuratives" },
      { url: [], name: "/no_figuratives" },
    ],
    figSample: [
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFH357.jpg?alt=media&token=bb95190b-0c3c-4015-949e-8c03aa61b540",
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFS32.jpg?alt=media&token=5768c849-3bd1-4f55-a416-5b3e7707a743",
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFH183.jpg?alt=media&token=085551c8-4742-4134-b36f-656b5501ab84",
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFH41.jpg?alt=media&token=203ae1bc-a5ee-4e15-916c-6f293111e542",
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFY61.jpg?alt=media&token=aa09c78d-e4aa-44f4-9ad6-368ad512d397",
      "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFR71.jpg?alt=media&token=55ce4604-dca8-482c-9469-cd477ae0899c",
    ],
  },
  mutations: {
    SET_REVIEWS_URLS(state, payload) {
      state.reviews.push(payload);
    },
    SET_CATALOGS_DIRECTORIES(state, payload) {
      state.catalogs = payload;
    },
    SET_GALLERY_URLS(state, payload) {
      state.galery[payload.index].url.push(payload.res);
    },
  },
  getters: {
    getCatalogsUrls: (state) => {
      state.catalogs.forEach((catalog) => {
        if (catalog.path) {
          const listRef = ref(storage, "/" + catalog.path);
          listAll(listRef)
            .then((res) => {
              catalog.url = [];
              res.items.map((itemRef) => {
                getDownloadURL(ref(storage, itemRef._location.path))
                  .then((res) => {
                    catalog.url.push(res);
                  })
                  .catch((err) => console.log(err));
              });
            })
            .catch((err) => console.log(err));
        }
      });
      return state.catalogs;
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
    async listAllCatalogs({ commit }) {
      const listRef = ref(storage, "/catalogos_y_libros");
      listAll(listRef)
        .then((res) => {
          let myArr = res.prefixes.map((item) => {
            let myObj = {};
            myObj.name = item.name;
            myObj.path = item.fullPath;
            return myObj;
          });

          commit("SET_CATALOGS_DIRECTORIES", myArr);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getGallery({ commit, state }) {
      state.galery.map((galery, index) => {
        const listRef = ref(storage, galery.name);
        listAll(listRef)
          .then((res) => {
            res.items.forEach((itemRef) => {
              getDownloadURL(ref(storage, itemRef._location.path))
                .then((res) => {
                  commit("SET_GALLERY_URLS", { res, index });
                })
                .catch((err) => console.log(err));
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
  modules: {},
});
