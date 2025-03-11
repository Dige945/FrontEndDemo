<template>
  <div>
    <Header />
    <div style="display: flex">
       <Aside />
       <Home style="padding-top: 10px;padding-left: 10px;padding-right: 30px"/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Home from "@/components/Home.vue";

export default {
  name: 'Layout',
  components: {
    Home,
    Header,Aside,
  },
  setup() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#Aside{
  width: 180px;
  margin-left: 0px;
}
</style>
