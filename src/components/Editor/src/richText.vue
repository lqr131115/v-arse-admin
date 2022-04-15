<template>
    <div ref="richRef"></div>
</template>
<script lang='ts' setup>
import E from 'wangeditor'
import { watch, onMounted, ref } from 'vue';
import { defaultRichTextOpts } from './data'
const props = defineProps({
    options: {
        type: Object,
        default: () => defaultRichTextOpts,
    },
    content: {
        type: String,
    },
    onContentChange: {
        type: Function
    }
})
const emits = defineEmits(['change'])
let editor: E;
const richRef = ref<any>()
const getHtmlContent = () => {
    return editor.txt.html()
}
const resetRichEditor = (val: string = '') => {
    editor.txt.html(val)
}
const _initWEditor = () => {

    if (!richRef.value) { return }
    editor = new E(richRef.value)
    for (const key in props.options) {
        if (Object.prototype.hasOwnProperty.call(props.options, key)) {
            const optVal = props.options[key]
            editor.config[key] = optVal
        }
    }
    editor.config.onchange = (newHtml: string) => {
        emits('change', newHtml)
    }
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