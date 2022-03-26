<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './components/sidebar/sidebar.vue'
import NavBar from './components/navbar/navbar.vue'
import AppMain from './components/appmain/appmain.vue'
// import menuScssVar from '@/styles/setting/menu.scss'
let collapse = ref<boolean>(false)
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="auto">
        <side-bar :collapse="collapse"></side-bar>
      </el-aside>
      <el-container>
        <el-header>
          <nav-bar v-model:collapse="collapse"></nav-bar>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
@include b(layout) {
  @include dimensions(100%, 100%);
  .el-container {
    @include dimensions(100%, 100%);

    .el-header {
      padding: 0;
    }
  }
}
</style>
  