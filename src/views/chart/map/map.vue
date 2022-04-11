<template>
    <div class="map">
        <div class="map__container">
            <!-- <c-map-view></c-map-view>   -->
        </div>
    </div>
</template>
<script lang='ts' setup>

</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(map) {
    background-color: #eee;

    @include e(container) {
        padding: 10px;
    }
}
</style>