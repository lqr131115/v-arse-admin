<template>
    <el-descriptions :border="border" :column="column" v-bind="$attrs">
        <template #title v-if="$slots.title">
            <slot name="title"></slot>
        </template>
        <template #extra v-if="$slots.extra">
            <slot name="extra"></slot>
        </template>
        <el-descriptions-item
            v-for="item in data"
            :key="item.label"
            :width="item.width"
            :align="item.align"
            :label-align="item.labelAlign"
            :span="item.span"
        >
            <template #label>
                <el-icon mr5 v-if="item.icon">
                    <component :is="item.icon" />
                </el-icon>
                <span>{{ item.label }}</span>
            </template>
            <template #default>
                <span v-if="item.slot">
                    <slot :name="item.slot" :item="item"></slot>
                </span>
                <span v-else>{{ item.content }}</span>
            </template>
        </el-descriptions-item>
    </el-descriptions>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { DescriptionsItem } from '@/types/component'
defineProps({
    data: {
        type: Array as PropType<DescriptionsItem[]>,
        default: () => []
    },
    border: {
        type: Boolean,
        default: true,
    },
    column: {
        type: Number,
        default: 3,
    }
})
</script>
<style lang="scss" scoped>
</style>