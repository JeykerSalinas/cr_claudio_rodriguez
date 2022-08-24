<template>
  <v-container id="catalogs" class="px-20">
    <p class="oswald text-6xl text-semibold">{{ currCatalog?.name }}</p>
    <p class="oswald text-2xl text-semibold">Catálogos y Libros</p>
    <ImageGallery :urlArr="currCatalog.url"></ImageGallery>
  </v-container>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebaseconfig";
import { mapState } from "vuex";
export default {
  name: "CatalogsView",
  components: { ImageGallery },
  data() {
    return {
      dialog: false,
      dialogImg: "",
      currCatalog: { url: [] },
    };
  },
  methods: {
    handleClick(url) {
      this.dialogImg = url;
    },
    getCatalogsUrls() {
      const catalog = this.catalogs.find(
        (catalog) => catalog.name === this.$route.params.id
      );
      if (catalog.path) {
        const listRef = ref(storage, "/" + catalog.path);
        listAll(listRef)
          .then((references) => {
            catalog.url = [];
            references.items.map((itemRef) => {
              getDownloadURL(ref(storage, itemRef._location.path))
                .then((url) => {
                  catalog.url.push(url);
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          })
          .catch((err) => console.log(err));
      }
      this.currCatalog = catalog;
    },
  },
  computed: {
    ...mapState(["catalogs"]),
  },
  created() {
    this.getCatalogsUrls();
  },
};
</script>

<style lang="scss" scoped>
#catalogs {
  margin-top: 48px;
}
</style>
