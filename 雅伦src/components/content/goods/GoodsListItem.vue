<template>
    <div class="goods-item">
      <img :src="goodsItem.pimg" :alt="goodsItem.pname" @load="imgLoad" @click="godetail(goodsItem.id)" />
        <p class="pname px-1 pt-2 pb-1">{{goodsItem.pname}}<br>
      询价<span class="price"> <a href="javascript:;" @click="telClick"> 0769-23015498 </a></span> <br>
     <span class="small"> <i class="fa fa-flag text-pink" ></i> 品牌：{{goodsItem.Brand.bname}}
      <i class="fa fa-star-o text-pink" ></i>  {{goodsItem.views}} </span> 

        </p>
    </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
      telClick(){
        window.location.href = 'tel://0769-23015498'
      },
      imgLoad(){
        this.$bus.$emit('itemImageLoad')
      },
      godetail(id){
        this.$router.push('/detail-'+id)
      }
    }
}
</script>

<style scoped>

.goods-item {
  width: 47%;
  height: 350px;
  overflow: hidden;
  margin-bottom: 16px;
  border: var(--gray) 1px solid;
  position: relative;
  border-radius: 5px;
}
.goods-item img {

  /* height: 98%; */
  transform: translateY(-.5rem);
    transition: .5s ease-out;
}

.goods-item:hover img,.goods-item img:hover {

  /* height: 98%; */
  /* animation: prodan 2s infinite; */
  transform: scale(1.2) translateY(-10px);
  cursor: pointer;
}



.pname{
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
  text-align: center;
  background: #fff;
  border-top:#ccc 1px dotted;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size:0.7rem;
}
.price a{
  font-size:1.1rem;
  color:var(--pink);
  font-weight: bold;
  line-height: 2rem;
}
.small{
  font-size:.7rem;
  color:#aaa;
}
@media screen and (max-width: 600px) {
  .goods-item {
    height: 230px;
  }
  .goods-item img{
      /* margin:0 -1rem; */
      transform: translate(-.1rem,-.1rem);
  }
}
@keyframes prodan{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
}
</style>