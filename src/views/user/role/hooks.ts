import i18n from "@/i18n";
import {Role} from '@/mock/model'
export const useTableData = (data:Role[]) => {
    return data.map((r) => {
        r.name = i18n.global.t(`role.${r.name}`)
        return r
    })
}