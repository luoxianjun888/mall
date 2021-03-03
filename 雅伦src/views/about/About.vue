<template>
  <div class="about">
    <nav-bar class="navbar">
      <div slot="left" @click="goback">←</div>
      <div slot="center">雅伦巴斯蒂安琴行</div>
      <div slot="right" @click="showmenus"><i class="fa fa-reorder"></i></div>
    </nav-bar>
    <transition
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutRight"
    >
      <menus v-show="showmenu" @closemenu="showmenu = !showmenu"></menus>
    </transition>
    <div class="centont" ref="centont">
      <b1></b1>
    </div>

    <transition
      enter-active-class="animate__animated animate__fadeInDownBig"
      leave-active-class="animate__animated animate__fadeOutUpBig"
    >
      <back-top @click.native="backTop" v-show="isShow"></back-top>
    </transition>
  </div>
</template>

<script>
import scroll from "better-scroll";
import B1 from "./child/B1";
import NavBar from "@/components/common/navbar/NavBar.vue";
import Menus from "@/components/content/Menus";
import BackTop from "@/components/content/BackTop";
export default {
  name: "About",
  data() {
    return {
      showmenu: false,
      scroll: null,
      isShow: false,
      saveY:0,
    };
  },
  components: {
    B1,
    NavBar,
    Menus,
    BackTop,
  },
  mounted() {
    var centont = this.$refs.centont;
      this.scroll = new scroll(centont, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
      });
      this.$bus.$on("itemImageLoad", () => {
        this.scroll.refresh();
      });
      this.scroll.on("scroll", (pos) => {
        this.isShow = pos.y < -1000;
      });
  },
   activated(){
      this.scroll.scrollTo(0,this.saveY,400);
      this.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.scroll.y;
  },
  methods: {
    showmenus() {
      this.showmenu = !this.showmenu;
    },
    goback() {
      this.$router.go(-1);
    },
    backTop() {
      this.scroll.scrollTo(0, 0, 900);
    },
  },
};
</script>

<style scoped>
.about {
  height: calc(100vh - 88px);
}
.centont{
    height: 100%;
}
.navbar {
  cursor: pointer;
}
</style>