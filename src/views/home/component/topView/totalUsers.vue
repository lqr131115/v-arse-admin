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
import {getTotalUsersOpts} from '../data'
const option = ref<echarts.EChartsOption>(getTotalUsersOpts(echarts));
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
