<template>
   <div class="parser">
      <FileParser />
   </div>
</template>
<script lang='ts' setup>
import FileParser from './fileParser.vue'

</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b("parser") {
   padding: 10px;
   display: flex;
   flex-flow: row wrap;
}
</style>