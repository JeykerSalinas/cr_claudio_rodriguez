import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/catalogs/:id",
    name: "catalogs",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "catalogs" */ "../views/CatalogsView.vue"),
  },
  {
    path: "/galery/figuratives",
    name: "figuratives",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Figuratives" */ "../views/FigurativesView.vue"
      ),
  },
  {
    path: "/galery/nofiguratives",
    name: "nofiguratives",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "noFiguratives" */ "../views/NofigurativesView.vue"
      ),
  },
  {
    path: "/galery/tables",
    name: "tables",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Tables" */ "../views/TablesView.vue"),
  },
  {
    path: "/reviews",
    name: "reviews",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Reviews" */ "../views/ReviewsView.vue"),
  },
  {
    path: "/collections",
    name: "collections",
    // route level code-splitting
    // this generates a separate chunk (catalogs.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Colections" */ "../views/CollectionsView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
