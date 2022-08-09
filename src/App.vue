<template>
  <v-app id="inspire" v-scroll="onScroll">
    <v-navigation-drawer class="bg-dark-grey" dark v-model="drawer" app right>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
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
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-oswald text-2xl font-semibold"
        >CR.</v-toolbar-title
      >
    </v-app-bar>

    <v-main class="bg-colortest pt-0">
      <v-container align-center fluid class="">
        <v-row id="presentation" class="" :align="'center'" justify="center">
          <h1 class="pb-5 display-2 white--text">
            <span class="oswald text-7xl">Claudio Rodríguez</span>
          </h1>
        </v-row>
        <v-row class="big"> </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
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
      console.log(window.scrollY);
      this.transparentNav = window.scrollY;
    },
  },
};
</script>
<style scoped>
#presentation {
  background: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/hero.jpg?alt=media&token=d50761af-08ac-4aa2-bd75-0376f3a44a6c");
  background-position-y: -450px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 2000px;
  height: 550px; /*borrar despues*/
  margin-top: -48px;
  font-family: "Oswald", sans-serif;
}
.big {
  height: 300vh;
}
#app-bar {
  transition: all 0.6s ease-in-out;
}
</style>
