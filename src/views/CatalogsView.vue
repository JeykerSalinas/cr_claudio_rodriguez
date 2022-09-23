<template>
  <v-container id="catalogs" class="">
    <p class="oswald text-6xl text-semibold">
      {{ currCatalog?.name }}
    </p>
    <p class="oswald text-2xl text-semibold">Catálogos y Libros</p>
    <ImageGallery :urlArr="currCatalog?.urls"></ImageGallery>
  </v-container>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";
import { mapState } from "vuex";
export default {
  name: "CatalogsView",
  components: { ImageGallery },
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
    sortCatalog(cat) {
      cat.sort(
        (a, b) =>
          Number(a.split(".")[4].slice(a.split(".")[4].length - 2)) -
          Number(b.split(".")[4].slice(a.split(".")[4].length - 2))
      );
    },
  },
  computed: {
    ...mapState(["catalogs"]),
    currCatalog() {
      let catalog = this.catalogs.find(
        (cat) => cat.name === this.$route.params.id
      );
      this.sortCatalog(catalog?.urls);
      return catalog;
    },
  },
};
</script>

<style lang="scss" scoped>
#catalogs {
  margin-top: 48px;
}
</style>
