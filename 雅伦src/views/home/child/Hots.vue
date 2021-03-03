<template>
  <div class="recommend py-3 text-center">
      <div class="recommend-item my-1 px-3" v-for="item in hots" :key="item.id">
         <a href=""><img :src="item.img" alt="">
          <p class="mt-2">{{item.title}}</p></a> 
      </div>
  </div>
</template>

<script>
export default {
  name: "Hots",
  props: {
    recommends: Array,
    hots:Array
  },
};
</script>

<style scoped>

.recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-bottom: #eee 10px solid;
}
.recommend-item{
    width:25%;
    font-size: .8rem;
}
</style>