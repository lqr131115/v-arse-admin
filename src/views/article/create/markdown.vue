<template>
    <div ref="mkRef"></div>
</template>
<script lang='ts' setup>
import { onMounted, PropType, watch, ref } from 'vue';
import MK, { EditorOptions, EditorCore } from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Article } from '@/mock/model';

type MKEditorOptions = Omit<EditorOptions, 'el'>
const props = defineProps({
    detail: {
        type: Object as PropType<Article>,
        default: () => ({}),
    },
    content: {
        type: String
    },
})
let editor: EditorCore;
const mkRef = ref<any>()
const getHtmlContent = () => {
    return editor.getHTML()
}
const initMKEditor = (el: HTMLElement, options: MKEditorOptions) => {
    return new MK({
        el,
        ...options
    })
}
const _initMKEditor = () => {
    if (!mkRef.value) {return}
    const options: MKEditorOptions = {
        height: '450px',
        previewStyle: 'vertical',
        // events: {
        //     change: onContentChange
        // }
        // language: getLanguage.value === LOCALE.EN_US ? 'en' : 'zh-CN',
    }
    editor = initMKEditor(mkRef.value, options)
    editor.getMarkdown()
}
const resetMKEditor = () => {
    editor.setMarkdown('')
}
watch(() => props.content, (newVal) => {
    if (newVal) {
        editor && editor.setHTML(newVal)
    }
})

defineExpose({
    getHtmlContent,
    resetMKEditor
})
onMounted(() => {
    _initMKEditor()
})
</script>
<style lang='scss' scoped>
</style>