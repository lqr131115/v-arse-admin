import type {DescriptionsItem} from '@/types/component'

export const getDependencies = async (key:string = 'dependencies') => {
    const result = await import('../../../package.json')
    return result[key]
}

export const genDependenciesDesData = (data:object): DescriptionsItem[]=> {
    let result:DescriptionsItem[] = []
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const item:DescriptionsItem = {label:'',content:''}
            item.label  = key
            item.content = data[key]
            item.width = 160
            result.push(item)
        }
    }
    return result
}