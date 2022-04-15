<template>
    <div ref="mkRef"></div>
</template>
<script lang='ts' setup>
import { onMounted, watch, ref } from 'vue';
import MK, { EditorCore } from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { MKEditorOptions, defaultMarkdownOpts } from './data'

const props = defineProps({
    options: {
        type: Object,
        default: () => defaultMarkdownOpts,
    },
    content: {
        type: String
    },
    onContentChange: {
        type: Function
    }
})
const emits = defineEmits(['change'])
let editor: EditorCore;
const mkRef = ref<any>()
const getHtmlContent = () => {
    return editor.getHTML()
}
const initMKEditor = (el: HTMLElement, options: MKEditorOptions) => {
    return new MK({
        el,
        ...options,
        events:{
            change:() => {
                emits('change', getHtmlContent())
            }
        }
    })
}
const _initMKEditor = () => {
    if (!mkRef.value) { return }
    editor = initMKEditor(mkRef.value, props.options)
    editor.getMarkdown()
}
const resetMKEditor = (val: string = '') => {
    editor.setMarkdown(val)
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