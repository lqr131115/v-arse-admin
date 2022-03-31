<template>
    <div>
        <m-table
            :data="data"
            :options="options"
            stripe
            editable
            pagination
            :pageOptions="pageOptions"
            :editRowActionIndex="editRowActionIndex"
            @on-save-column-edit="onSaveColumnEdit"
            @on-close-column-edit="onCloseColumnEdit"
            @on-pagesize-change="onPageSizeChange"
            @on-current-page-change="onCurrentPageChange"
        >
            <template #date="{ scope }">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    <span ml10>{{ scope.row.date }}</span>
                </div>
            </template>
            <template #name="{ scope }">
                <el-popover effect="light" trigger="hover" placement="top">
                    <template #default>
                        <p>name: {{ scope.row.name }}</p>
                    </template>
                    <template #reference>
                        <div class="name-wrapper">
                            <el-tag>{{ scope.row.name }}</el-tag>
                        </div>
                    </template>
                </el-popover>
            </template>
            <template #action="{ scope }">
                <el-button type="primary" plain @click="handleRowEdit(scope)" size="small">编辑</el-button>
                <el-button type="danger" @click="handleRowDelete(scope)" size="small">删除</el-button>
            </template>
        </m-table>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { TableOption } from '@/types/component'
import { msgSuccess } from '@/utils/notice';
interface ITableData {
    date: string,
    name: string,
    address: string,
    [key: string]: string
}
let editRowActionIndex = ref<string>('')

const data: ITableData[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
const options: TableOption[] = [
    {
        label: '日期',
        prop: 'date',
        align: 'left',
        slot: 'date',
        editable: true,
    },
    {
        label: '姓名',
        prop: 'name',
        slot: 'name'
    },
    {
        label: '地址',
        prop: 'address'
    },
    {
        label: '操作',
        prop: 'action',
        action: true
    }
]
const pageOptions = {
    pageSizes: [1, 2, 3, 4, 5],
    layout: "total, sizes, prev, pager, next, jumper",
}
const handleRowEdit = (scope: any) => { editRowActionIndex.value = 'edit' }
const handleRowDelete = (scope: any) => { editRowActionIndex.value = 'delete' }
const onSaveColumnEdit = (scope: any) => { data.splice(scope.$index, 1, scope.row) }
const onCloseColumnEdit = (scope: any) => { }
const onCurrentPageChange = (val: number) => { msgSuccess(`页码:${val},Api...`) }
const onPageSizeChange = (val: number) => { msgSuccess(`页大小:${val},Api...`) }
</script>
<style lang='scss' scoped>
</style>