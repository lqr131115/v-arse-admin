<template>
   <div class="salesview-wrapper">
      <el-card shadow="hover">
         <template #header>
            <el-row align="middle">
               <el-col :span="18">
                  <el-row align="middle">
                     <el-col :span="12">
                        <el-menu :default-active="activeIndex" mode="horizontal">
                           <el-menu-item index="sale">销售额</el-menu-item>
                           <el-menu-item index="pv">访问量</el-menu-item>
                        </el-menu>
                     </el-col>
                     <el-col :span="12">
                        <el-row justify="end">
                           <el-radio-group v-model="radio" :style="{ marginRight: '20px' }">
                              <el-radio-button label="today">今日</el-radio-button>
                              <el-radio-button label="week">本周</el-radio-button>
                              <el-radio-button label="month">本月</el-radio-button>
                              <el-radio-button label="year">今年</el-radio-button>
                           </el-radio-group>
                        </el-row>
                     </el-col>
                  </el-row>
               </el-col>
               <el-col :span="6">
                  <el-date-picker v-model="datetime" type="daterange" unlink-panels range-separator="-"
                     start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="shortcuts"></el-date-picker>
               </el-col>
            </el-row>
         </template>
         <el-row>
            <el-col :span="18">
               <v-chart class="echart" :option="option" autoresize></v-chart>
            </el-col>
            <el-col :span="6">
               <div class="sales-view-list">
                  <div class="sales-view-title">排行榜</div>
                  <div class="list-item-wrapper">
                     <div class="list-item" v-for="item in rankData" :key="item.no">
                        <div :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']">{{ item.no }}</div>
                        <div class="list-item-name">{{ item.name }}</div>
                        <div class="list-item-money">{{ item.money }}</div>
                     </div>
                  </div>
               </div>
            </el-col>
         </el-row>
      </el-card>
   </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import {
   getSalesViewOpts,
   rankData,
   shortcuts
} from '../data'

let activeIndex = ref<string>('sale')
let radio = ref<string>('today')
let datetime = ref<string>('')
const option = ref<echarts.EChartsOption>(getSalesViewOpts(echarts))
</script>
<style lang='scss' scoped>
.salesview-wrapper {
   margin: 10px 0;

   :deep(.el-card__header) {
      padding: 0;

      .el-menu {
         height: 50px;
         border: none;
      }
   }

   .echart {
      height: 400px;
      width: 100%;
   }

   .sales-view-list {
      padding-left: 20px;
      max-height: 360px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
         display: none;
      }

      .sales-view-title {
         font-size: 18px;
         color: #000;
         font-weight: bold;
      }

      .list-item-wrapper {
         margin-top: 15px;

         .list-item {
            display: flex;
            align-items: center;
            font-size: 12px;
            height: 20px;
            padding: 6px 20px 6px 0;

            .list-item-no {
               display: flex;
               align-items: center;
               justify-content: center;
               width: 20px;
               height: 20px;
               color: #333;

               &.top-no {
                  background: #000;
                  border-radius: 50%;
                  color: #fff;
                  font-weight: 500;
               }
            }

            .list-item-name {
               margin-left: 10px;
               color: #333;
            }

            .list-item-money {
               flex: 1;
               text-align: right;
            }
         }
      }
   }
}
</style>