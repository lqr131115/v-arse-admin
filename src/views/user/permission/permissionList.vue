<template>
   <div class="permission">
      <el-card>
            <m-table
               row-key="id"
               :data="data"
               :options="options"
               border
               default-expand-all
               cell-class-name="my-cell"
            ></m-table>
      </el-card>
   </div>
</template>
<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { Permission } from '@/mock/model'
import { TableOption } from '@/types/component'
import { getPermissionList } from '@/api/permission';
const data = ref<Permission[]>([])
const options: TableOption[] = [
   {
      label: '权限名称',
      prop: 'name',
      attrs: {
         sortable: true
      }
   },
   {
      label: '权限描述',
      prop: 'desc',
      editable: true
   },
]
const _getPermissionList = async () => {
   const res = await getPermissionList()
   data.value = res.data
}
onMounted(async () => {
   _getPermissionList()
})
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;
@include b(permission) {
   padding: 10px;
   :deep(.my-cell) {
      .cell {
         display: flex;
         align-items: center;
      }
   }
}
</style>