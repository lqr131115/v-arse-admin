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
                  <el-date-picker
                     v-model="datetime"
                     type="daterange"
                     unlink-panels
                     range-separator="-"
                     start-placeholder="开始日期"
                     end-placeholder="结束日期"
                     :shortcuts="shortcuts"
                  ></el-date-picker>
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
import { EChartsOption } from 'echarts'

type rankItem = {
   no: number,
   name: string,
   money: string
}

let activeIndex = ref<string>('sale')
let radio = ref<string>('today')
let datetime = ref<string>('')
let option = ref<EChartsOption>({
   title: {
      text: '年度销售额',
      textStyle:{
         color:'#000'
      }
   },
   xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
         show: false
      },
      axisLine: {
         show: false
      },
   },
   yAxis: {
      axisLine: {
         show: false
      },
      axisTick: {
         show: false
      },
      axisLabel: {
         color: '#999'
      }
   },
   tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: 'shadow'
      }
   },
   dataZoom: [
      {
         type: 'inside'
      }
   ],
   grid: {
      left: 40,
      right: 10,
   },
   series: [
      {
         type: 'bar',
         barWidth: 20,
         itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
               { offset: 0, color: '#83bff6' },
               { offset: 0.5, color: '#188df0' },
               { offset: 1, color: '#188df0' }
            ])
         },
         emphasis: {
            itemStyle: {
               color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
               ])
            }
         },
         data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
      }
   ]
})
let rankData = ref<rankItem[]>(
   [
      {
         no: 1,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 2,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 3,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 4,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 5,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 6,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 7,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 8,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 9,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 10,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 11,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 12,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 13,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 14,
         name: '麦当劳',
         money: '$ 1,234'
      },
      {
         no: 15,
         name: '麦当劳',
         money: '$ 1,234'
      },
   ]
)
const shortcuts = [
   {
      text: '前一周',
      value: () => {
         const end = new Date()
         const start = new Date()
         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
         return [start, end]
      },
   },
   {
      text: '前一个月',
      value: () => {
         const end = new Date()
         const start = new Date()
         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
         return [start, end]
      },
   },
   {
      text: '前三个月',
      value: () => {
         const end = new Date()
         const start = new Date()
         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
         return [start, end]
      },
   },
]
</script>
<style lang='scss' scoped>
.salesview-wrapper {
   margin: 20px 0;

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
      &::-webkit-scrollbar{
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