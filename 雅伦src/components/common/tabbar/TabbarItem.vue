<template>
  <div class="tabbar-item" @click="gorouter" :class="{'active':isActive}">
    <slot name="icon"></slot>
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:{
      path:String,
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1;
      }
  },
  methods:{
      gorouter(){
          this.$router.push(this.path);
      }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  cursor: pointer;
}
.tabbar-item p {
  font-size: 0.7rem;
}
.tabbar-item i {
  font-size: 1.4rem;
}
.active{
    color:var(--pink);
}
</style>