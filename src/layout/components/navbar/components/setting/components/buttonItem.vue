<template>
    <div class="buttonItem">
        <span>{{ title }}</span>
        <el-button size="small" :type="type" @click.stop="handleClick">{{ text }}</el-button>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { HandlerEnum } from "../enum"
import { baseHandler } from "../handler"
const props = defineProps({
    event: {
        type: String as PropType<HandlerEnum>,
    },
    title: {
        type: String,
    },
    type: {
        type: String,
        default: 'text'
    },
    text: {
        type: String
    }
}
)
const handleClick = () => { props.event && baseHandler(props.event) }

</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(buttonItem) {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}
</style>