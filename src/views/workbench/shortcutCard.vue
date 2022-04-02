<template>
   <m-card>
      <template #header>
         <div class="header">
            <span>快捷导航</span>
         </div>
      </template>
      <template #body>
         <el-row class="body">
            <el-col
               :span="8"
               class="card"
               v-for="item in navItems"
               :key="item.icon"
               @click="handleClick(item.link)"
            >
               <svg-icon :name="item.icon" :size="1.5" :color="item.color"></svg-icon>
               <span fz14 mt12>{{ item.title }}</span>
            </el-col>
         </el-row>
      </template>
   </m-card>
</template>
<script lang='ts' setup>
import { useRouter } from 'vue-router';
import { navItems } from './data'
const router = useRouter()
const handleClick = (path: string) => { router.push(path) }
</script>
<style lang='scss' scoped>
.body {
   display: flex;
   .card {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #e6e6e6;
      cursor: pointer;
      &:hover {
         box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      .card__title {
         display: flex;
         align-items: center;
      }
   }
}
</style>