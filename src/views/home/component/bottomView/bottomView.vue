<template>
   <el-row :gutter="10">
      <el-col :span="12">
         <KeywordSearch />
      </el-col>
      <el-col :span="12">
         <CategoryRank />
      </el-col>
   </el-row>
</template>
<script lang='ts' setup>
import CategoryRank from './categoryRank.vue';
import KeywordSearch from './keywordSearch.vue'
</script>
<style lang='scss' scoped>
</style>
