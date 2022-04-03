<template>
    <el-card :body-style="bodyStyle" shadow="never">
        <template #header>
            <slot name="header"></slot>
        </template>
        <template #default>
            <slot name="body"></slot>
        </template>
    </el-card>
</template>
<script lang='ts' setup>
import { computed } from '@vue/reactivity';
import { PropType } from 'vue';

const props = defineProps({
    shadow: {
        type: String,
        default: 'always'
    },
    bodyStyle: {
        type: Object as PropType<CSSStyleDeclaration>,
        default: () => ({ padding: '0px' })
    },
    headerStyle: {
        type: Object as PropType<CSSStyleDeclaration>,
        default: () => ({ padding: '10px' })
    }
})
const elCardHeaderPadding = computed(() => props.headerStyle.padding)
</script>
<style lang='scss' scoped>
:deep(.el-card__header) {
    padding: v-bind(elCardHeaderPadding);
}
</style>