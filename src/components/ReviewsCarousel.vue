<template>
  <v-container fluid class="mx-auto" elevation="8">
    <v-container class="bg-darkgrey rounded py-15">
      <v-row class="transparent fill-height" align="center" justify="center">
        <v-dialog v-model="dialog" width="100vw">
          <template v-slot:activator="{ on, attrs }">
            <v-img
              transition="fade-transition"
              class="cursor-zoom-in"
              contain
              height="50vh"
              :src="reviews[model]"
              v-bind="attrs"
              v-on="on"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </template>
          <v-card elevation="4"
            ><v-img :src="reviews[model]" contain></v-img
          ></v-card>
        </v-dialog>
      </v-row>
    </v-container>
    <v-slide-group v-model="model" mandatory class="pa-4" show-arrows>
      <v-slide-item
        v-for="(review, n) in reviews"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="250"
          width="200"
          @click="toggle(n)"
        >
          <v-img height="100%" class="rounded" :src="review"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    model: 0,
    dialog: false,
  }),
  computed: {
    ...mapState(["reviews"]),
  },
  methods: {
    setModel() {
      this.model = Math.floor(Math.random() * this.reviews.length);
    },
    on() {
      console.log("ONN");
    },
  },
  created() {
    this.setModel();
  },
};
</script>
