<template>
    <div id="detail">
    <nav-bar class="navbar">
      <div slot="left"  @click="goback">←</div>
      <div class="pname" slot="center">{{goods.title}}</div>
      <div slot="right" @click="showmenus"><i class="fa fa-reorder"></i></div>
    </nav-bar>
    <transition enter-active-class="animate__animated animate__bounceInRight" 
        leave-active-class="animate__animated animate__bounceOutRight" >
    <menus v-show="showmenu"></menus>
    </transition>
<scroll class="content" ref="scroll" @scroll="contentscroll" :probetype="3">
       <p style="color:#fff;">2  </p>
         <h2 class="text-center"> {{goods.title}} </h2>
         <hr>
        <img :src="goods.img" :alt="goods.title"  @load="imgLoad">
       <hr>
       <h3 class="prod"> <i class="fa fa-arrow-circle-right"></i> 钢琴询价</h3>
        <div class="my-2">
             <input type="text" class="form-control" placeholder="您的手机：" v-model="postcomment.cname">
        </div>
         <div class="my-2">
            <textarea name="" id="" class="form-control" cols="30" rows="3"
            v-model="postcomment.content"
             placeholder="询价内容：或致电0796-23015498"></textarea>
        </div>
               <div class="my-2 text-right">
                <p ref="info1" class="text-pink"></p>
           <button class="btn btn-lineout-dark"  @click="addprice">提交</button>
       </div>
        <h3 class="prod mt-3"><i class="fa fa-arrow-circle-right"></i> 钢琴品牌</h3>
        <p>钢琴品牌: <span class="text-pink">{{goods.bname}}</span> </p>
       <h3 class="prod mt-3"><i class="fa fa-arrow-circle-right"></i> 钢琴规格</h3>
        <p>{{goods.jieshao}}</p>
        <h3 class="prod mt-3"><i class="fa fa-arrow-circle-right"></i> 用户评论</h3>
         <div class="comment" v-show="goods.comment==''">暂无评论，欢迎留言评论</div>
        <div class="comment" v-for="item in goods.comment" :key="item.id">
            <div class="lborder">
            <h5 class="user"> <i class="fa fa-user-circle-o"></i> {{item.cname|changePhone}} </h5>
          <p class="comment-content">{{item.content}} </p> 
           <p class="time"> <i class="fa fa-clock-o"></i> 
           {{item.updatedAt|getTime}}
           </p>   
         </div>
         </div>
        
        <h3 class="prod  mt-3"><i class="fa fa-arrow-circle-right"></i> 发表评论</h3>
        <div class="my-2">
             <input type="text" class="form-control" placeholder="您的手机：" v-model="postcomment.cname">
        </div>
         <div class="my-2">
            <textarea name="" id="" class="form-control" cols="30" 
            v-model="postcomment.content"
            rows="5" placeholder="评论内容："></textarea>
        </div>
               <div class="my-2  text-center">
                   <p ref="info2" class="text-pink"></p>
           <button class="btn btn-lineout-pink w-50" @click="addComment">提交</button>
       </div>
       <p class="text-center my-4" style="margin-top:6rem"><img src="~/assets/img/68.png" alt=""></p>
       <p style="color:#fff;" class="my-4">2  </p>
        </scroll>

<transition enter-active-class="animate__animated animate__fadeInDownBig" 
        leave-active-class="animate__animated animate__fadeOutUpBig" >
<back-top v-show="isShow" @click.native="backTop"></back-top>
</transition>


    </div>
</template>

<script>
import BackTop from '@/components/content/BackTop';
import NavBar from "@/components/common/navbar/NavBar.vue";
import Menus from '@/components/content/Menus';
import Scroll from '@/components/common/scroll/Scroll';

import {getDetail,postComment,Goods} from '@/network/detail';
import {debounce} from '@/common/utils';

export default {
    name:'Detail',
    data(){
        return{
            id:this.$route.params.id,
            showmenu:false,
            isShow:false,
            postcomment:{
                cname:'',
                content:'',
                pid:this.$route.params.id,
            },
            goods:{}
        }
    },
    components:{
        NavBar,Menus,Scroll,BackTop
    },
    created(){
         this.detail();
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,200)
       this.$bus.$on('itemImageLoad',()=>{
           refresh();
      })
    },
    filters:{
        changePhone(val){
            var len=val.length;
            var x=val.substring(3,len-2);
            var val=val.replace(x,'******');
            return '用户'+val;
        }
    },
    methods:{
     showmenus(){
      this.showmenu=!this.showmenu;
    },
    goback(){
        this.$router.go(-1);
    },
       imgLoad(){
        this.$bus.$emit('itemImageLoad')
      },
          backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
     contentscroll(position){
         this.isShow=(-position.y) > 600;
    },  
    addprice(){
        postComment(this.postcomment,1).then(res=>{
            // console.log(this.postcomment)
            if(res.code==1 || res.code==2){
                this.$refs.info1.innerHTML=res.msg;
            }
           if(res.code==3){
                this.$refs.info1.innerHTML=res.msg;
                setTimeout(()=>{
                    window.location.reload()
                },600)
            }
            
        })
    },
      addComment(){
        postComment(this.postcomment).then(res=>{
            // console.log(res)
            if(res.code==1 || res.code==2){
                this.$refs.info2.innerHTML=res.msg;
            }
           if(res.code==3){
                this.$refs.info2.innerHTML=res.msg;
                setTimeout(()=>{
                    window.location.reload()
                },600)
            }
            
        })
    },
        detail(){
            getDetail(this.id).then(res=>{
                // console.log(res)
                var detail=res.detail;
                var brand=res.detail.Brand;
                var comment=res.detail.Comments;
                this.goods = new Goods(detail,brand,comment)
            })
        }
    }
}
</script>

<style scoped>
#detail{
    height: calc(100vh - 88px);
    padding: 5px 10px;
    line-height: 160%;
}
.prod{
    background: #fff;
    color:#666;
    font-size: 1rem;
    padding:.3rem .1rem;
    padding-top:.8rem;
    margin-bottom:1rem;
    border-bottom:var(--pink) 1px dotted;
}
.active{
    background: var(--pink) !important;
}
h3 i{
    color: var(--pink) !important;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.content{
  height: 100%;
  overflow: hidden;
}
.pname{
  text-overflow: ellipsis;
  white-space: nowrap;
 }
textarea {
    overflow: auto;
    resize: vertical;
    height: auto !important;
}
.navbar{
  cursor: pointer;
}
.comment{
    padding-bottom: 1rem;
    border-bottom:#aaa 1px dotted;
    font-size: .8rem;
    margin-bottom: 1rem;
    line-height: 150%;
}
.time{
    text-align: right;
    color:#888;
    font-size:.7rem;
    margin-top:.3rem;
}
.lborder{
  padding-left: .6rem;
  border-left:var(--pink) 2px solid;
}
.user{
    padding-bottom: .3rem;
    color:var(--pink);
    font-size: .8rem;
    font-weight: 400;
}

</style>