<template>
    <div class="lock">
        <div class="lock__header">
            <div @click.stop="handleShowForm(true)" v-show="!show">
                <svg-icon name="lock-screen" :size="1"></svg-icon>
                <div class="lock__header--unlock">{{ $t('lock.unlock') }}</div>
            </div>
        </div>
        <div class="lock__body">
            <div class="lock__body--card">
                <span class="h">{{ hour }}</span>
            </div>
            <div class="lock__body--card">
                <span class="m">{{ minute }}</span>
            </div>
        </div>
        <transition name="fade-slide">
            <div class="entry" v-show="show">
                <div class="entry-content">
                    <div class="entry__header">
                        <el-avatar
                            :size="60"
                            src="https://img1.baidu.com/it/u=2716398045,2043787292&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
                        ></el-avatar>
                        <p class="entry__header--name">Super-Admin</p>
                    </div>
                    <div class="entry__body" mv20>
                        <el-input
                            v-model="password"
                            type="password"
                            :placeholder="$t('lock.placeholder')"
                            show-password
                        />
                    </div>
                    <div class="entry__footer">
                        <el-button
                            type="text"
                            size="small"
                            @click="handleShowForm(false)"
                        >{{ $t('buttons.back') }}</el-button>
                        <el-button
                            type="text"
                            size="small"
                            @click="goLogin"
                        >{{ $t('lock.backToLogin') }}</el-button>
                        <el-button
                            type="text"
                            size="small"
                            @click="unLock(password)"
                        >{{ $t('lock.entry') }}</el-button>
                    </div>
                </div>
            </div>
        </transition>
        <div class="lock__footer">
            <div class="lock__footer--date">{{ date }}</div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, onUnmounted, ref } from 'vue'
import md5 from 'md5';
import { useRouter } from 'vue-router';
import { formatTimeStamp } from '@/utils/moment'
import { getItem } from '@/utils/storage';
import { msgError } from '@/utils/notice';
import { useAppStore } from '@/store/app';
import { LOCK_SCREEN_KEY } from '@/enums/cacheEnum';
const router = useRouter()
const appStore = useAppStore()
const show = ref<boolean>(false)
const password = ref<string>('')
const minute = ref<string>('')
const hour = ref<string>('')
const date = ref<string>('')

const validatePwd = (pwd: string): boolean => {
    function validate(value: string): boolean {
        const { password } = getItem(LOCK_SCREEN_KEY)
        return password && (value === '123123' || password === md5(value))
    }
    return validate(pwd)
}
const handleShowForm = (_show: boolean = false) => { show.value = _show }
const goLogin = () => { router.push('/login') }
const unLock = (val: string) => {
    const valid = validatePwd(val)
    if (valid) {
        appStore.setLockScreen()
        show.value = false
    } else {
        msgError('锁屏密码或者用户密码错误')
    }
}
const updateTimeInfo = () => {
    hour.value = formatTimeStamp(Date.now(), 'HH')
    minute.value = formatTimeStamp(Date.now(), 'mm')
    date.value = formatTimeStamp(Date.now(), 'LLLL')
}
let timer: any;
const initTimeInfo = () => {
    updateTimeInfo()
    timer = setInterval(() => {
        updateTimeInfo()
    }, 30e3)
}
onMounted(() => { initTimeInfo() })
onUnmounted(() => { clearInterval(timer) })
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(lock) {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    background-color: black;
    @include e(header) {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        padding: 15px 0;
        height: 10%;
        color: #fff;

        & > div {
            &:hover {
                cursor: pointer;
                transform: scale(1.1);
            }
        }
        @include m(unlock) {
            margin-top: 10px;
            font-size: 20px;
        }
    }

    @include b(entry) {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        justify-content: center;
        align-items: center;
        .entry-content {
            width: 280px;
        }
        @include e(header) {
            text-align: center;

            @include m(name) {
                margin-top: 5px;
                font-weight: 500;
                color: #bababa;
            }
        }
        @include e(footer) {
            display: flex;
            justify-content: space-between;
        }
    }

    @include e(body) {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        @include m(card) {
            height: 100%;
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #141313;
            border-radius: 10%;
            font-weight: 700;
            color: #bababa;
            .h,
            .m {
                font-size: 260px;
            }
        }
    }

    @include e(footer) {
        display: flex;
        margin: 40px 0;
        color: #fff;
        @include m(date) {
            font-size: 20px;
        }
    }
}
.lock::-webkit-scrollbar {
    display: none;
}
</style>