<template>
  <v-app id="inspire" v-scroll="onScroll">
    <v-navigation-drawer class="bg-dark-grey" dark v-model="drawer" app right>
      <v-list dense>
        <v-subheader
          ><span class="oswald text-3xl">Claudio Rodríguez</span></v-subheader
        >
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
          <v-list-item to="/reviews">
            <v-list-item-icon>
              <v-icon v-text="'mdi-newspaper'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              ><v-list-item-title v-text="'Reseñas'"></v-list-item-title
            ></v-list-item-content>
          </v-list-item>
          <v-list-item to="/collections">
            <v-list-item-icon>
              <v-icon v-text="'mdi-domain'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              ><v-list-item-title v-text="'Colecciones'"></v-list-item-title
            ></v-list-item-content>
          </v-list-item>
          <v-list-group prepend-icon="mdi-book" no-action dark>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Galerías de pinturas</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item to="/galery/tables">
              <v-list-item-content>
                <v-list-item-title v-text="'Tablitas'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/galery/figuratives">
              <v-list-item-content>
                <v-list-item-title v-text="'Figurativos'"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/galery/nofiguratives">
              <v-list-item-content>
                <v-list-item-title
                  v-text="'No Figurativos'"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-group prepend-icon="mdi-book" no-action dark>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Catálogos y libros</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in $store.state.catalogs"
              :key="i"
              :to="'/catalogs/' + child.name"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
        <v-list-item to="/contact">
          <v-list-item-icon>
            <v-icon v-text="'mdi-message-text'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content
            ><v-list-item-title v-text="'Contacto'"></v-list-item-title
          ></v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense> </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      fixed
      :dark="true"
      :color="
        transparentNav < 350 && $route.name === 'home'
          ? 'transparent'
          : 'dark-grey'
      "
      id="app-bar"
    >
      <v-toolbar-title class="font-oswald text-4xl font-semibold"
        >CR</v-toolbar-title
      >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ms-auto">
        <v-icon v-text="'mdi-menu'" size="40"></v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="bg-softwhite pt-12">
      <router-view></router-view>
    </v-main>
    <v-footer dense dark color="darkgrey" elevation="21" class="py-0">
      <v-card dense tile width="100%" class="text-center">
        <v-card-text class="py-0">
          <v-btn class="" icon href="https://www.instagram.com/claudiomerida/">
            <v-icon size="18px"> mdi-instagram </v-icon>
          </v-btn>
          <v-btn class="" icon to="/contact">
            <v-icon size="18px"> mdi-email </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    selectedItem: 1,
    transparentNav: 0,
  }),
  methods: {
    onScroll() {
      this.transparentNav = window.scrollY;
    },
    ...mapActions(["getMetaData", "listAllCatalogs", "getGallery"]),
  },
  created() {
    this.getMetaData();
    this.listAllCatalogs();
    this.getGallery();
  },
};
</script>
<style scoped>
#app-bar {
  transition: all 0.6s ease-in-out;
}
</style>
