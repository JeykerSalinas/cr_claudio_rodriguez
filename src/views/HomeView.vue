<template>
  <div>
    <v-row id="presentation" :align="'center'" justify="center">
      <h1 class="pb-5 display-2 white--text text-center">
        <span class="oswald text-7xl">Claudio Rodríguez</span>
      </h1>
    </v-row>
    <v-row class="big">
      <v-col
        class="col-12 col-lg-6 d-flex items-center justify-center justify-lg-end"
      >
        <div class="my-10">
          <v-img
            width="45vw"
            min-width="300px"
            src="https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/first.png?alt=media&token=e8ac4ab1-59fa-48fa-84cf-3200f725a62b"
            class="elevation-10"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </div>
      </v-col>
      <v-col
        class="col-12 col-lg-6 d-flex items-center justify-center justify-lg-start"
      >
        <div class="pb-10 pe-md-13 me-lg-15 w-3/4 text-center text-lg-left">
          <p>
            <!-- eslint-disable-next-line -->
            Para Claudio Rodríguez, la pintura deviene en actividad sanadora, en
            una terapéutica que, a la manera del psicoanálisis, busca en el
            inconsciente el origen de la pérdida del objeto. (Ruth Auerbach)
          </p>
          <p>
            <em class="font-italic">
              “Cada cuadro que hago es la investigación de mí mismo, es un
              conocimiento profundo del yo, es un sentimiento y un pensamiento
              profundo y doloroso de nosotros mismos, yo mismo yo.”</em
            >
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- <v-row class="bg-darkgrey">
      <div class="w-1/2">
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(slide, i) in figSample" :key="i">
            <v-img :src="slide" contain></v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
      <v-col>Figurativos</v-col>
      <v-col>No Figurativos</v-col>
      <v-col>Tablitas</v-col>
    </v-row> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data: () => ({}),
  computed: {
    ...mapState(["figSample"]),
  },
};
</script>
<style lang="scss" scoped>
#presentation {
  background: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/hero.jpg?alt=media&token=d50761af-08ac-4aa2-bd75-0376f3a44a6c");
  background-position-y: -350px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 2000px;
  height: 40vh; /*borrar despues*/
  margin-top: -48px;
  font-family: "Oswald", sans-serif;
}
@media (max-width: 600px) {
  #presentation {
    background-size: 650px;
    background-position-y: -100px;
  }
}
.big {
  min-height: 60vh;
}
</style>
