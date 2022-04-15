<template>
    <div ref="richRef"></div>
</template>
<script lang='ts' setup>
import { watch, onMounted, PropType,ref } from 'vue';
import { Article } from '@/mock/model';
import E from 'wangeditor'
const props = defineProps({
    detail: {
        type: Object as PropType<Article>,
        default: () => ({}),
    },
    content: {
        type: String,
    }
})
let editor: E;
const richRef = ref<any>()
const getHtmlContent = () => {
    return editor.txt.html()
}
const resetRichEditor = () => {
    editor.txt.html('')
}
const _initWEditor = () => {
  
    if (!richRef.value) { return }
    editor = new E(richRef.value)
    editor.config.height = 400
    editor.config.zIndex = 100
    editor.config.showMenuTooltips = true
    // editor.config.onchange = onContentChange

    editor.create()

}
watch(() => props.content, (newVal) => {
    if (newVal) {
        editor && editor.txt.html(newVal)
    }
})

defineExpose({
    getHtmlContent,
    resetRichEditor
})
onMounted(() => {
    _initWEditor()
})
</script>
<style lang='scss' scoped>
</style>