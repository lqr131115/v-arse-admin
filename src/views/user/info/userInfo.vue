<template>
    <div class="info">
        <el-avatar :src="data?.avatar" :size="60"></el-avatar>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUserInfoById } from '@/api/user';
import { User } from '@/mock/model';
const route = useRoute()
const data = ref<User>()
const _getUserInfoById = async (id: string) => {
    const res = await getUserInfoById({ id })
    data.value = res.data
}
onMounted(async () => {
    await _getUserInfoById(route.query.id as string)
})
</script>
<style lang='scss' scoped>
.info{
    padding: 10px;
}
</style>