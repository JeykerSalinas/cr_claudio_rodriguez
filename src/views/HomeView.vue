<template>
  <div>
    <v-row id="presentation" :align="'center'" justify="center">
      <h1 class="pb-5 display-2 white--text">
        <span class="oswald text-7xl">Claudio Rodríguez</span>
      </h1>
    </v-row>
    <v-row class="h-screen">
      <v-col cols="6" class="d-flex items-center justify-end">
        <div>
          <v-img
            width="40vw"
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
      <v-col cols="6" class="d-flex items-center justify-start">
        <p class="pe-13 me-15">
          <!-- eslint-disable-next-line -->
          Para Claudio Rodríguez, la pintura deviene en actividad sanadora, en
          una terapéutica que, a la manera del psicoanálisis, busca en el
          inconsciente el origen de la pérdida del objeto.
          <br />
          <em class="font-italic"
            >“Cada cuadro que hago es la investigación de mí mismo, es un
            conocimiento profundo del yo, es un sentimiento y un pensamiento
            profundo y doloroso de nosotros mismos, yo mismo yo.”</em
          >
        </p>
      </v-col>
    </v-row>
    <v-row class="bg-darkgrey"> </v-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
#presentation {
  background: url("https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/hero.jpg?alt=media&token=d50761af-08ac-4aa2-bd75-0376f3a44a6c");
  background-position-y: -450px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: 2000px;
  height: 550px; /*borrar despues*/
  margin-top: -48px;
  font-family: "Oswald", sans-serif;
}
.big {
  height: 100vh;
}
</style>
