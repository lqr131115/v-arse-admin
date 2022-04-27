<template>
    <div class="footer">
        <div class="footer__github">
            <el-link :underline="false" href="https://github.com/lqr131115/v-arse-admin" target="_blank">
                <svg-icon name="github" :size="1.3"></svg-icon>
            </el-link>
        </div>
        <div class="footer__copyright">
            <span class="copyright">
                <svg-icon name="copyright"></svg-icon>
                <span ml5 fz14 fw5>2022 没人牵挂的大宝技术支持</span>
            </span>
        </div>
    </div>
</template>
<script lang='ts' setup>
</script>
<style lang='scss' scoped>
@use '@/styles/tools/mixin/BEM'as *;

@include b(footer) {
    display: flex;
    height: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    background-color: #eee;

    @include e(copyright) {
        margin: 10px 0;
        .copyright {
            color: rgba(0, 0, 0, .45);
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }

    @include e(icp) {
        .icon:hover {
            cursor: pointer;
        }
    }

}
</style>