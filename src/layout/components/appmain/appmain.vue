<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { useTabStore } from '@/store/tab';
import { inWhiteList } from '@/utils/tabs'
import { genRouteTitle, watchSwitchLanguage } from '@/utils/i18n'
import { useTabs } from '@/hooks';
import MultipleTabs from './components/multiple-tabs/multiple-tabs.vue'

const route = useRoute()
const tabStore = useTabStore()
const { showMultipleTabs } = useTabs()
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
  tabStore.addTabItem({
    fullPath, path, name, meta, params, query,
    title: genItemTitle(to)
  })
}, { deep: true })

watchSwitchLanguage(() => {
  let oldList = tabStore.getTabList
  oldList = oldList.map((route: any) => {
    return { ...route, title: genRouteTitle(route.meta.title as string) }
  })
  tabStore.setTabList(oldList)
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
