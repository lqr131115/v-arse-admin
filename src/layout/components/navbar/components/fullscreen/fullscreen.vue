<template>
   <el-tooltip
      class="box-item"
      effect="dark"
      :content="$t(`header.${isFull ? 'tooltipExitFull' : 'tooltipEntryFull'}`)"
   >
      <svg-icon
         :name="isFull ? 'exit-fullscreen' : 'fullscreen'"
         style="font-size: 1.3em;"
         @click="entryOrExitFull"
      ></svg-icon>
   </el-tooltip>
</template>

<script lang='ts' setup>
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'
let isFull = ref<boolean>(false)
const entryOrExitFull = () => {
   screenfull.toggle()
}

const onChange = () => {
   isFull.value = screenfull.isFullscreen
}
onMounted(() => {
   screenfull.on('change', onChange)
})
onUnmounted(() => {
   screenfull.off('change', onChange)
})
</script>

<style lang='scss' scoped>
</style>