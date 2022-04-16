<template>
    <div class="form">
        <el-card>
            <div class="form__setting">
                <el-divider content-position="left">设置</el-divider>
                <span>展示富文本:
                    <el-switch v-model="richText" class="ml-2" inline-prompt active-text="开" inactive-text="关" />
                </span>
                <el-divider direction="vertical" />
                <span>展示MarkDown:
                    <el-switch v-model="markdown" class="ml-2" inline-prompt active-text="开" inactive-text="关" />
                </span>
            </div>
            <c-form ref="cFromRef" :options="optionsVal" :showRichText="richText" :showMarkdown="markdown"
                label-position="top" hide-required-asterisk @on-change="handleChange">
                <template #default>
                    <el-button type="primary">上传</el-button>
                </template>
                <template #tip>
                    <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                </template>
                <template #action="scope">
                    <el-button type="primary" @click="submitForm(scope)">创建</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </template>
            </c-form>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
import { options, richTextOpt, markdownOpt } from './data'
import { msgSuccess } from '@/utils/notice';

const cFromRef = ref<any>()
const richText = ref<boolean>(false)
const markdown = ref<boolean>(false)
const optionsVal = ref<any[]>(options)

const handleChange = (val: any) => { console.log('handleChange', val); }
const submitForm = (scope: any) => {
    console.log('scope', scope);
    if (!scope.form) return
    scope.form.validate((valid: any) => {
        if (valid) {
            msgSuccess('提交成功,查看控制台')
        } else {
            console.log('error', scope.model);
            return false
        }
    })
}
const resetForm = () => {
    cFromRef.value && cFromRef.value.resetFields()
}
watch(() => [richText.value, markdown.value], ([newRichTextVal, newMarkdownVal]) => {
    if (newRichTextVal) {
        options.push(richTextOpt)
        optionsVal.value = options
    } else {
        const index = options.findIndex((item: any) => item.type === 'rich-text')
        if (~index) {
            options.splice(index, 1)
            optionsVal.value = options
        }
    }
    if (newMarkdownVal) {
        options.push(markdownOpt)
        optionsVal.value = options
    } else {
        const index = options.findIndex((item: any) => item.type === 'markdown')
        if (~index) {
            options.splice(index, 1)
            optionsVal.value = options
        }
    }
    msgSuccess('更新成功,下拉查看')
})
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(form) {
    padding: 10px;

    @include e(setting) {
        padding: 0 10px;
        margin-bottom: 20px;

        span {
            padding: 0 5px;
        }
    }
}
</style>