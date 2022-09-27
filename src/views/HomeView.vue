<template>
  <div>
    <div id="presentation" :align="'center'" justify="center" class="fadein">
      <div class="overflow-hidden title-box">
        <h1 class="pb-5 display-2 white--text text-center fadein fadefont">
          <span class="oswald text-8xl">Claudio Rodríguez</span>
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="title mb-20">
        <h1
          class="oswald text-5xl text-center mt-20 mb-10"
          style="text-decoration: underline"
        >
          Artista plástico Venezolano
        </h1>

        <p class="text-xl font-light text-center my-10">
          <!-- eslint-disable-next-line -->
          Para Claudio Rodríguez, la pintura deviene en actividad sanadora, en
          una terapéutica que, a la manera del psicoanálisis, busca en el
          inconsciente el origen de la pérdida del objeto. (Ruth Auerbach)
        </p>
      </div>
      <div class="d-flex mb-20">
        <div class="bg-indigo-500 w-1/2">
          <v-img
            src="https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/figuratives%2FFFR215.jpg?alt=media&token=a6cdc797-45a0-4cc1-b3d5-8df05d14d5c2"
            class="elevation-10 fadein"
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
        <div class="ms-10 w-1/2">
          <p>
            <em class="font-italic text-xl">
              “Cada cuadro que hago es la investigación de mí mismo, es un
              conocimiento profundo del yo, es un sentimiento y un pensamiento
              profundo y doloroso de nosotros mismos, yo mismo yo.”</em
            >
          </p>
          <div class="d-flex jsutify-contetn-center">
            <v-btn
              class="bg-dark-grey mt-3 mx-auto"
              dark
              elevation="2"
              @click="$router.push('/about')"
              >Sobre claudio</v-btn
            >
          </div>
        </div>
      </div>
    </div>
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
  height: 400px; /*borrar despues*/
  margin-top: -48px;
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-box {
  max-height: 180px;
}
@media (max-width: 600px) {
  #presentation {
    height: 400px;
    background-size: 650px;
    background-position-y: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.big {
  min-height: 60vh;
}
.container {
  max-width: 60vw;
  .title {
    border-bottom: 1px solid rgb(201, 199, 199);
  }
}
</style>
