<template>
  <v-container id="catalogs" class="px-20">
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
  },
  computed: {
    ...mapState(["catalogs"]),
    currCatalog() {
      return this.catalogs.find((cat) => cat.name === this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
#catalogs {
  margin-top: 48px;
}
</style>
