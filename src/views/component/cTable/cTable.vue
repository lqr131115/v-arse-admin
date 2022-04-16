<template>
    <div class="table">
        <el-card>
            <div class="table__setting">
                <el-divider content-position="left">设置</el-divider>
                <span>列动态展示:
                    <el-switch v-model="dynamic" class="ml-2" inline-prompt active-text="开" inactive-text="关" />
                </span>
                <el-divider direction="vertical" />
                <span>行可拖拽:
                    <el-switch v-model="draggable" class="ml-2" inline-prompt active-text="开" inactive-text="关" />
                </span>
                <el-divider direction="vertical" />
                <span>分页器:
                    <el-switch v-model="pagination" class="ml-2" inline-prompt active-text="开" inactive-text="关" />
                </span>
            </div>
            <m-table :data="data" :options="options" stripe editable :dynamic="dynamic" :draggable="draggable"
                :pagination="pagination" :pageOptions="pageOptions" :rowOperation="rowOperation" :sortOptions="sortOptions"
                type="index"
                @on-save-column-edit="onSaveColumnEdit" @on-close-column-edit="onCloseColumnEdit"
                @on-pagesize-change="onPageSizeChange" @on-current-page-change="onCurrentPageChange">
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
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { msgSuccess } from '@/utils/notice';
import { data, options } from './data'
import type { Options, SortableEvent } from 'sortablejs'

const rowOperation = ref<string>('')
const dynamic = ref<boolean>(false)
const pagination = ref<boolean>(false)
const draggable = ref<boolean>(false)
const pageOptions = {
    pageSizes: [1, 2, 3, 4, 5],
    layout: "total, sizes, prev, pager, next, jumper",
}
const onSortEnd = (e: SortableEvent) => {
    const { oldIndex, newIndex } = e
    if (oldIndex === newIndex) {
        return
    }
    // TODO: 调用排序Api更新
    msgSuccess(`oldIndex:${oldIndex},newIndex:${newIndex},调用Api更新...`)
    // 重新获取数据,如排名没有即使更新 可先置空 data.value = []
    // _getArticleList()
}
const sortOptions: Options = {
    ghostClass: 'sortable-ghost',
    onEnd: onSortEnd
}
const handleRowEdit = (scope: any) => { rowOperation.value = 'edit' }
const handleRowDelete = (scope: any) => { rowOperation.value = 'delete' }
const onSaveColumnEdit = (scope: any) => { data.splice(scope.$index, 1, scope.row) }
const onCloseColumnEdit = (scope: any) => { }
const onCurrentPageChange = (val: number) => { msgSuccess(`页码:${val},Api...`) }
const onPageSizeChange = (val: number) => { msgSuccess(`页大小:${val},Api...`) }
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(table) {
    padding: 10px;

    @include e(setting) {
        padding: 0 10px;
        margin-bottom: 20px;
        span{
            padding:  0 5px;
        }
    }
}
</style>