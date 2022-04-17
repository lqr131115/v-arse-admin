<template>
    <v-chart v-if="option" :option="option"></v-chart>
</template>
<script lang='ts' setup>
import { ref, onMounted } from 'vue';
import 'echarts/extension/bmap/bmap'
import { EChartsOption } from 'echarts'
import { mapChartOpts } from '../data'
import { initBMapScript } from '@/utils/script'
let option = ref<EChartsOption>()
onMounted(() => {
    initBMapScript().then(() => {
        option.value = mapChartOpts
    }).catch((err) => {
        console.log('err', err);
    })
})
</script>
