<template>
   <div class="mapview-wrapper">
      <el-row :gutter="20">
         <el-col :span="19">
            <div class="map-wrapper">
               <c-map-chart></c-map-chart>
            </div>
         </el-col>
         <el-col :span="5">
            <div class="card-wrapper">
               <c-month-increase />
               <c-hot-search />
            </div>
         </el-col>
      </el-row>
   </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.mapview-wrapper {
   margin-top: 20px;
}

.map-wrapper {
   height: 600px;
   width: 100%;
   background-color: #fff;
}
.card-wrapper {
   display: flex;
   height: 600px;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
}
</style>

<style lang="scss">
.header-wrapper {
   display: flex;
   align-items: center;
   height: 100%;
   justify-content: space-between;

   .header-title {
      font-size: 14px;
      font-weight: bold;
   }
}
</style>