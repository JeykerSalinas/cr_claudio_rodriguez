<template>
  <v-row>
    <v-col
      v-for="img in urlArr"
      :key="img"
      class="d-flex child-flex col-6 col-md-4"
    >
      <v-dialog dark v-model="dialog" fullscreen>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" @click="handleClick(img)">
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
        </template>
        <v-card>
          <img :src="dialogImg" alt="" />
        </v-card>
      </v-dialog>
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
      this.dialogImg = url;
    },
  },
};
</script>

<style lang="scss" scoped></style>
