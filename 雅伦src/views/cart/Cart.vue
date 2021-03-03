<template>
    <div id="brand">
    <nav-bar class="navbar">
      <div slot="left"  @click="goback">←</div>
      <div slot="center">雅伦巴斯蒂安琴行</div>
      <div slot="right" @click="showmenus"><i class="fa fa-reorder"></i></div>
    </nav-bar>
    <transition enter-active-class="animate__animated animate__bounceInRight" 
        leave-active-class="animate__animated animate__bounceOutRight" >
    <menus v-show="showmenu" @closemenu="showmenu=!showmenu"></menus>
   </transition>

    <div class="content" ref="content">
        <sales/>
    </div>

        <transition enter-active-class="animate__animated animate__fadeInDownBig" 
        leave-active-class="animate__animated animate__fadeOutUpBig" >
        <back-top  @click.native="backTop"  v-show="isShow"></back-top>
        </transition>
    </div>
</template>
<script>
import scroll from 'better-scroll';

import Sales from './child/Sales';

import BackTop from '@/components/content/BackTop';
import NavBar from "@/components/common/navbar/NavBar.vue";
import Menus from '@/components/content/Menus';

export default {
    name:'Cart',
    data(){
        return{
            isShow:false,
            saveY:0,
            showmenu:false,
            scroll: null,
            saveY:0,
        }
    },
    components:{
        NavBar,BackTop,Menus,Sales
    },
  activated(){
      this.scroll.scrollTo(0,this.saveY,400);
      this.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.scroll.y;
  },
  created(){
    
    },
    mounted(){
        this.scroll= new scroll(this.$refs.content,{
                click: true,
                probeType: 3,
                pullUpLoad: true,
        })
       this.$bus.$on('itemImageLoad',()=>{
           this.scroll.refresh();
      })
      this.scroll.on('scroll',(pos)=>{
          this.isShow=pos.y < -1000;
      })
    },
    methods:{
    showmenus(){
      this.showmenu=!this.showmenu;
    },
    backTop(){
        this.scroll.scrollTo(0,0,900);
    },
     goback(){
        this.$router.go(-1);
    },
    }
}
</script>

<style scoped>
#brand{
    height: calc(100vh - 88px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>