<template>
    <m-dialog v-model:visible="dVisible">
        <template #title>
            <span>角色列表</span>
        </template>
    </m-dialog>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
const emits = defineEmits(['update:visible'])
const dVisible = ref<boolean>(props.visible)
watch(() => props.visible, () => {
    dVisible.value = props.visible
})
watch(() => dVisible.value, (newVal) => {
   emits('update:visible', newVal)
})
</script>
<style lang='scss' scoped>
</style>