<template>
    <el-row >
        <el-col :span="6">
            <el-card shadow="hover">
                <TotalSales />
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover">
                <TotalOrders />
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover">
                <TodayUsers />
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover">
                <TotalUsers />
            </el-card>
        </el-col>
    </el-row>
</template>
<script lang='ts' setup>
import TotalSales from './totalSales.vue';
import TotalOrders from './totalOrders.vue';
import TodayUsers from './todayUsers.vue';
import TotalUsers from './totalUsers.vue';
</script>
<style lang='scss' scoped>
</style>
