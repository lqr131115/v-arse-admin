<template>
   <m-card>
      <template #header>
         <div class="header">
            <span>项目</span>
            <el-button type="text">更多</el-button>
         </div>
      </template>
      <template #body>
         <h3 v-for="i in 6" :key="i">{{i}}</h3>
      </template>
   </m-card>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>

</style>