<template>
   <div class="modal">
      <el-dialog
         v-model="dVisible"
         :custom-class="isScroll ? 'body--scroll' : ''"
         :draggable="draggable"
         v-bind="$attrs"
         @open="onOpen"
         @close="onClose"
      >
         <template #title v-if="$slots.title">
            <slot name="title"></slot>
         </template>
         <template #default v-if="$slots.default">
            <slot name="default"></slot>
         </template>
         <template #footer v-if="$slots.footer">
            <slot name="footer"></slot>
         </template>
      </el-dialog>
   </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';

const props = defineProps({
   isScroll: {
      type: Boolean,
      default: false
   },
   draggable: {
      type: Boolean,
      default: true
   },
   visible: {
      type: Boolean,
      default: false
   }
})
const emits = defineEmits(['update:visible', 'closed', 'open', 'close'])
const dVisible = ref<boolean>(props.visible)
const onOpen = () => { emits('open') }
const onClose = () => { emits('close') }
watch(() => props.visible, (newVal) => {
   dVisible.value = newVal
})
watch(() => dVisible.value, (newVal) => {
   emits('update:visible', newVal)
})
</script>
<style lang='scss' scoped>
.modal {
   :deep(.body--scroll) {
      .el-dialog__body {
         max-height: 400px;
         overflow-y: scroll;
      }
      .el-dialog__body::-webkit-scrollbar {
         display: none;
      }
   }
}
</style>