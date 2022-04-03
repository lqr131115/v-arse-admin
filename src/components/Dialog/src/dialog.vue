<template>
   <el-dialog :class="{ 'm--dialog': isScroll }" v-model="dVisible" v-bind="$attrs">
      <template #title>
         <slot name="title"></slot>
      </template>
      <template #default>
         <slot name="default"></slot>
      </template>
      <template #footer>
         <slot name="footer"></slot>
      </template>
   </el-dialog>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';

const props = defineProps({
   isScroll: {
      type: Boolean,
      default: false
   },
   visible: {
      type: Boolean,
      default: false
   }
})
const emits = defineEmits(['update:visible'])
const dVisible = ref<boolean>(props.visible)
watch(() => props.visible, (newVal) => {
   dVisible.value = newVal
})
watch(() => dVisible.value, (newVal) => {
   emits('update:visible', newVal)
})
</script>
<style lang='scss' scoped>
.m--dialog {
   :deep(.el-dialog__body) {
      height: 400px;
      overflow-y: scroll;
   }
}
</style>