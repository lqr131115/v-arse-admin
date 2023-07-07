<template>
  <c-common-chart title="今日交易用户数" value="1,231">
    <template #chart>
      <v-chart class="chart" :option="option" autoresize />
    </template>
    <template #footer>
      <span>昨日交易用户数&nbsp;</span>
      <span class="emphasis">776</span>
    </template>
  </c-common-chart>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as echarts from 'echarts'
import { getTodayUsersOpts } from '../data'
const option = ref<echarts.EChartsOption>(getTodayUsersOpts(echarts));
</script>

<style lang="scss" scoped>
</style>
