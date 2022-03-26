<template>
  <div>
    <el-checkbox v-model="checked2">Not disabled</el-checkbox>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>
<script lang='ts' setup>
import {ref} from 'vue'
let checked2 = ref<boolean>(false)
</script>
<style lang='scss' scoped>
</style>