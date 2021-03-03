<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probetype,
      pullUpLoad: this.pullUpLoad,
    });

    if(this.probetype===2 || this.probetype===3){
        this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
        });
    }

    if(this.pullUpLoad){
        this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
        });
    }
  },
  methods: {
    scrollTo(x, y, time = 1500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
       this.scroll && this.scroll.refresh();
    },
    getscrolly(){
      return this.scroll ? this.scroll.y : 0;
    }
  },
};
</script>

<style scoped>
</style>