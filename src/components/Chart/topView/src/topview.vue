<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-card shadow="hover">
                    <c-total-sales></c-total-sales>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <c-total-orders></c-total-orders>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <c-today-users></c-today-users>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <c-total-users></c-total-users>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>
