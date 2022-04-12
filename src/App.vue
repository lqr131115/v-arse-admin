<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from '@/store/modules/theme';
import { genNewStyle, writeNewStyle } from '@/utils/theme'
const themeStore = useThemeStore()
onMounted(async () => {
  const primary = themeStore.getAppTheme.primary!
  if (primary !== '#409eff') {
    const newStyle = await genNewStyle(primary)
    writeNewStyle(newStyle)
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang='scss'>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
}
</style>
