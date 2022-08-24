<template>
  <div>
    <p class="oswald text-center mt-10 text-6xl text-semibold">Reseñas</p>
    <ReviewsCarousel></ReviewsCarousel>
  </div>
</template>

<script>
import ReviewsCarousel from "@/components/ReviewsCarousel.vue";
export default {
  name: "ReviewsView",
  components: {
    ReviewsCarousel,
  },
};
</script>

<style lang="scss" scoped></style>
