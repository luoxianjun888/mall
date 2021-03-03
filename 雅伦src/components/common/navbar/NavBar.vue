<template>
    <div class="nav-bar bg-pink text-light text-center">
        <div class="left"> <slot name="left">左边</slot> </div>
        <div class="center"><slot name="center"> 中间</slot> </div>
        <div class="right"> <slot name="right">右边</slot></div>
        
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        position: fixed;
        top:0;
        left:0;
        right:0;
        max-width: var(--max-width);
        margin-left:auto;
        margin-right: auto;
        z-index: 80;
    }
    .center{
        flex:1;
    }
    .left,.right{
        width:60px;
    }

</style>