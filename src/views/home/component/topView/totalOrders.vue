<template>
  <c-common-chart title="累计订单量" value="45,312">
    <template #chart>
      <v-chart class="chart" :option="option" autoresize />
    </template>
    <template #footer>
      <span>昨日订单量&nbsp;</span>
      <span class="emphasis">2,123</span>
    </template>
  </c-common-chart>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as echarts from 'echarts'
import {getTotalOrdersOpts} from '../data'
const option = ref<echarts.EChartsOption>(getTotalOrdersOpts(echarts));

</script>

<style lang="scss" scoped>
</style>