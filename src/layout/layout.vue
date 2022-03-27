<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '@/store/theme'
import SideBar from './components/sidebar/sidebar.vue'
import NavBar from './components/navbar/navbar.vue'
import AppMain from './components/appmain/appmain.vue'
const themeStore = useThemeStore()
let collapse = ref<boolean>(false)
const navBarTheme = computed(() => {
  const backgroundColor = themeStore.getNavbarTheme.navBarBgColor
  return {
    backgroundColor
  }
})
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside width="auto">
        <side-bar :collapse="collapse"></side-bar>
      </el-aside>
      <el-container>
        <el-header :style="navBarTheme">
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
@use '@/styles/tools/mixin/BEM' as *;
@use '@/styles/tools/mixin/sprite-spirit' as *;
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
  