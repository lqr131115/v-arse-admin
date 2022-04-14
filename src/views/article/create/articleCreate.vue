<template>
    <div class="create">
        <el-card shadow="never">
            <h3>I AM CREATE OR EDIT</h3>
            <h2>I AM FROM {{ id ? 'detail' : 'menu' }}</h2>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { Article } from '@/mock/model'
import { getArticleDetail } from '@/api/article'
const props = defineProps({
    id: {
        type: String,
    }
})
const data = ref<Article>()
const _getArticleDetail = async (id: string) => {
    const res = await getArticleDetail({ id })
    data.value = res.data
}
onMounted(() => {
    props.id && _getArticleDetail(props.id)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(create) {
    padding: 10px;

    @include e(info) {
        display: flex;
        padding-bottom: 2px;
        border-bottom: 1px solid #eee;
        justify-content: space-between;
        align-items: center;
    }

    @include e(content) {
        display: flex;
        padding-top: 10px;
    }

}
</style>