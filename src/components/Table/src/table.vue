<template>
   <div>
      <el-card v-if="dynamic" shadow="never" :body-style="{ padding: '10px' }" mb10>
         <el-row :gutter="10" align="middle" >
            <el-col :span="2">
               <span fz16 fw6>动态展示</span>
            </el-col>
            <el-col :span="22" >
               <el-checkbox-group v-model="dynamicChecked" :min="1">
                  <el-checkbox v-for="c in dynamicCheckbox" :key="c.prop" :label="c.prop">{{
                     c.label
                  }}</el-checkbox>
               </el-checkbox-group>
            </el-col>
         </el-row>
      </el-card>
      <el-table :data="tableData" v-bind="$attrs" v-loading="isLoading" :element-loading-text="elementLoadingText"
         :element-loading-spinner="elementLoadingSpinner" :element-loading-svg-view-box="elementLoadingSvgViewBox"
         :element-loading-background="elementLoadingBackground" @row-click="handleRowClick">
         <el-table-column v-if="type" :type="type"></el-table-column>
         <template v-for="item in normalOptions" :key="item.label">
            <el-table-column :label="item.label" :width="item.width" v-bind="item.attrs">
               <template #default="scope">
                  <div class="column">
                     <!-- 行编辑中 -->
                     <template v-if="scope.row.isEditing">
                        <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                     </template>
                     <template v-else>
                        <!-- 列编辑中 -->
                        <template v-if="(scope.$index + scope.column.id) === editingId">
                           <div class="column__edit">
                              <el-input size="small" v-model="scope.row[item.prop]"></el-input>
                              <div class="column__icons edit-status">
                                 <el-icon ml10 @click="handleSaveColumnEdit(scope)" color="green">
                                    <check />
                                 </el-icon>
                                 <el-icon ml10 @click="handleCloseColumnEdit(scope)" color="red">
                                    <close />
                                 </el-icon>
                              </div>
                           </div>
                        </template>
                        <template v-else>
                           <!-- 自定义列内容 -->
                           <template v-if="item.slot">
                              <slot :name="item.slot" :scope="scope"></slot>
                           </template>
                           <template v-else>
                              <span>{{ scope.row[item.prop] }}</span>
                           </template>
                           <!-- 当前列可编辑 -->
                           <span class="column__icons" v-if="item.editable">
                              <el-icon ml10 @click="handleEdit(scope)">
                                 <edit />
                              </el-icon>
                           </span>
                        </template>
                     </template>
                  </div>
               </template>
            </el-table-column>
         </template>
         <!-- 操作列 -->
         <el-table-column :label="actionOptions?.label" :width="actionOptions?.width" :align="actionOptions?.align"
            v-if="actionOptions?.action">
            <template #default="scope">
               <template v-if="scope.row.isEditing">
                  <el-button type="primary" size="small">确定</el-button>
                  <el-button type="danger" size="small">取消</el-button>
               </template>
               <template v-else>
                  <slot name="action" :scope="scope"></slot>
               </template>
            </template>
         </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <div class="pagination" v-if="pagination">
         <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :total="total || data.length"
            v-bind="pageOptions" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            @prev-click="handlePrevClick" @next-click="handleNextClick" />
      </div>
   </div>
</template>
<script lang='ts' setup>
import { computed, onMounted, PropType, ref, watch } from 'vue';
import cloneDeep from 'lodash/cloneDeep'
import { TableOption } from '@/types/component';
const props = defineProps({
   options: {
      type: Array as PropType<TableOption[]>,
      required: true
   },
   data: {
      type: Array,
      required: true
   },
   type: {
      type: String,
   },
   // 列动态展示
   dynamic: {
      type: Boolean,
      required: false
   },
   // 列是否可编辑
   editable: {
      type: Boolean,
      default: false
   },
   // 行操作的标识
   rowOperation: {
      type: String,
      default: 'edit'
   },
   // 分页
   pagination: {
      type: Boolean,
      default: false
   },
   pageSize: {
      type: Number,
      default: 5
   },
   currentPage: {
      type: Number,
      default: 1
   },
   pageOptions: {
      type: Object,
      default: () => ({
         pageSizes: [1, 2, 3],
         layout: "pager, next, jumper",
      })
   },
   total: {
      type: Number,
      default: 0
   },
   // loading配置
   elementLoadingText: {
      type: String
   },
   elementLoadingSpinner: {
      type: String
   },
   elementLoadingSvg: {
      type: String
   },
   elementLoadingBackground: {
      type: String
   },
   elementLoadingSvgViewBox: {
      type: String
   },

})
const emits = defineEmits(['on-save-column-edit', 'on-close-column-edit', 'on-pagesize-change', 'on-current-page-change', 'on-prev-click', 'on-next-click'])
let editingId = ref<string>()
let tableData = ref<any[]>(cloneDeep(props.data))
let editRowAction = ref<string>(props.rowOperation)
const columnOptions = ref<TableOption[]>(props.options)
const dynamicCheckbox = ref<TableOption[]>(columnOptions.value)
const dynamicChecked = ref<string[]>(dynamicCheckbox.value.map((c) => c.prop))
const isLoading = computed(() => !props.data || !props.data.length)
const normalOptions = computed(() => columnOptions.value.filter((item: TableOption) => !item.action))
const actionOptions = computed(() => columnOptions.value.find((item: TableOption) => item.action))
const handleEdit = (scope: any) => {
   editingId.value = scope.$index + scope.column.id
}
const handleSaveColumnEdit = (scope: any) => {
   editingId.value = ''
   emits('on-save-column-edit', scope)
}
const handleCloseColumnEdit = (scope: any) => {
   editingId.value = ''
   emits('on-close-column-edit', scope)
}
const handleRowClick = (row: any, column: any) => {
   if (column.label === actionOptions.value?.label) {

      if (props.editable && editRowAction.value === 'edit') {
         row.isEditing = !row.isEditing
         // 其他行为恢复为非编辑态
         tableData.value.map(item => {
            if (item !== row) {
               item.isEditing = false
            }
         })
      }
   }

}
const handleSizeChange = (val: number) => { emits('on-pagesize-change', val) }
const handleCurrentChange = (val: number) => { emits('on-current-page-change', val) }
const handlePrevClick = (...val: any) => { emits('on-prev-click', val) }
const handleNextClick = (...val: any) => { emits('on-next-click', val) }
watch(() => props.data, newVal => {
   tableData.value = cloneDeep(newVal)
   tableData.value.map(item => {
      item.isEditing = false
   })
}, { deep: true })
watch(() => props.options,(newVal) => {
   columnOptions.value = newVal
})
watch(() => props.rowOperation, newVal => {
   editRowAction.value = newVal
})
watch(() => dynamicChecked.value,(newVal) => {
   columnOptions.value = props.options.filter((opt) => newVal.includes(opt.prop))
})
onMounted(() => {
   tableData.value.map((item) => {
      item.isEditing = false
   })
})
</script>

<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM' as *;

@include b(column) {
   display: flex;
   align-items: center;

   @include e(edit) {
      display: flex;
      align-items: center;
   }

   @include e(icons) {
      display: flex;

      svg {
         width: 1em;
         height: 1em;
         cursor: pointer;
      }
   }

   .edit-status {
      svg {
         width: 1.2em;
         height: 1.2em;
      }

      svg:hover {
         transform: scale(1.2);
      }
   }
}

.pagination {
   display: flex;
   margin: 10px 0;
   justify-content: flex-end;
}
</style>