<template>
   <m-dialog v-model:visible="dVisible">
      <template #title>
         <span>{{ $t(`header.tooltipLock`) }}</span>
      </template>
      <template #default>
         <div class="body">
            <div class="body__avatar">
               <el-avatar :size="60" :src="(getUserInfo as any).avatar"></el-avatar>
               <span mv20 fz15>{{ (getUserInfo as any).username }}</span>
            </div>
            <el-form
               ref="lockRef"
               label-width="100px"
               :model="form"
               :rules="rules"
               label-position="top"
            >
               <el-form-item :label="$t('header.lockScreenPassword')" prop="password">
                  <el-input
                     v-model="form.password"
                     type="password"
                     placeholder="密码"
                     prefix-icon="lock"
                     show-password
                  />
               </el-form-item>
               <el-form-item>
                  <el-button
                     type="primary"
                     @click="lockScreen(lockRef)"
                     :style="{ width: '100%' }"
                  >{{ $t('header.lockScreenBtn') }}</el-button>
               </el-form-item>
            </el-form>
         </div>
      </template>
   </m-dialog>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue'
import { useUser } from '@/hooks'
import { FormInstance } from 'element-plus';
interface TFormItem {
   password: string
}
const props = defineProps({
   isScroll: {
      type: Boolean,
      default: false
   },
   visible: {
      type: Boolean,
      default: false
   }
})
const emits = defineEmits(['update:visible'])
const { getUserInfo } = useUser()
const lockRef = ref<FormInstance>()
const dVisible = ref<boolean>(props.visible)
const form = ref<TFormItem>({ password: '' })
const rules = {
   password: [
      { required: true, message: '输入密码', trigger: 'change' },
   ],
}
const lockScreen = async (formEl: FormInstance | undefined) => {
   if (!formEl) return
   await formEl.validate((valid: any, fields: any) => {
      if (valid) {
         alert('锁定')
      } else {
         console.log('error submit!', fields)
      }
   })
}
watch(() => props.visible, (newVal) => {
   dVisible.value = newVal
})
watch(() => dVisible.value, (newVal) => {
   emits('update:visible', newVal)
})
</script>
<style lang='scss' scoped>
.body {
   display: flex;
   flex-direction: column;
   .body__avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
}
</style>