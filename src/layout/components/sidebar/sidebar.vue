<template>
  <el-scrollbar view-class="scrollbar__view--menu" noresize>
    <!-- <span class="logo">LOGO</span> -->
    <m-menu
      :data="menuData"
      :collapse="collapse"
      :defaultActive="defaultActive"
      :background-color="getMenuBgColor"
      :text-color="getMenuTextColor"
      :active-text-color="getMenuActiveTextColor"
      router
    >
      <template #logo v-if="getShowLogo">
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
import { useSetting } from '@/hooks';
import { filterRoutes, generateMenus, formatMenus } from '@/utils/route'
interface ISidebarProps { collapse: boolean }
defineProps<ISidebarProps>();
const router = useRouter()
const route = useRoute()
const { getShowLogo ,getMenuBgColor,getMenuTextColor,getMenuActiveTextColor} = useSetting()
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