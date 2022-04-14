<template>
    <div class="form">
        <el-card>
            <c-form ref="mFormRef" :options="options" @on-preview="handlePreview" @on-remove="handleRemove"
                @on-success="handleSuccess" @on-error="handleError" @on-progress="handleProgress"
                @on-change="handleChange" @on-exceed="handleExceed" @before-remove="handleBeforeRemove">
                <template #area>
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
import { ElForm, ElMessage, ElMessageBox, FormInstance } from 'element-plus';
import { FormOptions } from '@/types/component'
interface IScope {
    form: FormInstance | undefined,
    model: any
}
const options: FormOptions[] = [
    {
        type: 'input',
        value: '',
        label: '用户名',
        prop: 'username',
        placeholder: '请输入用户名',
        rule: [
            {
                required: true,
                message: '用户名不能为空',
                trigger: 'blur'
            },
            {
                min: 3,
                max: 10,
                message: '用户名3-10位',
                trigger: 'blur'
            }
        ],
    },
    {
        type: 'input',
        value: '',
        label: '密码',
        prop: 'password',
        placeholder: '请输入密码',
        rule: [
            {
                required: true,
                message: '密码不能为空',
                trigger: 'blur'
            },
            {
                min: 6,
                max: 15,
                message: '密码6-15位',
                trigger: 'blur'
            }
        ],
        attrs: {
            showPassword: true
        }

    },
    {
        type: 'select',
        value: '',
        label: '职位',
        prop: 'job',
        placeholder: '请选择职位',
        rule: [
            {
                required: true,
                message: '请选择职位',
                trigger: 'change'
            },
        ],
        attrs: {
            clearable: true,
            style: {
                width: '100%'
            }
        },
        children: [
            {
                type: 'option',
                value: '1',
                label: '董事长',
            },
            {
                type: 'option',
                value: '2',
                label: '经理',
            },
            {
                type: 'option',
                value: '3',
                label: '员工',
            }
        ]

    },
    {
        type: 'checkbox-group',
        value: [],
        label: '爱好',
        prop: 'hobby',
        rule: [
            {
                required: true,
                message: '爱好不能为空',
                trigger: 'change'
            }
        ],
        children: [
            {
                type: 'checkbox',
                value: '1',
                label: '足球',
            },
            {
                type: 'checkbox',
                value: '2',
                label: '篮球',
            }, {
                type: 'checkbox',
                value: '3',
                label: '排球',
            }
        ]
    },
    {
        type: 'radio-group',
        value: '',
        label: '性别',
        prop: 'sex',
        children: [
            {
                type: 'radio',
                label: '男',
                value: 'male'
            },
            {
                type: 'radio',
                label: '女',
                value: 'female'
            },
            {
                type: 'radio',
                label: '保密',
                value: 'secret'
            }
        ]
    },
    {
        type: 'switch',
        value: false,
        label: '记住我',
        prop: 'rember'
    },
    {
        type: 'date-picker',
        value: [],
        label: '日期',
        prop: 'time',
        placeholder: '请选择日期',
        attrs: {
            type: 'datetimerange',
            startPlaceholder: "Start date",
            endPlaceholder: "End date"
        }
    },
    {
        type: 'upload',
        label: '上传',
        prop: 'pic',
        rule: [
            {
                required: true,
                message: '上传图片不能为空',
                trigger: 'blur'
            }
        ],
        uploadAttrs: {
            action: 'https://jsonplaceholder.typicode.com/posts/',
            multiple: true,
            limit: 2
        }
    },
    {
        type: 'editor',
        value: 'desc',
        prop: 'desc',
        label: '描述',
        placeholder: '请输入描述',
        rule: [
            {
                required: true,
                message: '描述不能为空',
                trigger: 'blur'
            }
        ]

    }
]

let mFormRef = ref<FormInstance | undefined>(null)

let handlePreview = (val: any) => {
    console.log('handlePreview', val);
}
let handleRemove = (val: any) => {
    console.log('handleRemove', val);
}
let handleSuccess = (val: any) => {
    console.log('handleSuccess', val);
}
let handleError = (val: any) => {
    console.log('handleError', val);
}
let handleProgress = (val: any) => {
    console.log('handleProgress', val);
}
let handleChange = (val: any) => {
    console.log('handleChange', val);
}
let handleExceed = (val: any) => {
    ElMessage.warning(
        `The limit is 3, you selected ${val.files.length} files this time, add up to ${val.files.length + val.fileList.length
        } totally`
    )
}
let handleBeforeRemove = (val: any) => {
    return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`)

}


let submitForm = (scope: IScope) => {
    if (!scope.form) return
    scope.form.validate((valid) => {
        if (valid) {
            ElMessage.success('提交成功')
            console.log('success', scope.model);
        } else {
            console.log('error', scope.model);
            return false
        }
    })
}
let resetForm = () => {
    mFormRef.value.resetFields()

}
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(form) {
    padding: 10px
}
</style>