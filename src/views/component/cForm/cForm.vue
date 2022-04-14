<template>
    <div class="form">
        <el-card>
            <c-form ref="cFromRef" :options="options" label-position="top" hide-required-asterisk @on-change="handleChange">
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
import { ref } from 'vue'
import { options } from './data'
import { msgSuccess } from '@/utils/notice';

const cFromRef = ref<any>()
const handleChange = (val: any) => { console.log('handleChange', val); }
const submitForm = (scope: any) => {
    console.log('scope', scope);
    if (!scope.form) return
    scope.form.validate((valid: any) => {
        if (valid) {
            msgSuccess('提交成功')
        } else {
            console.log('error', scope.model);
            return false
        }
    })
}
const resetForm = () => { cFromRef.value && cFromRef.value.resetFields() }
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(form) {
    padding: 10px
}
</style>