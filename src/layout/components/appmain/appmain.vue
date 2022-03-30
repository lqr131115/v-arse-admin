<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { useAppStore } from '@/store/app';
import { inWhiteList } from '@/utils/tabs'
import { genRouteTitle, watchSwitchLanguage } from '@/utils/i18n'
import MultipleTabs from './components/multiple-tabs/multiple-tabs.vue'
import { useConfig } from '@/hooks';

const route = useRoute()
const appStore = useAppStore()
const { showMultipleTabs } = useConfig()
const genItemTitle = (route: RouteLocationNormalizedLoaded): string => {
  let result = ''
  if (route.meta && route.meta.title) {
    result = genRouteTitle(route.meta.title as string)
  }
  // else {
  //   const pathArr = route.path.split('/')
  //   result = pathArr[pathArr.length - 1]
  // }
  return result
}
watch(() => route, (to, from) => {
  if (inWhiteList(to.path)) {
    return
  }
  const { fullPath, path, name, meta, params, query } = to
  appStore.addTabItem({
    fullPath, path, name, meta, params, query,
    title: genItemTitle(to)
  })
}, { deep: true })

watchSwitchLanguage(() => {
  let oldList = appStore.getTabList
  oldList = oldList.map((route: any) => {
    return { ...route, title: genRouteTitle(route.meta.title as string) }
  })
  appStore.setTabList(oldList)
})
</script>

<template>
  <MultipleTabs v-if="showMultipleTabs" />
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component"></component>
            <template #fallback>
              <div>Loading...</div>
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
  <!-- <el-backtop /> -->
</template>

<style lang="scss" scoped>
</style>
