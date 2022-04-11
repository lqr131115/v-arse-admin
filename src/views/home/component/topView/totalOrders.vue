<template>
  <c-common-card title="累计订单量" value="45,312">
    <template #chart>
      <v-chart class="chart" :option="option" autoresize />
    </template>
    <template #footer>
      <span>昨日订单量&nbsp;</span>
      <span class="emphasis">2,123</span>
    </template>
  </c-common-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
const option = ref<EChartsOption>({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    show: false
  },
  yAxis: {
    show: false,
  },
  series: [
    {
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 0
      },
      itemStyle: {
        opacity: 0,
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      data: [320, 132, 201, 334, 190, 130, 220, 140, 310, 157]
    }
  ],
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
</script>

<style lang="scss" scoped>
</style>