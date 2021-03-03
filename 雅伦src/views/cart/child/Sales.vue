<template>
<div>
    <ul>
        <li> <img src="~/assets/img/1.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/2.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/3.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/4.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/5.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/6.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/7.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/8.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/9.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/91.jpg" alt="" @load="imgLoad"></li>
        <li> <img src="~/assets/img/92.jpg" alt="" @load="imgLoad"></li>
    </ul>
</div>
    
</template>

<script>
export default {
    name:'Sales',
    data(){
        return{
            
        }
    },
    methods:{
       imgLoad(){
        this.$bus.$emit('itemImageLoad')
      },
    }

}
</script>

<style scoped>
li{
    margin-bottom:-4px !important;
}
</style>