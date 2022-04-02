<template>
    <div class="workbench__header">
        <div class="workbench__header--left">
            <el-avatar
                :size="60"
                src="https://img1.baidu.com/it/u=2716398045,2043787292&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800"
            />
        </div>
        <div class="workbench__header--center">
            <span fz24 fw5 mb15>早安, 开始您一天的工作吧！</span>
            <span fz13>今日晴，20℃ - 32℃！</span>
        </div>
        <div class="workbench__header--right">
            <div>
                <span class="txt-primary">待办</span>
                <span class="txt-secondary">2/10</span>
            </div>
            <div>
                <span class="txt-primary">项目</span>
                <span class="txt-secondary">8</span>
            </div>
            <div>
                <span class="txt-primary">团队</span>
                <span class="txt-secondary">108</span>
            </div>
        </div>
    </div>
    <el-row class="workbench__content" :gutter="10">
        <el-col :span="16">
            <ProjectCard />
        </el-col>
        <el-col :span="8">
            <el-row>
                <el-col>
                    <ShortcutCard />
                </el-col>
            </el-row>
            <el-row mt10>
                <el-col>
                    <el-card shadow="hover">
                        <span>hover</span>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <el-row class="workbench__content" :gutter="10">
        <el-col>
            <LatestStatusCard />
        </el-col>
    </el-row>
</template>
<script lang='ts' setup>
import ProjectCard from './projectCard.vue'
import ShortcutCard from './shortcutCard.vue'
import LatestStatusCard from './latestStatusCard.vue'
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;

@include b(workbench) {
    display: flex;
    flex-direction: row;
    @include e(header) {
        display: flex;
        align-items: center;
        min-height: 80px;
        padding: 10px 20px;

        @include m(left) {
            display: flex;
        }

        @include m(center) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 20px;
        }

        @include m(right) {
            display: flex;
            justify-content: flex-end;
            flex: 1;
            & > div {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-left: 50px;
                .txt-primary {
                    margin-bottom: 10px;
                    color: #666;
                }
                .txt-secondary {
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }
    }

    @include e(content) {
        display: flex;
        padding: 10px;
        background-color: #eee;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>


<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
