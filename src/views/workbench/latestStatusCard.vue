<template>
   <m-card>
      <template #header>
         <div class="header">
            <span>最新动态</span>
            <el-button type="text">更多</el-button>
         </div>
      </template>
      <template #body>
         <div class="item" v-for="item in dynamicInfoItems" :key="item.avatar">
            <el-avatar :size="40" :src="item.avatar"></el-avatar>
            <div class="item__content">
               <div class="item__content--desc">
                  <span>{{ item.name }}</span>
                  <span ml5 v-html="item.desc"></span>
               </div>
               <span class="item__content--date">{{ item.date }}</span>
            </div>
         </div>
      </template>
   </m-card>
</template>
<script lang='ts' setup>
import { dynamicInfoItems } from './data'
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(item) {
   display: flex;
   padding: 10px 20px;
   border-bottom: 1px solid #eee;
   align-items: center;
   cursor: pointer;
   &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   }
   @include e(content) {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      @include m(desc) {
         font-size: 14px;
         margin-bottom: 10px;
      }

      @include m(date) {
         font-size: 12px;
         color: #999;
      }
   }
}
</style>