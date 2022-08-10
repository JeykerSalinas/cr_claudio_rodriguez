<template>
  <v-container class="px-20 mt-15">
    <v-row>
      <v-col>
        <p class="oswald text-6xl text-semibold">Tablitas</p>
        <p class="oswald text-xl text-semibold">
          Claudio ha pintado sobre los más variados soportes. Papel, lienzo,
          yute, tela de cortinas, madera, vidrio, afiches, etc. La serie
          “Tablitas”, de la cual mostramos algunas, las pintó Claudio sobre
          retazos de machimbrado que sobraron de la construcción del sobre techo
          del apartamento familiar, tal cual iba consiguiendo las tablitas, sin
          recortarlas ni haciéndole otra mejora. Todas de 8 centímetros de alto,
          pero de ancho distinto. En esta galería el ancho va desde los 27 hasta
          los 54 centímetros.
        </p>
      </v-col>
      <v-col
        v-for="(img, i) in urls"
        :key="i"
        class="d-flex child-flex"
        cols="12"
      >
        <v-dialog dark v-model="dialog" width="100vw" height="100vh">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" @click="handleClick(img)">
              <img
                :id="img"
                :src="img"
                aspect-ratio="1"
                class="grey lighten-2"
              />
            </div>
          </template>
          <v-card class="d-flex align-center">
            <img :src="dialogImg" alt="" />
          </v-card>
        </v-dialog>
        <!-- <img :id="img" :src="img" aspect-ratio="1" class="grey lighten-2" /> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col class="px-1" v-for="(img, i) in urlstall" :key="i">
        <v-dialog fullscreen dark v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" @click="handleClick(img)">
              <div
                class="bg-cover bg-no-repeat bg-center"
                :style="{
                  'background-image': 'url(' + img + ')',
                  width: '100%',
                  height: '600px',
                }"
              >
                <!-- <img :src="img" alt="" /> -->
              </div>
            </div>
          </template>
          <v-card>
            <div class="py-10">
              <v-img contain :src="dialogImg" max-height="90vh"></v-img>
            </div>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NofigurativesView",
  data() {
    return {
      urls: [
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT001N674L41.jpg?alt=media&token=a540a0ab-3a85-4def-8612-87d048129e07",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT008N655L39.jpg?alt=media&token=35c4855c-d295-4bf6-ab1c-95634afdfb15",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT021N639L41.jpg?alt=media&token=75a3b7e3-20fe-42ba-84ef-4d1eb2b9f708",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT026N676L53.jpg?alt=media&token=ac7f0d58-e8d9-441d-a1ed-168cd01eafc6",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT024N688L27.jpg?alt=media&token=face66b8-0db4-4802-bda5-5be5a1018565",

        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT053N657L54.jpg?alt=media&token=0213a84d-4009-430b-bd4a-0685e2e3edff",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT002N679L36.jpg?alt=media&token=7d83f34a-44d7-4287-ba83-6b4944b4ce26",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT025N621L38.jpg?alt=media&token=55b39c74-8503-4f80-ad59-03b35a492934",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT019N632L45.jpg?alt=media&token=dd28a858-a9f3-428e-9deb-21318e1f2f3e",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT006N676L48.jpg?alt=media&token=3038ca70-5e95-4ee0-934d-fce4e4f0db4f",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT023N686L32.jpg?alt=media&token=d36b163e-90b4-40b4-a344-8d9287c56b28",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT005N675L44.jpg?alt=media&token=01c479be-13b6-453a-b8f2-0abaea7d716a",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT020N631L41.jpg?alt=media&token=5afb901a-3c5a-4b94-84b4-fe9ae0cfab6d",

        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT003N681L36.jpg?alt=media&token=7756dd16-c7fa-4389-95f1-dd54a54c2957",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT022N624L54.jpg?alt=media&token=b38bb472-b149-4c88-ba24-c51da8464cfa",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT004N791L40.jpg?alt=media&token=24ca333e-66f6-4224-9745-979f05be3e48",
      ],
      urlstall: [
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT055N737L31.jpg?alt=media&token=ea9c14d0-aab0-4db2-96c5-6ffe19039d68",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT007N709L33.jpg?alt=media&token=896b0b98-1ffb-40cd-9581-1312d5ac4fde",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT031N697L46.jpg?alt=media&token=8897cbf7-af3c-4168-acde-489c044acba1",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT032N704L35.jpg?alt=media&token=6269b9fb-7eea-426e-aa54-7f67a990f55a",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT051N6597L38.jpg?alt=media&token=c1093263-7e2f-4c8c-aef4-3ea2fe627484",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT052N660L34.jpg?alt=media&token=bb95c2ed-0dea-41a7-80e7-56f3557f4a98",
        "https://firebasestorage.googleapis.com/v0/b/claudio-rodriguez.appspot.com/o/tables%2FT054N668L34.jpg?alt=media&token=e4448d89-8e9c-4967-84a7-966c461e8a19",
      ],
      dialogImg: "",
      dialog: false,
    };
  },
  methods: {
    handleClick(img) {
      this.dialogImg = img;
    },
  },
  computed: {
    ...mapState(["galery"]),
    currUrls() {
      return this.galery.find((gal) => gal.name === "/tables");
    },
  },
};
</script>

<style lang="scss" scoped></style>
