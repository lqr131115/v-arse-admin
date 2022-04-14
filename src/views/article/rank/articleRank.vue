<template>
    <div class="article-rank">
        <m-table :data="data" :options="options" :rowOperation="rowOperation" :sortOptions="sortOptions" border dynamic
            draggable>
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
import { useRouter } from 'vue-router';
import { Article } from '@/mock/model'
import { getArticleList } from '@/api/article';
import { formatTimeStamp } from '@/utils/moment';
import { msgSuccess } from '@/utils/notice';
import type { TableOption } from '@/types/component'
import type { Options, SortableEvent } from 'sortablejs'
import { PageEnum } from '@/enums/pageEnum';
const router = useRouter()
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
const handleRowCheck = (scope: any) => {
    rowOperation.value = 'check'
    router.push(`${PageEnum.ARTICLE_DETAIL}/${scope.row._id}`)
}
const handleRowDelete = (scope: any) => { rowOperation.value = 'delete' }
const _getArticleList = async () => {
    const res = await getArticleList()
    data.value = res.data
}
onMounted(() => {
    _getArticleList()
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(article-rank) {
    padding: 10px;
}
</style>