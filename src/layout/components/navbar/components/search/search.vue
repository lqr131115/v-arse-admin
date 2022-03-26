<template>
    <el-tooltip class="box-item" effect="dark" :content="$t('header.search')">
        <svg-icon name="search" style="font-size: 1.3em;" @click="search"></svg-icon>
    </el-tooltip>
</template>
<script lang='ts' setup>
const search = () => { alert`search` }
</script>
<style lang='scss' scoped>
</style>