<template>
    <el-tooltip class="box-item" effect="dark" :content="$t('header.guide')">
        <svg-icon name="guide" style="font-size: 1.2em;" @click="guide"></svg-icon>
    </el-tooltip>
</template>
<script lang='ts' setup>
const guide = () => { alert`guide` }
</script>
<style lang='scss' scoped>
</style>