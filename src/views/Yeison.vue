<template>
  <div class="yeison">
    <div>yeison {{ hola }}</div>
    <div>sum: {{ sum }}</div>
    <input type="text" v-model="hola">
    <button v-on:click="msg()"> enviar</button>
  </div>
</template>

<script>
export default {
  name: "Yeison",
  data: function() {
    return {
      hola: "hello word",
      num1 : 4,
      num2: 3
    };
  },
  methods: {
    msg: () => {
      alert("jhola sesbas");
    }
  },
  created() {
    this.msg()
  },
  computed: {
    sum: function() {
      //let self = this;
      return this.num1 + this.num2;
    }
  },
  watch: {
    hola: function(newDa) {
      console.log(newDa);
    }
  },
};
</script>

<style scoped>

</style>
