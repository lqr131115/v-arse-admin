<template>
    <div class="create">
        <el-card shadow="never">
            <el-input v-model="title"></el-input>
            <el-tabs v-model="activeName" @tab-click="handleToggle">
                <el-tab-pane label="Markdown" :name="EditorTypeEnum.MARKDOWN">
                    <Markdown ref="mkRef" :content="content" />
                </el-tab-pane>
                <el-tab-pane label="富文本" :name="EditorTypeEnum.RICH_TEXT">
                    <RichText ref="richRef" :content="content" />
                </el-tab-pane>
            </el-tabs>
            <div style="text-align: right;" mv10>
                <el-button type="primary" @click="handleConfirm">{{ $t('buttons.confirm') }}</el-button>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import { EditorTypeEnum } from './data'
// import { Article } from '@/mock/model'
import { getArticleDetail } from '@/api/article'
import { msgSuccess } from '@/utils/notice';
import type { TabsPaneContext } from 'element-plus'
import RichText from './richText.vue';
import Markdown from './markdown.vue';
const props = defineProps({
    id: {
        type: String,
    }
})
const title = ref<string>()
const content = ref<string>()
const activeName = ref<string>(EditorTypeEnum.MARKDOWN)
const richRef = ref<any>()
const mkRef = ref<any>()
// const detail = ref<Article>()
const handleToggle = (context: TabsPaneContext) => {
    msgSuccess(`切换到${context.props.label}`)
}
const handleConfirm = () => {
    if (props.id) {
        handleEdit()
    } else {
        handleCreate()
    }
    reset()
}
const handleEdit = () => {
    // TODO:调用编辑API
    const content = _getHtmlContent()
    msgSuccess(`编辑:${title.value}--${content}`)
}
const handleCreate = () => {
    // TODO:调用创建API
    const content = _getHtmlContent()
    msgSuccess(`创建:${title.value}--${content}`)
}
const reset = () => {
    title.value = ''
    content.value = ''
    richRef.value && richRef.value.resetRichEditor()
    mkRef.value && mkRef.value.resetMKEditor()
}
const _getHtmlContent = () => {
    let content = ''
    if (activeName.value === EditorTypeEnum.RICH_TEXT) {
        content = richRef.value.getHtmlContent()
    } else if (activeName.value === EditorTypeEnum.MARKDOWN) {
        content = mkRef.value.getHtmlContent()
    }
    return content
}
const _getArticleDetail = async (id: string) => {
    const res = await getArticleDetail({ id })
    // detail.value = res.data
    title.value = res.data.title
    content.value = res.data.content
}
onMounted(() => {
    // 存在id(from编辑)则获取文章详情
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