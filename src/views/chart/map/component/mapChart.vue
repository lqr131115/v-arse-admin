<template>
    <v-chart :option="option"></v-chart>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import 'echarts/extension/bmap/bmap'
import { EChartsOption } from 'echarts'
import { mapChartOpts } from '../data'
let option = ref<EChartsOption>(mapChartOpts)
</script>
