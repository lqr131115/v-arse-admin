<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div>
</template>
<script lang='ts' setup>import { TAG_VIEW_LIST_KEY } from '@/enums/cacheEnum';
import { removeItem } from '@/utils/storage';
import { onMounted } from 'vue';

onMounted(
  () => {
    // removeItem(TAG_VIEW_LIST_KEY)
  }
)
</script>
<style lang='scss' scoped>
</style>