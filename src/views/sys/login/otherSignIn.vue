<template>
   <div>
      <el-divider>其他登录方式</el-divider>
      <div class="singIn">
         <span>
            <svg-icon name="github" :size="2"></svg-icon>
         </span>
         <span>
            <svg-icon name="weixin" :size="2"></svg-icon>
         </span>
         <span>
            <svg-icon name="alipay" :size="2"></svg-icon>
         </span>
         <span>
            <svg-icon name="weibo" :size="2"></svg-icon>
         </span>
         <span>
            <svg-icon name="google" :size="2"></svg-icon>
         </span>
      </div>
   </div>
</template>
<script lang='ts' setup>
import { useTheme } from '@/hooks/setting/useTheme'
const { getAppThemeColor } = useTheme()
</script>
<style lang='scss' scoped>
.singIn {
   width: 100%;
   display: flex;
   justify-content: space-evenly;

   span:hover {
      cursor: pointer;
      color: v-bind(getAppThemeColor);
   }
}
</style>