<template>
    <div class="box-card">
        <el-card v-bind="$attrs">
            <template #header>
                <slot name="header"></slot>
            </template>
            <slot name="default"></slot>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.box-card {
    :deep(.el-card__header) {
        height: 50px;
    }
}
</style>