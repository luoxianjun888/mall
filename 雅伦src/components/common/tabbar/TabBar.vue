<template>
  <div id="tabbar" class="text-center">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
#tabbar {
  position: fixed;
  display: flex;
  max-width: var(--max-width);
  height: 45px;
  padding-top: 5px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: var(--light);
  color: var(--dark);
  z-index: 82;
}
</style>