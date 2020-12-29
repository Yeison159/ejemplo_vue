<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="mostrarData()">validar</button>
    <ul id="example-1">
      <li v-for="(user, i) in usuarios.user" :key="i">
        {{ user.name }}
      </li>
    </ul>
    <div v-if="cargando"><Loader /></div>
    <h2 v-else>
      ya cargo los datos
    </h2>
  </div>
</template>

<script>
import Loader from "./../components/Loader.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "about",
  data: function() {
    return {
      nombre: ""
    };
  },
  computed: {
    ...mapState("user", ["usuarios", "cargando"])
  },
  methods: {
    ...mapActions("user", ["traer_usuarios"]),
    mostrarData: async function() {
      console.log(await this.usuarios.user);
    }
  },
  created() {
    this.traer_usuarios();
  },
  components: {
      Loader
  }
};
</script>
