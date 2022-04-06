<template>
    <div class="file-parser">
        <el-row>
            <el-col :span="12">
                <el-row>
                    <el-col>
                        <el-form :model="form">
                            <el-form-item label="数量">
                                <el-input-number
                                    v-model="form.limit"
                                    :min="1"
                                    :max="10"
                                    :step="1"
                                    size="small"
                                />
                            </el-form-item>
                            <el-form-item label="类型">
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox
                                        v-for="(item, index) in fileTypeCheckbox"
                                        :label="item.label"
                                        :key="item.label"
                                        :disabled="index !== 0"
                                    >{{ item.name }}</el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="多选">
                                <el-switch
                                    v-model="form.multiple"
                                    size="small"
                                    inline-prompt
                                    active-text="开"
                                    inactive-text="关"
                                />
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col>
                        <el-upload
                            ref="uploadRef"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :limit="form.limit"
                            :multiple="form.multiple"
                            :accept="form.type.join(',')"
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
                        <el-button type="primary" @click="handleParse">开始解析</el-button>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12">
                <el-empty v-if="isNull(result)" description="NoData" />
                <m-table v-else :data="data" :options="options" stripe></m-table>
            </el-col>
        </el-row>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive, computed } from 'vue'
import { validateFileSize } from '@/utils/validate';
import { msgError } from '@/utils/notice';
import { fileTypeCheckbox } from './data'
import { baseParser } from './parser'
import { genExcelTableOptions } from './utils'
import { isNull } from '@/utils/validate'
import type { UploadInstance, UploadFile, UploadFiles, UploadRawFile } from 'element-plus'
const uploadRef = ref<UploadInstance>()
const files = ref<UploadFiles>([])
const result = ref<any>({})
const form = reactive({
    limit: 1,
    multiple: false,
    type: [],
})
const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => { files.value = uploadFiles }
const onExceed = () => { msgError(`文件数量不超过${form.limit}`) }
const beforeUpload = (rawFile: UploadRawFile) => {
    if (!validateFileSize(rawFile)) {
        msgError('文件大小不能超过10M')
        return false
    }
}
const handleParse = () => {
    if (!files.value.length) {
        msgError('请上传文件')
        return
    }
    baseParser(files.value[0]).then((res) => {
        result.value = res
    })
}
const options = computed(() => genExcelTableOptions(result.value.header) || [])
const data = computed(() => result.value.body || [])
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b("file-parser") {
    padding: 10px;
    width: 100%;
}
</style>