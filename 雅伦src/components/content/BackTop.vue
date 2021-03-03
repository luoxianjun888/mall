<template>
    <div id="back-top" class="back-top text-center">
        <i class="fa fa-arrow-up mt-1"></i>
        <p>TOP</p>
    </div>
</template>

<script>
export default {
    name:'BackTop',
}
</script>

<style scoped>
#back-top{
    z-index: 68;
    position: absolute;
    bottom: 50px;
    right: 10px;
    background: var(--pink);
    border-radius:50%;
    width:40px;
    height: 40px;
    color:#fff;
    overflow: hidden;
    cursor: pointer;
    opacity: .85;
}
#back-top p{
font-size:5px;
line-height: 8px !important;
}
#back-top  i{
    font-size: 1.4rem;
}
</style>