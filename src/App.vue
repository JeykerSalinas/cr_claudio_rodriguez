<template>
  <v-app id="inspire" heigth="200vh">
    <v-navigation-drawer v-model="drawer" app right>
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

    <v-app-bar app dense :dark="true" :color="'dark-grey'">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-oswald text-2xl font-semibold"
        >CR.</v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <div id="presentation" class="display-flex">
        <h1 class="pb-5 display-2 font-semibold font-oswald white--text">
          Claudio Rodríguez
        </h1>
      </div>
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
  }),
};
</script>
<style scoped>
#presentation {
  background: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/hero.jpg?alt=media&token=d50761af-08ac-4aa2-bd75-0376f3a44a6c");
  background-position-y: -500px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 2000px;
  height: 500px; /*borrar despues*/
}
</style>
