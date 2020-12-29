<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      @nombreQpaso="nombreye = $event"
    />
    {{nombreye}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data(){
    return {
      nombreye: 0
    };
  },
  components: {
    HelloWorld
  }
};
</script>
