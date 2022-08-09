<template>
  <v-app id="inspire" v-scroll="onScroll">
    <v-navigation-drawer class="bg-dark-grey" dark v-model="drawer" app right>
      <v-list dense>
        <v-subheader>Claudio Rodríguez</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon v-text="'mdi-home'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content prepend-icon="mdi-home"
              ><v-list-item-title v-text="'Home'"></v-list-item-title
            ></v-list-item-content>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon v-text="'mdi-account'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              ><v-list-item-title v-text="'Sobre Claudio'"></v-list-item-title
            ></v-list-item-content>
          </v-list-item>
          <v-list-group prepend-icon="mdi-book" no-action dark>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Catálogos y libros</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in $store.state.catalogs"
              :key="i"
              :to="child.fullPath"
            >
              <v-list-item-content v-if="child">
                <v-list-item-title v-text="child.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
      <v-list dense> </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      fixed
      :dark="true"
      :color="
        transparentNav < 350 && $route.name === 'home'
          ? 'transparent'
          : 'dark-grey'
      "
      id="app-bar"
    >
      <v-toolbar-title class="font-oswald text-2xl font-semibold"
        >CR.</v-toolbar-title
      >
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="ms-auto"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="bg-softwhite pt-0">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    selectedItem: 1,
    items: [
      { text: "Home", icon: "mdi-home", route: "/" },
      { text: "Sobre Claudio", icon: "mdi-account", route: "about" },
      { text: "Catálogos y libros", icon: "mdi-book", route: "catalogs" },
    ],
    itemss: [
      {
        action: "mdi-ticket",
        items: [{ title: "List Item" }],
        title: "Attractions",
      },
    ],
    transparentNav: 0,
  }),
  methods: {
    onScroll() {
      this.transparentNav = window.scrollY;
    },
    ...mapActions(["getMetaData", "listAllCatalogs"]),
  },
  created() {
    this.getMetaData();
    this.listAllCatalogs();
  },
};
</script>
<style scoped>
#app-bar {
  transition: all 0.6s ease-in-out;
}
</style>
