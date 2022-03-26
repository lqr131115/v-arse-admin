<template>
  <el-scrollbar view-class="scrollbar__view--menu" noresize>
    <!-- <span class="logo">LOGO</span> -->
    <m-menu
      :data="menuData"
      :collapse="collapse"
      :defaultActive="defaultActive"
      router
      active-text-color="#ffd04b"
    >
      <template #logo>
        <el-menu-item index="/">
          <img src="https://element-plus.gitee.io/images/element-plus-logo.svg" alt="logo" />
        </el-menu-item>
      </template>
    </m-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter, } from 'vue-router'
import { filterRoutes, generateMenus, formatMenus } from '@/utils/route'
interface ISidebarProps { collapse: boolean }
defineProps<ISidebarProps>();
const router = useRouter()
const route = useRoute()
const menuData = computed(() => (formatMenus(generateMenus(filterRoutes(router.getRoutes())))))
const defaultActive = computed(() => route.path)

</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
}
</style>

<style lang="scss">
.scrollbar__view--menu {
  height: 100%;
}
</style>