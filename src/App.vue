<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside>
      <div style="display: flex">
        <Aside />
      </div>
      </el-aside>
      <router-view></router-view>
    </el-container>
    <!--Home style="padding-top: 10px;padding-left: 10px;padding-right: 30px"/-->
  </el-container>
</template>

<script>

import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";


export default {
  name: 'Layout',
  components: {
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
