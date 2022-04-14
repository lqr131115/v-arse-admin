<template>
    <el-popover placement="bottom-start" v-model:visible="visible" :width="360" popper-class="m--notice-popover"
        @hide="handlePopoverHide">
        <template #reference>
            <div class="city-picker-wrapper" @click="handleClick">
                <span class="city-name">{{ cityName }}</span>
                <el-icon>
                    <arrow-down :class="{ 'rotation': visible }" />
                </el-icon>
            </div>
        </template>
        <div class="container">
            <div class="search-wrapper">
                <el-radio-group v-model="radioVal" size="small">
                    <el-radio-button label="py">按拼音</el-radio-button>
                    <el-radio-button label="sf">按省份</el-radio-button>
                </el-radio-group>
                <el-select v-model="selectVal" placeholder="输入城市名称" filterable :filter-method="handleFilter" clearable
                    size="small" @change="handleSelected">
                    <el-option v-for="item in options" :key="item.code" :label="item.name" :value="item.code">
                    </el-option>
                </el-select>
            </div>
            <div class="initial-wrapper">
                <template v-if="radioVal === 'py'">
                    <span v-for="(s, i) in citySpellKeys" :key="i" class="initial" @click="handleClickSpell(s)">{{
                        s
                    }}</span>
                </template>
                <template v-else>
                    <span v-for="(s, i) in cityProvinceKeys" :key="i" class="initial" @click="handleClickSpell(s)">{{
                        s
                            === 'zxs' ? '直辖市' : (s === 'gat' ? '港澳台' : s)
                    }}</span>
                </template>
            </div>
            <div class="city-scroll-wrapper">
                <el-scrollbar height="400px" ref="scrollRef">
                    <template v-if="radioVal === 'py'">
                        <div class="item-wrapper" v-for="(k, i) in citySpellKeys" :key="i" :ref="`#_${k}`"
                            :id="`id_${k}`">
                            <span class="spell">{{ k }}:</span>
                            <div class="cities-wrapper">
                                <span class="city" v-for="c in citiesBySpell[k]" :key="c.code"
                                    @click="handleChooseCity(c)">{{ c.name }}</span>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="item-wrapper" v-for="(k, i) in cityProvinceKeys" :key="i" :ref="`#_${k}`"
                            :id="`id_${k}`">
                            <div class="provinces">
                                <div class="province-wrapper" v-for="(p, pI) in citiesByProvince[k]" :key="pI">
                                    <span>{{ p.provice }}:</span>
                                    <div class="cities-wrapper">
                                        <span class="city" v-for="(c, cI) in p.cities" :key="cI"
                                            @click="handleChooseCity(c)">{{ c.name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </el-scrollbar>
            </div>
        </div>
    </el-popover>
</template>
<script lang='ts' setup>

import { onMounted, ref, watch } from 'vue'
import city from '@/constants/city'
import { ICity } from './hooks'
const citiesBySpell: any = city.citiesBySpell
const citiesByProvince: any = city.citiesByProvince
const citySpellKeys = Object.keys(citiesBySpell)
const cityProvinceKeys = Object.keys(citiesByProvince)
const cityName = ref<string>('北京')
const radioVal = ref<string>('py')
const selectVal = ref<string>('')
const visible = ref<boolean>(false)
const options = ref<ICity[]>([])
const allCities = ref<ICity[]>([])
const scrollRef = ref(null)
const emits = defineEmits(['selected'])
const handleClick = () => {
    visible.value = true
}
const handleClickSpell = (k: string) => {
    // 方法2:getElementById
    const _id = `id_${k}`
    const el = document.getElementById(_id)
    if (el) {
        el.scrollIntoView()
    }
}
const handleChooseCity = (city: ICity) => {
    if (city.name) {
        cityName.value = city.name
        visible.value = false
        emits('selected', cityName.value)
    }
}
const handlePopoverHide = () => {
    selectVal.value = ''
    visible.value = false
}
const handleFilter = (val: string) => {
    if (!val) {
        options.value = allCities.value
    } else {
        options.value = allCities.value.filter(item => {
            const _val = val.toLowerCase()
            const _spell = item.spell.toLowerCase()
            const _name = item.name.toLowerCase()
            return _spell.includes(_val) || _name.includes(_val)
        })
    }
}
const handleSelected = (val: string) => {
    cityName.value = allCities.value.find(city => city.code === val)!.name
    visible.value = false
    emits('selected', cityName.value)
}
const resetScrollTop = () => {
    ; (scrollRef.value as any).setScrollTop(0)
}
watch(() => radioVal.value, newVal => {
    resetScrollTop()
})
onMounted(() => {
    const values = Object.values(citiesBySpell).flat(2) as ICity[]
    allCities.value = values
    options.value = values
})
</script>
<style lang='scss' scoped>
.city-picker-wrapper {
    display: inline-flex;
    padding: 2px;
    align-items: center;
    cursor: pointer;

    .city-name {
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
    }

    .rotation {
        transform: rotate(180deg);
    }

    svg {
        width: 1em;
        height: 1em;
        position: relative;
        top: 2px;
        transition: all 0.25s linear;
    }
}

.container {
    padding: 0 5px;

    .search-wrapper {
        display: flex;
        align-items: center;
        padding: 5px 0;

        .el-radio-group {
            margin-right: 20px;
        }
    }

    .initial-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 5px 0;

        .initial {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 1em;
            padding: 3px;
            margin-right: 4px;
            margin-bottom: 4px;
            border: 1px solid #ccc;
            cursor: pointer;
        }
    }

    .city-scroll-wrapper {
        .item-wrapper {
            display: flex;
            align-items: flex-start;
            margin-bottom: 5px;

            .spell {
                padding: 2px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }

            .provinces {
                display: flex;
                flex-direction: column;
            }

            .cities-wrapper {
                display: flex;
                flex-wrap: wrap;
                margin-left: 2px;

                .city {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 2px 4px;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    margin-right: 4px;
                    margin-bottom: 4px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>