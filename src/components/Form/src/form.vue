<template>
  <el-form v-if="formModel" v-bind="$attrs" ref="formRef" :validate-on-rule-change="false" :model="formModel"
    :rules="formRules">
    <el-form-item v-for="(item, index) in options" :prop="item.prop" :label="item.label" :key="index">
      <!-- 有子组件  如select、checkbox-group等 -->
      <template v-if="item.children && item.children.length">
        <component :is="`el-${item.type}`" :placeholder="item.placeholder" v-model="formModel[item.prop!]"
          v-bind="item.attrs">
          <component v-for="(child, cIndex) in item.children" :key="cIndex" :is="`el-${child.type}`"
            :value="child.value" :label="child.label"></component>
        </component>
      </template>
      <!-- 没子组件  如input等 -->
      <template v-else>
        <template v-if="item.type === 'upload'">
          <!-- upload 单独处理 -->
          <el-upload v-bind="item.uploadAttrs" :on-preview="onPreview" :on-remove="onRemove" :on-success="onSuccess"
            :on-error="onError" :on-progress="onProgress" :on-change="onChange" :before-upload="beforeUpload"
            :before-remove="beforeRemove" :http-request="httpRequest" :on-exceed="onExceed">
            <template v-if="$slots.default" #default>
              <slot name="default"></slot>
            </template>
            <template v-if="$slots.tip" #tip>
              <slot name="tip"></slot>
            </template>
          </el-upload>
        </template>
        <!-- WangEditor -->
        <template v-else-if="item.type === 'editor'">
          <m-rich-text ref="richRef" :content="formModel[item.prop!]"
            @change="(val: string) => { onContentChange(val, item) }"></m-rich-text>
        </template>
        <!-- MarkDown -->
        <template v-else-if="item.type === 'markdown'">
          <m-markdown ref="mkRef" :content="formModel[item.prop!]"
            @change="(val: string) => { onContentChange(val, item) }"></m-markdown>
        </template>
        <template v-else>
          <component :is="`el-${item.type}`" :placeholder="item.placeholder" v-model="formModel[item.prop!]"
            v-bind="item.attrs"></component>
        </template>
      </template>
    </el-form-item>
    <!-- 操作项目 -->
    <el-form-item>
      <slot name="action" :form="formRef" :model="formModel"></slot>
    </el-form-item>
  </el-form>
</template>
<script lang='ts' setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import cloneDeep from 'lodash/cloneDeep'
import type { PropType } from 'vue'
import type { UploadFile, FormInstance } from 'element-plus'
import type { FormOptions } from '@/types/component'

const props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true
  },
  httpRequest: {
    type: Function
  },  
  richTextOptions: {
    type: Object
  },
  markdownOptions: {
    type: Object
  },
})

const emits = defineEmits(['on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change', 'before-upload', 'before-remove', 'on-exceed'])
const _this = getCurrentInstance()
const formModel = ref<any>(null)
const formRules = ref<any>([])
const formRef = ref<FormInstance>()
const richRef = ref<any>()
const mkRef = ref<any>()

const onContentChange = (val: string, item: FormOptions) => { formModel.value[item.prop!] = val }
const initData = () => {
  if (props.options && props.options.length) {
    const m: any = {}
    const r: any = {}
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value
      r[item.prop!] = item.rule
    })
    formModel.value = cloneDeep(m)
    formRules.value = cloneDeep(r)
  }
}

const resetOther = () => {
  if (props.options && props.options.length) {
    const editorItem = props.options.find((item: FormOptions) => (item.type === 'editor' || item.type === 'markdown'))
    if (editorItem) {
      // richRef.value && richRef.value.resetRichEditor(editorItem.value)
      // mkRef.value && mkRef.value.resetMKEditor(editorItem.value)
      (_this as any).refs.richRef[0].resetRichEditor(editorItem.value);
      (_this as any).refs.mkRef[0].resetMKEditor(editorItem.value)
    }
    // TODO:其他reset
  }
}

const resetFields = () => {
  // 重置form 表单
  formRef.value && formRef.value.resetFields()
  // 重置其他
  resetOther()
}
const validate = () => { return formRef.value && formRef.value.validate }
const getFormModel = () => { return formModel.value }

// 分发
defineExpose({
  resetFields,
  validate,
  getFormModel
})

// 所有upload上传方法
const onPreview = () => {
}
const onRemove = (file: UploadFile, fileList: UploadFile[]) => {
  emits('on-remove', { file, fileList })
}
const onSuccess = (response: any, file: UploadFile, fileList: UploadFile[]) => {
  const uploadItem = props.options.find((item: FormOptions) => item.type === 'upload')!
  formModel.value[uploadItem.prop!] = 'success'
  emits('on-success', { response, file, fileList })
}
const onError = (err: any, file: UploadFile, fileList: UploadFile[]) => {
  const uploadItem = props.options.find((item: FormOptions) => item.type === 'upload')!
  formModel.value[uploadItem.prop!] = 'error'
  emits('on-error', { err, file, fileList })
}
const onProgress = (event: any, file: UploadFile, fileList: UploadFile[]) => {
  emits('on-progress', { event, file, fileList })
}
const onChange = (file: UploadFile, fileList: UploadFile[]) => {
  emits('on-change', { file, fileList })
}
const beforeUpload = (file: UploadFile) => {
  emits('before-upload', file)
}
const beforeRemove = (file: UploadFile, fileList: UploadFile[]) => {
  emits('before-remove', { file, fileList })
}
const onExceed = (files: any, fileList: UploadFile[]) => {
  emits('on-exceed', { files, fileList })
}
onMounted(() => {
  initData()
})
</script>
<style lang='scss' scoped>
</style>