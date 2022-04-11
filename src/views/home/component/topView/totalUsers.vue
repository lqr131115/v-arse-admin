<template>
  <c-common-card title="累计用户数" value="76,433">
    <template #chart>
      <v-chart class="chart" :option="option" autoresize/>
    </template>
    <template #footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">23.5%</span>
        <div class="increase" />
        <span class="month">月同比</span>
        <span class="emphasis">12.2%</span>
        <div class="decrease" />
      </div>
    </template>
  </c-common-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
const option = ref<EChartsOption>({
  xAxis: {
    type: 'value',
    boundaryGap: false,
    show: false,
  },
  yAxis: {
    type: 'category',
    show: false
  },
  grid: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  series: [
    {
      type: 'bar',
      stack: '总量',
      barWidth: 15,
      itemStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      data: [220],
    },
    {
      type: 'bar',
      stack: '总量',
      itemStyle: {
        opacity: 0.8,
        color: '#eee'
      },
      data: [290],
    },
  ]
});
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
