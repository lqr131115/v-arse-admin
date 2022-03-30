<template>
    <div class="selectItem">
        <span>{{ title }}</span>
        <el-select
            v-model="bindValue"
            size="small"
            clearable
            @change="handleChange"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { PropType, watch, ref } from 'vue'
import { HandlerEnum } from "../enum"
import { baseHandler } from "../handler"
import type { LabelValueOptions, } from '@/types/app'
const props = defineProps({
    event: {
        type: String as PropType<HandlerEnum>,
    },
    title: {
        type: String,
    },
    def: {
        type: [String, Number] as PropType<string | number>,
    },
    options: {
        type: Array as PropType<LabelValueOptions>,
        default: () => [],
    },
}
)
let bindValue = ref<string | number>()
const handleChange = (val: string | number) => { props.event && val && baseHandler(props.event, val) }
watch(() => props.def, newVal => {
    bindValue.value = newVal
}, { immediate: true })
</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(selectItem) {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
</style>