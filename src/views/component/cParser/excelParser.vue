<template>
    <div class="excel-parser">
        <el-button type="primary" @click.stop="openModal">Excel</el-button>
        <m-dialog v-model:visible="visible" width="40%" @open="onOpen">
            <template #title>上传</template>
            <template #default>
                <el-upload
                    ref="uploadRef"
                    :limit="limit"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="onChange"
                    :on-exceed="onExceed"
                    :before-upload="beforeUpload"
                >
                    <el-icon class="el-icon--upload">
                        <upload-filled />
                    </el-icon>
                    <div class="el-upload__text">
                        拖拽文件到此或
                        <em>点击上传</em>
                    </div>
                </el-upload>
            </template>
            <template #footer>
                <el-button type="primary" @click="handleParse">开始解析</el-button>
            </template>
        </m-dialog>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { isExcel, validateFileSize } from '@/utils/validate';
import { msgError } from '@/utils/notice';
import type { UploadInstance, UploadFile, UploadFiles, UploadRawFile } from 'element-plus'
const props = defineProps({
    limit: {
        type: Number,
        default: 1
    }
})
const uploadRef = ref<UploadInstance>()
const visible = ref<boolean>(false)
const files = ref<UploadFiles>([])
const openModal = () => { visible.value = true }
const onOpen = () => { uploadRef.value && uploadRef.value.clearFiles() }
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => { files.value = uploadFiles }
const onExceed = () => { msgError(`文件数量不超过${props.limit}`) }
const beforeUpload = (rawFile: UploadRawFile) => {
    if (!isExcel(rawFile)) {
        msgError('请上传excel文件')
        return false
    }
    if (!validateFileSize(rawFile)) {
        msgError('文件大小不能超过10M')
        return false
    }
    return true
}
const handleParse = () => {
    if (!files.value.length) {
        visible.value = false
        return
    }
    const reader = new FileReader()
    reader.readAsText(files.value[0].raw!)
    reader.onload = (e: ProgressEvent<FileReader>) => {
        try {
            let content = JSON.stringify(e.target!.result)
            console.log('content', content);
        } catch (err) {
        }
    }
    visible.value = false
}
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b("excel-parser") {
    padding: 10px;
    :deep(.el-upload) {
        width: 100%;
    }
}
</style>