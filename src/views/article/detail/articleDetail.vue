<template>
    <div class="detail">
        <el-card shadow="never">
            <div mb10>
                <p fz18 fw7>{{ data?.title }}</p>
            </div>
            <div class="detail__info">
                <span>
                    <span mr10><em>作者:</em><span ml10 fz14 fw6>{{ data?.author }}</span></span>
                    <span><em>发布时间:</em><span ml10 fz14 fw6>{{ formatTimeStamp(data?.publicDate) }}</span></span>
                </span>
                <span>
                    <el-button type="text" @click="handleEdit">编辑</el-button>
                </span>
            </div>
            <div class="detail__content">
                <div v-html="data?.content"></div>
            </div>

        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { useRouter  } from 'vue-router'
import { Article } from '@/mock/model'
import { getArticleDetail } from '@/api/article'
import { formatTimeStamp } from '@/utils/moment';
import { PageEnum } from '@/enums/pageEnum';
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const data = ref<Article>()
const router = useRouter()
const handleEdit  =() => {
 router.push(`${PageEnum.ARTICLE_EDIT}/${props.id}`)
}
const _getArticleDetail = async (id: string) => {
    const res = await getArticleDetail({ id })
    data.value = res.data
}
onMounted(() => {
    _getArticleDetail(props.id)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(detail) {
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