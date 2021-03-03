<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  @media all and (max-width: 600px){
      .slide {
    height: 270px;
  }
    .slide img {
    height: 100%;
  }
  }

  .slide img {
    width:100%;
  }
</style>
