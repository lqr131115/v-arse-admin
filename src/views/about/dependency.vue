<template>
    <el-card shadow="always">
        <template #header>
            <span>{{ title }}</span>
        </template>
        <m-descriptions :data="data" :column="2"></m-descriptions>
    </el-card>
</template>
<script lang='ts' setup>

import { onMounted, ref } from 'vue';
import { getDependencies, genDependenciesDesData } from './utils';
import type { DescriptionsItem } from '@/types/component'
const props = defineProps({
    title: {
        type: String,
    },
    key: {
        type: String,
        default: 'dependencies'
    }
})
let data = ref<DescriptionsItem[]>([])
onMounted(async () => {
    const dep = await getDependencies(props.key)
    data.value = genDependenciesDesData(dep)
})
</script>
<style lang='scss' scoped>
</style>