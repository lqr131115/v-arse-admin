<template>
    <div class="about">
        <div class="about__header">
            <span class="about__header--title">关于</span>
            <div class="about__header--desc">
                <el-link type="primary" :underline="false">vAres-admin</el-link>
                <span>是一个基于Vue3.0、Vite、 Element-Plus 、TypeScript 的后台解决方案，目标是为中小型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。</span>
            </div>
        </div>
        <div class="about__content">
            <div class="about__content--card">
                <ProjectInfo />
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import ProjectInfo from './projectInfo.vue';
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(about) {
    display: flex;
    flex-direction: column;
    background-color: #eee;
    @include e(header) {
        padding: 10px 20px;
        background-color: #fff;
        @include m(title) {
            color: #000;
            font-size: 24px;
        }
        @include m(desc) {
            margin-top: 4px;
            & > span {
                font-size: 14px;
                margin-left: 5px;
            }
        }
    }
    @include e(content) {
        display: flex;
        flex-direction: column;
        padding: 10px;
        @include m(card) {
            margin-bottom: 10px;
        }
    }
}

</style>