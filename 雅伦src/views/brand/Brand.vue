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
         <scroll class="content"  ref="scroll" @scroll="showtop"
           :pull-up-load="true"
           :probetype="3"
             @pullingUp="loadMore">
            <ul class="ul-list">
                  <li v-for="(i,index) in goods.list" :key="index">
                      <div class="lidiv">
                    <img :src="i.pimg" alt="" @load="imgLoad" @click="goDetail(i.id)">
                    </div>
                    <div class="title lidiv2" @click="goDetail(i.id)">{{i.pname}}</div>
                </li>
            </ul> 
        </scroll>
        <transition enter-active-class="animate__animated animate__fadeInDownBig" 
        leave-active-class="animate__animated animate__fadeOutUpBig" >
        <back-top @click.native="backTop" v-show="isShow"></back-top>
        </transition>
    </div>
</template>
<script>
import Scroll from '@/components/common/scroll/Scroll';
import BackTop from '@/components/content/BackTop';
import {getProds} from '@/network/home';
import NavBar from "@/components/common/navbar/NavBar.vue";
import {debounce} from "@/common/utils";
import Menus from '@/components/content/Menus';
export default {
    name:'Cart',
    data(){
        return{
            goods:{page:1,list:[],pages:''},
            isShow:false,
            saveY:0,
            showmenu:false
        }
    },
    components:{
        NavBar,BackTop,Scroll,Menus
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,400);
      this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getscrolly();
  },
  created(){
          this.getgoods();
    },
    mounted(){
       const refresh = debounce(this.$refs.scroll.refresh,100)
       this.$bus.$on('imgLoad',()=>{
           refresh();
      })
    },
    methods:{
         goDetail(id){
            this.$router.push('detail-'+id);
        },
            showmenus(){
      this.showmenu=!this.showmenu;
    },
        goback(){
        this.$router.go(-1);
    },
        loadMore(){
            this.getgoods();
            this.$refs.scroll.refresh();
        },
      showtop(position){
            this.isShow=position.y < -1000;
        },
        backTop(){
            this.$refs.scroll.scrollTo(0,0);
        },
        getgoods(){
            const page = this.goods.page
            getProds(page).then(res=>{
                this.goods.list.push(...res.products);
                this.goods.page+=1
                this.$refs.scroll.finishPullUp();
            })
        },
        imgLoad(){
             this.$bus.$emit('itemImageLoad')
      }
    }
}
</script>

<style scoped>
#brand{
    height: calc(100vh - 88px);
}
.content{
    height: 100%;
    background: linear-gradient(to bottom,#ff7641,rgb(255, 185, 144));
    /* overflow-y: scroll; */
    overflow: hidden;
    color:#000;
}
        ul {
            max-width: var(--max-width);
            margin: 0 auto;
            text-align: center;
             background:  rgb(133, 17, 2);
        }
.ul-list li{
         width: 50%;
            height: 340px;
            display: inline-block;
            position: relative;
            overflow: hidden;
}
.ul-list li img{
    width:100%;
    height:auto;
    transform: translateY(-10px);
}
.title{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: .5rem;
    background: linear-gradient(to right, var(--pink),rgb(255, 75, 75) );
    color:#fff;
    cursor: pointer;
}

@media screen and (max-width:600px) {
    .ul-list li{
        height:210px;
    }

}
.navbar{
  cursor: pointer;
}

       .lidiv{
            position: absolute;
            overflow: hidden;
            border-radius: 15px;
            border: #fff 2px solid;
            top:10px;
            bottom: 50px;
            left: 10px;
            right: 5px;
        }
        .lidiv2{
            position: absolute;
            overflow: hidden;
            border-radius: 15px;
            border: rgb(255, 232, 128) 1px solid;
            background:linear-gradient(to left top ,#f00,#a00);
            bottom: 10px;
            left: 10px;
            right: 5px;
            padding:0 .4rem;
            color:rgb(247, 219, 130);
            height: 30px;
            line-height: 30px;
            transition: .5s ease-out;
        }
        .lidiv2:hover{
            background:linear-gradient(to bottom right,#f00,#a00);
        }
        li:nth-child(even) .lidiv{
            left: 5px;
            right: 10px;
        }
        li:nth-child(even) .lidiv2{
            left: 5px;
            right: 10px;
        }

        li img {
            height: 100%;
            width: 100%;
            transition: .5s ease-out;
        }
        li:hover img{
            transform: scale(1.2);
        }

    



</style>