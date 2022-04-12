<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import md5 from 'md5'
import { Lock, User } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app';
import { msgSuccess } from '@/utils/notice'
import { setTimeStamp } from '@/utils/auth'
import type { FormInstance } from 'element-plus'
export type TLoginFormItem = {
  username: string,
  password: string
}

const loginRef = ref<FormInstance>()
const loginForm = ref<TLoginFormItem>({ username: '', password: '' })
const loginRules = {
  username: [
    { required: true, message: '输入用户名', trigger: 'change' },
    { min: 5, max: 13, message: '用户名长度5~13位', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '输入密码', trigger: 'change' },
    { min: 6, max: 15, message: '用户名长度6~15位', trigger: 'blur' },
  ],
}
let loginLoading = ref<boolean>(false)
const userStore = useUserStore()
const appStore = useAppStore()
const router = useRouter()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginLoading.value = true

      userStore.login({ username: loginForm.value.username, password: md5(loginForm.value.password) })
        .then(() => {
          appStore.setLockScreen()
          setTimeStamp(Date.now())
          msgSuccess('登录成功')
          router.push({
            path: '/'
          })
        })
        .catch((err) => {
          console.log('loginOperationError', err);
        })
        .finally(() => {
          loginLoading.value = false
        })
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
<template>
  <div class="login">
    <el-card class="login__card" shadow="hover">
      <h2>用户登录</h2>
      <el-form
        ref="loginRef"
        class="login__form"
        label-width="100px"
        :model="loginForm"
        :rules="loginRules"
        hide-required-asterisk
        label-position="top"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名" :prefix-icon="User" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            :prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            :loading="loginLoading"
            @click="submitForm(loginRef)"
            :style="{ width: '100%' }"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM' as *;
@use '@/styles/tools/mixin/box-center' as *;
@use '@/styles/setting/var.scss' as *;
@include b(login) {
  @include box-center(center, center);
  text-align: center;
  height: 100%;
  background-color: $background-color-dark;
  @include e(form) {
    width: 480px;
  }
}
</style>
