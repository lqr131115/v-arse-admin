<template>
    <el-card shadow="always">
        <template #header>
            <span>项目信息</span>
        </template>
        <m-descriptions :data="data">
            <template #version="{ item }">
                <el-tag size="small">{{ item.content }}</el-tag>
            </template>
            <template #last-compile-time="{ item }">
                <el-tag size="small">{{ item.content }}</el-tag>
            </template>
            <template #document-link="{ item }">
                <el-link type="primary" :underline="false" href="https://github.com/lqr131115/v-arse-admin"
                    target="_blank">{{
                        item.content
                    }}</el-link>
            </template>
            <template #preview-link="{ item }">
                <el-link type="primary" :underline="false" href="https://github.com/lqr131115/v-arse-admin"
                    target="_blank">{{
                        item.content
                    }}</el-link>
            </template>
            <template #github="{ item }">
                <el-link type="primary" :underline="false" href="https://github.com/lqr131115/v-arse-admin"
                    target="_blank">{{
                        item.content
                    }}</el-link>
            </template>
        </m-descriptions>
    </el-card>
</template>
<script lang='ts' setup>
import type { DescriptionsItem } from '@/types/component'
const data: DescriptionsItem[] = [
    {
        label: '版本',
        content: '0.1.1',
        slot: 'version',
    },
    {
        label: '最后编译时间',
        content: '2022-04-01 12:13:14',
        slot: 'last-compile-time',
    },
    {
        label: '文档地址',
        content: '文档地址',
        slot: 'document-link',
    },
    {
        label: '预览地址',
        content: '预览地址',
        slot: 'preview-link',
    },
    {
        label: 'Github',
        content: 'Github',
        slot: 'github',
    }
]
const handleClick = () => {
    window.open('www.baidu.com', '_blank')
}
</script>
<style lang='scss' scoped>
</style>