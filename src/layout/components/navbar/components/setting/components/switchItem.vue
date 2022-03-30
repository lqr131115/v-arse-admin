<template>
    <div class="switchItem">
        <span>{{ title }}</span>
        <el-switch
            v-model="bindValue"
            inline-prompt
            @change="handleChange"
            :disabled="disabled"
            :active-text="$t('setting.on')"
            :inactive-text="$t('setting.off')"
        />
    </div>
</template>

<script lang="ts" setup>
import { PropType, watch, ref } from 'vue'
import { HandlerEnum } from "../enum"
import { baseHandler } from "../handler"
const props = defineProps({
    event: {
        type: String as PropType<HandlerEnum>,
    },
    disabled: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
    },
    def: {
        type: Boolean,
    }
}
)
let bindValue = ref<boolean>(false)
const handleChange = (val: boolean) => { props.event && baseHandler(props.event, val) }
watch(() => props.def, newVal => {
    bindValue.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(switchItem) {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
</style>