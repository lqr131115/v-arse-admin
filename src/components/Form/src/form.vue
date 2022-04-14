<template>
  <el-form v-if="formModel" v-bind="$attrs" ref="formRef" :validate-on-rule-change="false" :model="formModel"
    :rules="formRules">
    <el-form-item v-for="(item, index) in options" :prop="item.prop" :label="item.label" :key="index">
      <template v-if="item.children && item.children.length">
        <component :is="`el-${item.type}`" :placeholder="item.placeholder" v-model="formModel[item.prop!]"
          v-bind="item.attrs">
          <component v-for="(child, cIndex) in item.children" :key="cIndex" :is="`el-${child.type}`"
            :value="child.value" :label="child.label"></component>
        </component>
      </template>
      <template v-else>
        <template v-if="item.type === 'upload'">
          <!-- upload 单独处理 -->
          <el-upload v-bind="item.uploadAttrs" :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess"
            :on-error="onError" :on-progress="onProgress" :on-change="onChange" :before-upload="beforeUpload"
            :before-remove="beforeRemove" :http-request="httpRequest" :on-exceed="onExceed">
            <slot name="area"></slot>
            <slot name="tip"></slot>
          </el-upload>
        </template>
        <template v-else-if="item.type === 'editor'">
          <div id="editor"></div>
        </template>
        <template v-else>
          <component :is="`el-${item.type}`" :placeholder="item.placeholder" v-model="formModel[item.prop!]"
            v-bind="item.attrs"></component>
        </template>
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="action" :form="formRef" :model="formModel"></slot>
    </el-form-item>
  </el-form>
</template>
<script lang='ts' setup>
import { nextTick, onMounted, ref } from 'vue';
import E from 'wangeditor'
import cloneDeep from 'lodash/cloneDeep'
import type { PropType } from 'vue'
import type { ElForm, UploadFile, FormInstance } from 'element-plus'
import type { FormOptions } from '@/types/component'

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  httpRequest: {
    type: Function
  }
})
const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed'])
let formModel = ref<any>(null)
let formRules = ref<any>(null)
let formRef = ref<FormInstance>()
let _editor = ref(null)
let intiForm = () => {
  if (props.options && props.options.length) {
    let m: any = {}
    let r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rule
      if (item.type === 'editor') {
        nextTick(() => {
          if (document.getElementById('editor')) {
            const editor = new E('#editor')
            editor.config.placeholder = item.placeholder!
            editor.create()


            // 初始化内容 
            editor.txt.html(item.value)
            editor.config.onchange = (newHtml: string) => {
              formModel.value[item.prop!] = newHtml
            }

            _editor.value = editor
          }
        })
      }
    })
    formModel.value = cloneDeep(m)
    formRules.value = cloneDeep(r)
  }
}
let resetFields = () => {
  // 重置element-plus form
  formRef.value?.resetFields()
  // 重置富文本编译器
  if (props.options && props.options.length) {
    let editorItem = props.options.find((item: FormOptions) => item.type === 'editor')!
    _editor.value.txt.html(editorItem.value)
  }
}

let validate = () => {
  return formRef.value?.validate
}
let getFormData = () => {
  return formModel.value
}

// 分发
defineExpose({
  resetFields,
  validate,
  getFormData
})

// 所有upload上传方法
let onPreview = () => {
}
let onRemove = (file: UploadFile, fileList: UploadFile[]) => {
  emits('on-remove', { file, fileList })
}
let onSuccess = (response: any, file: UploadFile, fileList: UploadFile[]) => {
  let uploadItem = props.options.find((item: FormOptions) => item.type === 'upload')!
  formModel.value[uploadItem.prop!] = 'success'
  emits('on-success', { response, file, fileList })
}
let onError = (err: any, file: UploadFile, fileList: UploadFile[]) => {
  let uploadItem = props.options.find((item: FormOptions) => item.type === 'upload')!
  formModel.value[uploadItem.prop!] = 'error'
  emits('on-error', { err, file, fileList })
}
let onProgress = (event: any, file: UploadFile, fileList: UploadFile[]) => {
  emits('on-progress', { event, file, fileList })
}
let onChange = (file: UploadFile, fileList: UploadFile[]) => {
  emits('on-change', { file, fileList })
}
let beforeUpload = (file: UploadFile) => {
  emits('before-upload', file)
}
let beforeRemove = (file: UploadFile, fileList: UploadFile[]) => {
  emits('before-remove', { file, fileList })
}
let onExceed = (files: any, fileList: UploadFile[]) => {
  emits('on-exceed', { files, fileList })
}
onMounted(() => {
  intiForm()
})
</script>
<style lang='scss' scoped>
</style>