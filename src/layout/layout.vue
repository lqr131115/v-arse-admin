<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '@/hooks/setting/useTheme'
import { useAppConfig } from '@/hooks/setting/useAppConfig'
import SideBar from './components/sidebar/sidebar.vue'
import NavBar from './components/navbar/navbar.vue'
import AppMain from './components/appmain/appmain.vue'
import LockPage from '@/views/sys/lock/lockPage.vue'

let collapse = ref<boolean>(false)
const { getNavbarBgColor } = useTheme()
const { getScreenIsLock } = useAppConfig()
const navBarTheme = computed(() => ({ backgroundColor: getNavbarBgColor.value }))
</script>

<template>
  <div class="layout-lock" v-if="getScreenIsLock">
    <LockPage />
  </div>
  <div class="layout" v-else>
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
@use '@/styles/tools/mixin/BEM'as *;
@use '@/styles/tools/mixin/sprite-spirit'as *;

@include b(layout) {
  @include dimensions(100%, 100%);

  .el-container {
    @include dimensions(100%, 100%);

    .el-header {
      padding: 0;
    }

    .el-main {
      padding: 0;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.layout-lock {
  height: 100%;
}
</style>
  