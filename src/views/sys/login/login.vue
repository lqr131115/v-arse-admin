<template>
  <div class="login">
    <div class="login__left">
      <div class="left__wrapper">
        <span class="text_1">Call Me <span>Ares</span></span>
        <img class="login-box-bg" src="@/icons/svg/login-box-bg.svg" alt="">
        <span class="text_2">一个简约的、开箱即用的后台管理系统解决方案</span>
        <p fz16>我自幼向往水乡风光 可我从未去过江南</p>
        <p fz16>你说你是姑苏人 在我看来</p>
        <p fz16>你和那到不了的江南一样</p>
      </div>
    </div>
    <div class="login__right">
      <el-card shadow="hover">
        <h2>用户登录</h2>
        <el-form ref="loginRef" class="login__form" label-width="100px" :model="loginForm" :rules="loginRules"
          hide-required-asterisk label-position="top">
          <el-form-item label="Username" prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名为admin或者super" :prefix-icon="User" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码为123123" :prefix-icon="Lock"
              show-password />
          </el-form-item>
          <el-form-item>
            <div class="item__remember">
              <el-checkbox v-model="loginForm.remember" label="记住我" />
              <el-button type="text">忘记密码</el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loginLoading" @click="submitForm(loginRef)" :style="{ width: '100%' }">
              登录</el-button>
          </el-form-item>
        </el-form>
        <div mb10>
          <OtherSignIn />
        </div>
        </el-card>
      <!-- <div class="icp">
        <el-link :underline="false" href="https://beian.miit.gov.cn" target="_blank">皖ICP备2022006209号</el-link>
      </div> -->
    </div>
  </div>
</template>

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
import OtherSignIn from './otherSignIn.vue'
export type TLoginFormItem = {
  username: string,
  password: string,
  remember?: boolean,
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

const _login = () => {

}

</script>

<style lang="scss" scoped>
@use '@/styles/tools/mixin/BEM'as *;
@use '@/styles/tools/mixin/box-center'as *;
@use '@/styles/tools/mixin/sprite-spirit'as *;
@use '@/styles/setting/var.scss'as *;

@include b(login) {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  @include dimensions(100%, 100%);
  text-align: center;

  @include e(left) {
    @include box-center(center, center);
    @include dimensions(48%, 100%);
    z-index: 999;
    color: #fff;

    .left__wrapper {
      @include box-center(start, start);
      flex-direction: column;
      height: 100%;

      .text_1 {
        font-size: 30px;
        font-weight: bold;

        span {
          font-size: 50px;
          font-weight: bolder;
        }

        margin: 90px 0 60px;
      }

      .text_2 {
        font-size: 20px;
        margin: 40px 0 30px;
      }
    }

    .login-box-bg {
      width: 320px;
    }
  }

  @include e(right) {
    @include box-center(center, center);
    @include dimensions(52%, 100%);
    flex-direction: column;

    .login__form {
      width: 480px;

      .item__remember {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }

    // .icp{
    //   position: relative;
    //   top:10%
    // }
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url('@/icons/svg/login-bg.svg');
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: '';
  }
}
</style>
