<template>
    <c-common-card2 :style="{ width: '100%' }" shadow="hover">
        <template #header>
            <div class="header-wrapper">
                <div class="header-title">用户月同比增长</div>
            </div>
        </template>
        <template #default>
            <div class="liquid-wrapper" id="monthincrease"></div>
        </template>
    </c-common-card2>
</template>
<script lang='ts' setup>
import * as echarts from 'echarts';
import 'echarts-liquidfill'
import { onMounted } from 'vue';
import { monthIncreaseOpts } from '../data'


onMounted(() => {
    const ele = document.getElementById('monthincrease')!
    const chart = echarts.init(ele);
    chart.setOption(monthIncreaseOpts)
})

</script>
<style lang='scss' scoped>
.liquid-wrapper {
    height: 200px;
    width: 100%;
}
</style>