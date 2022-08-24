<template>
  <v-container class="mt-15">
    <p class="oswald text-6xl text-semibold">Colecciones</p>
    <p class="oswald text-2xl text-semibold">
      Selección de colecciones públicas y privadas que albergan sus obras
    </p>
    <v-row>
      <v-col>
        <ul>
          <li>
            <a href="http://gan.fmn.gob.ve/">Galería de Arte Nacional</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mamjaamuseo/?hl=es">
              Museo de Arte Moderno Juan Astorga Anta
            </a>
          </li>
          <li>
            <a href="http://me.gob.ve/"> Ministerio de Educación </a>
          </li>
          <li>
            <a
              href="http://www.presidencia.gob.ve/Site/Web/Principal/paginas/classIndex.php"
            >
              Palacio de Gobierno del Distrito Capital
            </a>
          </li>
          <li>
            <a href="https://fundacionempresaspolar.org/"> Fundación Polar </a>
          </li>
        </ul>
        <ul>
          <li>Cecilia Fajardo Hill</li>
          <li>Susana Amundaraín</li>
          <li>Milagros Bello</li>
          <li>Ruth Auerbach</li>
          <li>Zuleiva Vivas</li>
          <li>Víctor Guedez</li>
          <li>Víctor Valera</li>
          <li>Valentina e Ignacio Oberto</li>
          <li>Adelaida Villalba</li>
          <li>Alí Cordero Casal</li>
          <li>Antonio Luis y Elvia Cárdenas Colmenter</li>
          <li>Herederos de Alfonso Cuesta y Cuesta</li>
          <li>Clementina Mendoza</li>
          <li>Graciela Pantín</li>
          <li>Alberto Punceles</li>
        </ul>
      </v-col>
      <v-col>
        <div>
          <v-img
            height="450px"
            src="https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/no_figuratives%2FHHPa800.jpg?alt=media&token=6420cce6-a2ac-4ccf-a97a-22d70975895e"
            class="elevation-10 mt-5"
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
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
