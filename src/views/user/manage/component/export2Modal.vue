<template>
   <div>
      <el-button type="primary" plain @click="handleClick">导出为Excel</el-button>
      <m-dialog v-model:visible="visible" width="35%" @closed="onClosed" draggable>
         <template #title>
            <span>导出</span>
         </template>
         <template #default>
            <el-input v-model="fileName" placeholder="输入导出文件名" clearable />
         </template>
         <template #footer>
            <el-button
               element-loading-text="Loading..."
               element-loading-background="rgba(0, 0, 0, 0.8)"
               v-loading.fullscreen.lock="loading"
               type="primary"
               @click="handleConfirm"
            >确定</el-button>
         </template>
      </m-dialog>
   </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import { DEFAULT_FILE_NAME, USER_RELATION, UserRelationEnum } from './enum'
import { getUserList } from '@/api/user'
import { User } from '@/mock/model'
import { formatTimeStamp } from "@/utils/moment";
const visible = ref<boolean>(false);
const loading = ref<boolean>(false);
const fileName = ref<string>(DEFAULT_FILE_NAME);
const handleClick = () => { visible.value = true }
const onClosed = () => { fileName.value = DEFAULT_FILE_NAME }
const handleConfirm = async () => { visible.value = false, await exportAndDownload() }
const formatJson = (rows: User[], header: object) => {
   return rows.map((item:any) => {
      return Object.keys(header).map((key) => {
         if (key === UserRelationEnum.ROLE) {
            return (item[key] || []).map((r: any) => r.title).join(',')
         }
         // export2Excel做了时间戳的格式化
         if (key === UserRelationEnum.OPEN_TIME) {
            return formatTimeStamp(item[key], 'YYYY-MM-DD')
         }
         return item[key]
      })
   })
}
const exportAndDownload = async () => {
   loading.value = true;
   const res = await getUserList()
   const { list } = res.data
   const data = formatJson(list, USER_RELATION)
   const excel = await import('./utils')
   excel.export_json_to_excel({
      data,
      filename: fileName.value,
      header: Object.values(USER_RELATION),
   })
   loading.value = false;
}
</script>
<style lang='scss' scoped>
</style>