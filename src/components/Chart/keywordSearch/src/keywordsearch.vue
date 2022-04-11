<template>
    <div class="box-card">
        <el-card shadow="hover">
            <template #header>
                <div class="header-warpper">
                    <div class="header-title">关键字搜索</div>
                </div>
            </template>
            <div>
                <el-row :gutter="10">
                    <el-col :span="12">
                        <v-chart class="echart" :option="option" autoresize />
                    </el-col>
                    <el-col :span="12">
                        <v-chart class="echart" :option="option" autoresize />
                    </el-col>
                </el-row>
                <el-row>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="Date" />
                        <el-table-column prop="name" label="Name" />
                        <el-table-column prop="address" label="Address" />
                    </el-table>
                    <el-row class="pagination-wrapper" justify="end">
                        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                    </el-row>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'
let option = ref<EChartsOption>({
    title: {
        text: '搜索用户数',
        textStyle: {
            color: '#666',
            fontSize: 12
        },
        subtext: '93,132',
        subtextStyle: {
            color: '#000',
            fontSize: 28
        }
    },
    dataset: {
        source: [
            ["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73],
            ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130],
            ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309],
            ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94],
            ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85],
            ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82],
            ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66],
            ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131],
            ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77],
            ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]
        ],
    },
    xAxis: {
        show: false,
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        show: false
    },
    grid: {
        left: 0,
        top: 20,
        right: 0,
        bottom: 0
    },
    series: [
        {
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 203)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 203)'
                    }
                ])
            },
            itemStyle: {
                opacity: 0
            },
            encode: { x: 0, y: 1 }
        }
    ]
})
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
<style lang='scss' scoped>
.box-card {
    :deep(.el-card__header) {
        height: 50px;
    }
    :deep(.el-card__body) {
        height: 400px;
    }

    .echart {
        height: 120px;
        width: 100%;
    }
    .pagination-wrapper {
        flex: 1;
        padding: 10px 0;
    }
}
</style>