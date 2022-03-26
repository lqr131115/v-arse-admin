<template>
    <el-tooltip class="box-item" effect="dark" :content="t('header.guide')">
        <svg-icon name="guide" style="font-size: 1.2em;" @click="guide"></svg-icon>
    </el-tooltip>
</template>
<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const guide = () => { alert`guide` }
</script>
<style lang='scss' scoped>
</style>