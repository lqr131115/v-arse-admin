<template>
   <div>
      <el-row :gutter="20">
         <el-col :span="12">
            <c-keyword-search />
         </el-col>
         <el-col :span="12">
            <c-category-rank />
         </el-col>
      </el-row>
   </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>

<style lang="scss">
.header-title {
   font-size: 14px;
   font-weight: bold;
}

.header-wrapper {
   display: flex;
   height: 100%;
   align-items: center;
   justify-content: space-between;
}
</style>