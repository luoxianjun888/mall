<template>
  <div id="menu">
    <h3 class="mt-2">导航菜单</h3>
    <div class="menus mt-1">
      <div class="menus-item" @click="gocart">
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 品牌钢琴</h4>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 欧美钢琴</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 日韩钢琴</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 合资钢琴</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 欧美钢琴</p>
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 艺术培训</h4>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 中心简介</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 培训课程</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 师资力量</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 考级报名</p>
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 门店中心</h4>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 销售门店</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 培训门店</p>
      </div>
      <div class="menus-item" @click="gohome">
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 促销活动</h4>
        <p class="brand-item">
          <i class="fa fa-angle-right"></i> 0元租售钢琴活动
        </p>
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 关于雅伦</h4>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 品牌故事</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 团队风采</p>
        <h4 class="my-2">客户感言</h4>
        <h4 class="my-2"><i class="fa fa-arrow-down"></i> 新闻资讯</h4>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 公司新闻</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 行业资讯</p>
        <p class="brand-item"><i class="fa fa-angle-right"></i> 钢琴学习</p>
        <h4 class="my-2">联系雅伦</h4>
        <h4 class="my-2">淘宝商城</h4>
      </div>
    </div>

    <div class="imgbg">
      <img src="~assets/img/bg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {
      gocart(){
          this.$router.push('/cart');
          this.$emit('closemenu')
      },
      gohome(){
        this.$router.push('/home')
        this.$emit('closemenu')
      }
  },
};
</script>

<style scoped>
#menu {
  position: absolute;
  max-width: var(--max-width);
  height: calc(100vh - 70px);
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(241, 30, 83, 0.95),
    rgb(250, 129, 129)
  );
  z-index: 79;
  padding: 1rem;
  text-align: center;
  color: #fff;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 45px;
  margin-right: auto;
  margin-left: auto;
}

.brand-item {
  margin: 0.4rem auto;
  padding: 0.3rem;
  background: #fff;
  color: #000;
  border-radius: 5px;
  width: 90%;
}
h4 {
  margin: 0 auto;
  margin-top: 0.5rem;
  border-radius: 5px;
  width: 90%;
  border: #fff 1px solid;
  padding: 0.3rem;
  cursor: pointer;
}
.imgbg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.imgbg img {
  height: 220px;
}
.menus {
  display: flex;
}
.menus-item {
  flex: 1;
}
.menus-item p {
  cursor: pointer;
}
</style>