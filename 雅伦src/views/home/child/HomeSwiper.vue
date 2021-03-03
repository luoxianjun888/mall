<template>
    <swiper>
        <swiper-item v-for="item in imgarr" :key="item.id">
                <a href=""> <img :src="item.img" alt="" @load="imgLoad"> </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";
export default {
    name:'HomeSwiper',
    props:{
        imgarr:Array,
    },
    data(){
        return{
            isLoad:false
        }
    },
    components:{
        Swiper, SwiperItem
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
            this.$emit('swiperimgload');
            this.isLoad=true;
            }
        }
    }
}
</script>