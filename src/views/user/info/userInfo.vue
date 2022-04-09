<template>
    <div class="info">
        <el-card>
            <div class="info__container">
                <template v-if="!data">
                    <el-skeleton :rows="5" />
                </template>
                <template v-else>
                    <el-row justify="space-between" align="middle" mb10>
                        <span fz16 fw7>{{ $t('userInfo.baseInfo') }}</span>
                        <el-button
                            type="primary"
                            :loading="printLoading"
                            v-print="printConfig"
                        >{{ $t('buttons.print') }}</el-button>
                    </el-row>
                    <div id="userInfoBox">
                        <el-row justify="center">
                            <el-col :span="20">
                                <m-descriptions :data="userInfoDescData" :column="2" border>
                                    <template
                                        #gender="{ item }"
                                    >{{ item.content === 1 ? '男' : '女' }}</template>
                                    <template
                                        #entryTime="{ item }"
                                    >{{ formatTimeStamp(item.content) }}</template>
                                    <template #role="{ item }">
                                        <el-tag v-for="t in item.content" :key="t.id">{{ t.title }}</el-tag>
                                    </template>
                                </m-descriptions>
                            </el-col>
                            <el-col :span="4">
                                <div class="info__avatar">
                                    <img id="avatar" :src="data.avatar" class="ava" />
                                </div>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <el-descriptions :column="1" direction="vertical" border>
                                    <el-descriptions-item :label="$t('userInfo.experience')">
                                        <span>...</span>
                                    </el-descriptions-item>
                                    <el-descriptions-item :label="$t('userInfo.honor')">
                                        <div>
                                            <el-divider content-position="left">2006.01 - 2006.12</el-divider>
                                            <span>美国《时代周刊》年度风云人物</span>
                                            <el-divider content-position="left">2008.01 - 2008.12</el-divider>
                                            <span>《感动中国》特别奖</span>
                                        </div>
                                    </el-descriptions-item>
                                    <el-descriptions-item :label="$t('userInfo.other')">
                                        <span>...</span>
                                    </el-descriptions-item>
                                </el-descriptions>
                            </el-col>
                        </el-row>
                    </div>
                </template>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref, computed } from 'vue';
import { Configuration } from 'print-js'
import { useUserInfoDescData } from './hooks';
import { getUserInfoById } from '@/api/user';
import { User } from '@/mock/model'
import { formatTimeStamp } from '@/utils/moment';
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
const data = ref<User>()
const printLoading = ref<boolean>(false)
const printConfig: Configuration = {
    printable: 'userInfoBox',
    type: 'html',
    header: '基本信息',
    // "*" HTML中的图片无法显示 可能原因:没加载好就执行打印了
    targetStyles: ['*'],
    onLoadingStart: () => {
        printLoading.value = true
    },
    onLoadingEnd: () => {
        printLoading.value = false
    }
}
const userInfoDescData = computed(() => useUserInfoDescData(data.value!))

const _getUserInfoById = async (id: string) => {
    const res = await getUserInfoById({ id })
    data.value = res.data
}
onMounted(async () => {
    await _getUserInfoById(props.id)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(info) {
    padding: 10px;
    :deep(table) {
        height: 100%;
    }

    @include e(container) {
        display: flex;
        flex-direction: column;
    }

    @include e(avatar) {
        display: flex;
        height: 100%;
        width: 100%;
        border-top: 1px solid #ebeef5;
        border-right: 1px solid #ebeef5;
        justify-content: center;
        align-items: center;
        .ava {
            height: 90%;
            width: 90%;
            border-radius: 10px;
            object-fit: cover;
        }
    }
}
</style>