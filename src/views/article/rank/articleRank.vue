<template>
    <div class="article-rank">
        <m-table :data="data" :options="options" :rowOperation="rowOperation" border dynamic>
            <template #ranking="{ scope }">
                <el-tag type="danger">{{ scope.row.ranking }}</el-tag>
            </template>
            <template #public-date="{ scope }">
                <span>{{ formatTimeStamp(scope.row.publicDate) }}</span>
            </template>
            <template #action="{ scope }">
                <el-button type="primary" @click="handleRowCheck(scope)" size="small">查看</el-button>
                <el-button type="danger" @click="handleRowDelete(scope)" size="small">删除</el-button>
            </template>
        </m-table>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { Article } from '@/mock/model'
import { getArticleList } from '@/api/article';
import { formatTimeStamp } from '@/utils/moment';
import type { TableOption } from '@/types/component'

const data = ref<Article[]>([])
const rowOperation = ref<string>('')
const options: TableOption[] = [
    {
        prop: 'ranking',
        slot: 'ranking',
        label: '排名',
    },
    {
        prop: 'title',
        label: '标题',
    },
    {
        prop: 'author',
        label: '作者',
    },
    {
        prop: 'publicDate',
        slot: 'public-date',
        label: '发布时间',
    },

    {
        prop: 'desc',
        label: '简介',
    },
    {
        prop: 'action',
        label: '操作',
        action: true
    }
]
const _getArticleList = async () => {
    const res = await getArticleList()
    data.value = res.data
}
const handleRowCheck = (scope: any) => { rowOperation.value = 'check' }
const handleRowDelete = (scope: any) => { rowOperation.value = 'delete' }
onMounted(() => {
    _getArticleList()
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;

@include b(article-rank) {
    padding: 10px;
}
</style>