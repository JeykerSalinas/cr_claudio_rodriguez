<template>
  <v-container id="catalogs">
    <h1>{{ $route.params.id }}</h1>
    <p>{{}}</p>
  </v-container>
</template>

<script>
export default {
  name: "CatalogsView",
  data() {
    return {
      currImages: [],
    };
  },
  methods: {
    getImages() {
      console.log(this.$store.state.catalogs);
    },
  },
  created() {
    this.getImages();
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
#catalogs {
  margin-top: 48px;
}
</style>
