<template>
<div> <h2 class="text-center py-3"> <span class="h2 py-1">品牌大全</span> </h2>
  <div class="recommend py-3 text-center">
    <div class="recommend-item my-2 px-3" v-for="item in recommends" :key="item.id">
         <a href=""><img :src="item.img" alt="">
          <p class="mt-2">{{item.title}}</p></a> 
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: Array,
  },
};
</script>

<style scoped>

.recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.recommend-item{
    width:25%;
    font-size: .8rem;
}
.h2{
  border-bottom: var(--pink) 3px solid;
}
</style>