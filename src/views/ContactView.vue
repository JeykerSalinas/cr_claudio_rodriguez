<template>
  <v-container class="">
    <h2 class="display-3 pb-3 pt-5">
      <span class="oswald">Contacto</span>
    </h2>
    <v-form ref="form" class="pa-4" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo"
        required
      ></v-text-field>
      <v-textarea
        name="input-7-1"
        label="Mensaje"
        v-model="message"
        value=""
        hint="Por favor, deja tu mensaje acá"
      ></v-textarea>
      <div class="text-center">
        <v-btn
          :disabled="!name || !email || !message"
          class="bg-dark-grey mt-3 px-10"
          dark
          elevation="4"
          @click="sendData"
          >Enviar</v-btn
        >
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseconfig";
export default {
  name: "ContactView",
  data: () => ({
    valid: true,
    name: "",
    email: "",
    message: "",
    messageRules: [(v) => !!v || "Mensaje inváldo"],
    nameRules: [
      (v) => !!v || "Nombre obligatorio",
      (v) => (v && v.length <= 10) || "Máximo 10 caracteres",
    ],
    emailRules: [
      (v) => !!v || "Correo es obligatorio",
      (v) => /.+@.+\..+/.test(v) || "Email inválido",
    ],
  }),

  methods: {
    async sendData() {
      const myObj = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      try {
        const docRef = await addDoc(collection(db, "contacto"), myObj);
        console.log("Document written with ID: ", docRef.id);
        window.alert("Mensaje enviado con éxito");
        this.$router.push("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: grey !important;
}
</style>
