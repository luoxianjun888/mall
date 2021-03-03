<template>
  <div class="img-item my-3">
      <div class="prod" v-for="prod in prods" :key='prod.id'>
        <img :src="prod.pimg" :alt="prod.pname"  />
        <p class="pname px-1 pt-2 pb-1">{{prod.pname}}<br>
      询价<span class="price"> <a href="tel:0769-23015498"> 0769-23015498 </a></span> <br>
     <span class="small"> <i class="fa fa-flag text-pink" ></i> 品牌：{{prod.Brand.bname}}
      <i class="fa fa-star-o text-pink" ></i>  {{prod.views}} </span> 

        </p>
      </div>
 </div>
</template>

<script>
export default {
    name:'HomeProd',
    props:{
        prods:Array,
    }
}
</script>

<style scoped>
.img-item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.prod {
  width: 47%;
  height: 350px;
  overflow: hidden;
  margin-bottom: 12px;
  border: var(--gray) 1px solid;
  position: relative;
  border-radius: 5px;
}
.prod img {

  /* height: 98%; */
  transform: translateY(-.5rem);
    transition: .5s ease-out;
}

.prod:hover img,.prod img:hover {

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
  .prod {
    height: 230px;
  }
  .prod img{
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