<template>
  <el-scrollbar view-class="scrollbar__view--menu" noresize>
    <!-- <span class="logo">LOGO</span> -->
    <m-menu
      id="fifth-menu"
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
          <img src="@/icons/svg/element+.svg" alt="logo" />
        </el-menu-item>
      </template>
    </m-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter, } from 'vue-router'
import { useTheme, } from '@/hooks/setting/useTheme'
import { useAppConfig } from '@/hooks/setting/useAppConfig'
import { filterRoutes, generateMenus, formatMenus } from '@/utils/route'
interface ISidebarProps { collapse: boolean }
defineProps<ISidebarProps>();
const router = useRouter()
const route = useRoute()
const { getMenuBgColor, getMenuTextColor, getMenuActiveTextColor } = useTheme()
const { getShowLogo } = useAppConfig()
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