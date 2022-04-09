<template>
    <div class="info">
        <el-card>
            <div class="info__container">
                <template v-if="!data">
                    <el-skeleton :rows="5" />
                </template>
                <template v-else>
                    <el-row>
                        <el-col>
                            <m-descriptions
                                :data="userInfoDescData"
                                :column="2"
                                :title="$t('userInfo.baseInfo')"
                                border
                            >
                                <template #extra>
                                    <el-button
                                        type="primary"
                                        @click="handlePrint"
                                    >{{ $t('buttons.print') }}</el-button>
                                </template>
                                <template #gender="{ item }">{{ item.content === 1 ? '男' : '女' }}</template>
                                <template #entryTime="{ item }">{{ formatTimeStamp(item.content) }}</template>
                                <template #role="{ item }">
                                    <el-tag v-for="t in item.content" :key="t.id">{{ t.title }}</el-tag>
                                </template>
                            </m-descriptions>
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
                </template>
            </div>
        </el-card>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useUserInfoDescData } from './hooks';
import { getUserInfoById } from '@/api/user';
import { User } from '@/mock/model'
import { formatTimeStamp } from '@/utils/moment';
const route = useRoute()
const data = ref<User>()
const userInfoDescData = computed(() => useUserInfoDescData(data.value!))
const handlePrint = () => {
    alert`handlePrint`
}
const _getUserInfoById = async (id: string) => {
    const res = await getUserInfoById({ id })
    data.value = res.data
}
onMounted(async () => {
    await _getUserInfoById(route.query.id as string)
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(info) {
    padding: 10px;

    @include e(action) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    @include e(container) {
        display: flex;
        flex-direction: column;
    }

    @include e(body) {
        display: flex;
        width: 100%;
    }
}
</style>