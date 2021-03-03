<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="left"> </div>
      <div slot="center">雅伦巴斯蒂安琴行</div>
      <div slot="right" @click="showmenus"><i class="fa fa-reorder"></i></div>
    </nav-bar>
    <transition enter-active-class="animate__animated animate__bounceInRight" 
        leave-active-class="animate__animated animate__bounceOutRight" >
    <menus v-show="showmenu" @closemenu="showmenu=!showmenu"></menus>
    </transition>
    <tab-control :titles="titles" class="tab-control" ref="tabControl1" @tabclick="tabclick" v-show="isTab" />
<scroll class="content" ref="scroll" :probetype="3"
   :pull-up-load="true"
    @pullingUp="loadMore"
   @scroll="contentscroll">
   <home-swiper :imgarr="imgarr" @swiperimgload="swiperimgload"></home-swiper>
   <hots :hots="hots"></hots>
   <recommend :recommends="recommends"></recommend>
   <tab-control :titles="titles" @tabclick="tabclick" ref="tabControl2" />
   <goods-list :goods="showGoods"></goods-list>
</scroll>
<transition enter-active-class="animate__animated animate__fadeInDownBig" 
        leave-active-class="animate__animated animate__fadeOutUpBig" >
<back-top v-show="isShow" @click.native="backTop"></back-top>
</transition>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Menus from '@/components/content/Menus';

import TabControl from '@/components/content/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';


import BackTop from '@/components/content/BackTop';
import HomeSwiper from './child/HomeSwiper';
import Recommend from './child/Recommend';
import Hots from './child/Hots';
import Scroll from '@/components/common/scroll/Scroll';

import {getProd,getBrand,getImg} from '@/network/home';
import {debounce} from '@/common/utils';

export default {
  name: "Home",
  data() {
    return {
      imgarr:[],
      prods:[],
      recommends:[],
      hots:[],
      goods:{
        oumei:{page:1,list:[]},
        rihan:{page:1,list:[]},
        hezi:{page:1,list:[]}
      },
      currentType:'oumei',
      titles:['欧美钢琴','日韩钢琴','合资钢琴','国产钢琴'],
      scroll:null,
      isShow:false,
      tabOffsetTop:0,
      isTab:false,
      saveY:0,
      showmenu:false
    }
  },

  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    },
  },
  mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,100)
       this.$bus.$on('itemImageLoad',()=>{
           refresh();
      })
  },
  created() {
      this.imgs();
      this.prod('oumei');
      this.prod('rihan');
      this.prod('hezi');
     },
  components: {
    NavBar,HomeSwiper,Recommend,Hots,TabControl,GoodsList,Scroll,BackTop,Menus
  },
  activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,400);
      this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getscrolly();
  },
  methods: {
    // 事件监听
    showmenus(){
      this.showmenu=!this.showmenu;
    },
     tabclick(index){
       switch(index){
         case 0:
           this.currentType='oumei';
           break;
          case 1:
            this.currentType='rihan';
            break;
          case 2:
            this.currentType='hezi';
            break;
          case 3:
            this.currentType='oumei';
            break;
       }
       this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;
      },
      swiperimgload(){
        this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
      },
     contentscroll(position){
         this.isShow=(-position.y) > 1000;
         this.isTab=(-position.y)>this.tabOffsetTop;
    },  
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
    loadMore(){
      this.prod(this.currentType)
      this.$refs.scroll.refresh();
    },
    //  网络请求
    imgs(){
        getImg().then(res=>{
            this.imgarr=res.imgs;
            this.recommends.push(...res.recommends)
            this.hots.push(...res.hots)
        })
    },
    prod(type){
      const page=this.goods[type].page;
        getProd(type,page).then(res=>{
            // console.log(res)
           this.goods[type].list.push(...res.products);
           this.goods[type].page+=1;
            this.$refs.scroll.finishPullUp();
        })
    }
  }
};
</script>

<style scoped>
#home{
  height: calc(100vh - 88px);
}
.content{
  height: 100%;
  overflow: hidden;
}
.tab-control{
  position:absolute;
  left: 0;
  right: 0;
  z-index: 72;
  max-width: var(--max-width);
  margin-left:auto;
  margin-right: auto;
}
.navbar{
  cursor: pointer;
}
</style>
