<template>
   <m-card>
      <template #header>
         <div class="header">
            <span>项目</span>
            <el-link type="primary" :underline="false">更多</el-link>
         </div>
      </template>
      <template #body>
         <el-row class="body">
            <el-col :span="8" class="card" v-for="item in groupItems" :key="item.icon">
               <span class="card__title">
                  <svg-icon :name="item.icon" :size="2"></svg-icon>
                  <span ml10>{{ item.title }}</span>
               </span>
               <div class="card__desc">{{ item.desc }}</div>
               <div class="card__bottom">
                  <span>{{ item.date }}</span>
                  <span>{{ item.group }}</span>
               </div>
            </el-col>
         </el-row>
      </template>
   </m-card>
</template>
<script lang='ts' setup>
import { groupItems } from './data'
</script>
<style lang='scss' scoped>

.body {
   display: flex;
   .card {
      height: 150px;
      display: flex;
      padding: 20px;
      flex-direction: column;
      justify-content: space-between;
      border: 1px solid #e6e6e6;
      &:hover {
         box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      .card__title {
         display: flex;
         align-items: center;
      }
      .card__desc {
         display: flex;
         color: rgba(0, 0, 0, 0.45);
      }
      .card__bottom {
         display: flex;
         justify-content: space-between;
         & span {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
         }
      }
   }
}
</style>