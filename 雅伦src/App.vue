<template>
  <div id="app">
    <keep-alive exclude="Detail">
     <router-view ></router-view>
    </keep-alive>
    <tabbar>
      <tabbar-item path="/home">
        <i class="fa fa-home" slot="icon"></i>
        <p slot="item">首页</p>
      </tabbar-item>
      <tabbar-item path="/brand">
        <i class="fa fa-tags" slot="icon"></i>
        <p slot="item">品牌</p>
      </tabbar-item>
      <tabbar-item path="/cart">
        <i class="fa fa-shopping-cart" slot="icon"></i>
        <p slot="item">促销</p>
      </tabbar-item>
      <tabbar-item path="/about">
        <i class="fa fa-user-circle-o" slot="icon"></i>
        <p slot="item">关于</p>
      </tabbar-item>
    </tabbar>

  </div>
</template>
<script>
import tabbar from "@/components/common/tabbar/TabBar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";
export default {
  name: "app",
  components: {
    tabbar,
    TabbarItem,
  },
};
</script>

<style>
@import "~@/assets/css/base.css";
#app {
  max-width: var(--max-width);
  margin: 44px auto;
  overflow: hidden;
}
</style>
