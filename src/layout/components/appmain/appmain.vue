<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useTabStore } from '@/store/tab';
import { inWhiteList } from '@/utils/tabs'
import { genRouteTitle, watchSwitchLanguage } from '@/utils/i18n'
import { useAppConfig, useTabs } from '@/hooks';
import MultipleTabs from './components/multiple-tabs/multiple-tabs.vue'

const route = useRoute()
const tabStore = useTabStore()
const { showMultipleTabs } = useTabs()
const { getAnimationType, getShowQuickTabs } = useAppConfig()
const genItemTitle = (title: string): string => (genRouteTitle(title))
watch(() => route, (to, _) => {
  if (!getShowQuickTabs.value) { return }
  if (inWhiteList(to.path)) { return }
  const title = to.meta && to.meta.title
  if (title) {
    const { fullPath, path, name, meta, params, query } = to
    tabStore.addTabItem({
      fullPath, path, name, meta, params, query,
      title: genItemTitle(title as string)
    })
  } else {
    return
  }
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
  <div class="main">
    <router-view v-slot="{ Component, route }">
      <template v-if="Component">
        <transition :name="getAnimationType">
          <keep-alive>
            <suspense>
              <component :is="Component" :key="route.path"></component>
              <template #fallback>
                <div>Loading...</div>
              </template>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
  <!-- <el-backtop /> -->
</template>

<style lang="scss" scoped>
</style>
