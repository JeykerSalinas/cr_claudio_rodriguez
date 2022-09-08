<template>
  <v-row>
    <v-dialog v-model="dialog" dark width="100%" heigth="100%" fullscreen>
      <v-btn icon dark @click="dialog = false" class="absolute right-0 z-20">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card class="d-flex align-center">
        <v-img
          :src="dialogImg"
          alt=""
          contain
          max-height="95vh"
          max-width="95vw"
          class="mx-auto"
          ><template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-card>
    </v-dialog>
    <v-col
      v-for="(img, index) in urlArr"
      :key="index"
      class="d-flex child-flex col-6 col-md-4"
    >
      <div @click="handleClick(img)">
        <v-img
          :id="img"
          contain
          :src="img"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ImageGallery",
  data() {
    return {
      dialog: false,
      dialogImg: "",
    };
  },
  props: {
    urlArr: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(url) {
      this.dialog = true;
      this.dialogImg = url;
    },
  },
};
</script>

<style lang="scss" scoped></style>
