<template>
  <el-menu
      style="width: 200px;min-height: calc(100vh - 60px)"
      default-active="2"
      class="el-menu-vertical-demo">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><IconMenu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import {Document, Location, Setting , Menu as IconMenu} from "@element-plus/icons-vue";

export default {
  name:"Aside",
  components: {Setting, Document, Location,IconMenu}
}

</script>

<style>
#Aside{
  margin-left: 20px;
}
</style>