<template>
  <v-container id="catalogs" class="px-20">
    <p class="oswald text-6xl text-semibold">{{ currCatalog?.name }}</p>
    <p class="oswald text-2xl text-semibold">Catálogos y Libros</p>
    <ImageGallery :urlArr="currCatalog.url"></ImageGallery>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ImageGallery from "@/components/ImageGallery.vue";
export default {
  name: "CatalogsView",
  data() {
    return {
      dialog: false,
      dialogImg: "",
    };
  },
  methods: {
    handleClick(url) {
      this.dialogImg = url;
    },
  },
  computed: {
    ...mapGetters(["getCatalogsUrls"]),
    currCatalog() {
      return this.getCatalogsUrls?.find(
        (catalog) => catalog.name === this.$route.params.id
      );
    },
  },
  components: { ImageGallery },
};
</script>

<style lang="scss" scoped>
#catalogs {
  margin-top: 48px;
}
</style>
