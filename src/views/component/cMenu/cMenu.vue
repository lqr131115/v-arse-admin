<template>
    <div class="menu">
        <el-divider content-position="left">无限菜单</el-divider>
        <InfiniteMenu/>
    </div>
</template>
<script lang='ts' setup>
import InfiniteMenu from './infiniteMenu.vue'

</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(menu) {
    padding: 10px
}
</style>