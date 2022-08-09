<template>
  <v-app id="inspire" v-scroll="onScroll">
    <v-navigation-drawer class="bg-dark-grey" dark v-model="drawer" app right>
      <v-list dense>
        <v-subheader>Claudio Rodríguez</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      fixed
      :dark="true"
      :color="transparentNav < 350 ? 'transparent' : 'dark-grey'"
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
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
    transparentNav: 0,
  }),
  methods: {
    onScroll() {
      this.transparentNav = window.scrollY;
    },
    ...mapActions(["getMetaData"]),
  },
  created() {
    this.getMetaData();
  },
};
</script>
<style scoped>
#app-bar {
  transition: all 0.6s ease-in-out;
}
</style>
