<template>
  <el-scrollbar view-class="scrollbar__view--menu" noresize>
    <!-- <span class="logo">LOGO</span> -->
    <m-menu
      :data="menuData"
      :collapse="collapse"
      :defaultActive="defaultActive"
      :background-color="menuBgColor"
      :text-color="textColor"
      :active-text-color="textActiveColor"
      router
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
import { useThemeStore } from '@/store/theme'
import { filterRoutes, generateMenus, formatMenus } from '@/utils/route'
interface ISidebarProps { collapse: boolean }
defineProps<ISidebarProps>();
const router = useRouter()
const route = useRoute()
const themeStore = useThemeStore()
const menuData = computed(() => (formatMenus(generateMenus(filterRoutes(router.getRoutes())))))
const menuBgColor = computed(() => themeStore.getMenuTheme.menuBgColor)
const textActiveColor = computed(() => themeStore.getMenuTheme.textActiveColor)
const textColor = computed(() => themeStore.getMenuTheme.textColor)
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