<template>
  <v-container class="px-20 mt-15">
    <p class="oswald text-6xl text-semibold">Cuadros Figurativos</p>
    <ImageGallery :urlArr="currUrls.url"></ImageGallery>
  </v-container>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";
import { mapState } from "vuex";
export default {
  name: "FigurativesView",
  components: { ImageGallery },
  computed: {
    ...mapState(["galery"]),
    currUrls() {
      return this.galery.find((gal) => gal.name === "/figuratives");
    },
  },
};
</script>

<style lang="scss" scoped></style>
