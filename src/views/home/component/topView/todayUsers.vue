<template>
  <c-common-card title="今日交易用户数" value="1,231">
    <template #chart>
      <v-chart class="chart" :option="option" autoresize />
    </template>
    <template #footer>
      <span>昨日交易用户数&nbsp;</span>
      <span class="emphasis">776</span>
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
    data: [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
      '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
    ],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  series: [
    {
      type: 'bar',
      itemStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      data: [
        120, 200, 80, 110, 70, 150, 80,
        70, 110, 130, 100, 140, 90, 100
      ],
    }
  ],
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
</script>

<style lang="scss" scoped>
</style>
