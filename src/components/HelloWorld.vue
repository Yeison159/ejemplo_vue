<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{nombre}}</p>
    <button @click="enviarpadre()">clik</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      nombre: 3
    };
  },
  methods: {
    enviarpadre() {
      this.nombre++;
      this.$emit("nombreQpaso", this.nombre);
    }
  },
  mounted() {
    this.$emit("nombreQpaso", this.nombre);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
