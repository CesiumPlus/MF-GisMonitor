<template>
  <div class="layout">
    <LayoutHeader />
    <!-- <LayoutFooter v-show="!loading.isLoading" /> -->
    <div class="layout-main">
      <div class="main-left">
        <slot name="left" />
      </div>
      <div class="main-right">
        <slot name="right" />
      </div>
      <div ref="container" class="main-middle">
        <slot name="middle" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LayoutHeader from "@/layout/LayoutHeader.vue";
// import LayoutFooter from "@/layout/LayoutFooter.vue";
// import LayoutLoading from "@/layout/LayoutLoading.vue";
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  font-family: SarasaMonoSC;
  background-color: #000;
  .layout-main {
    position: relative;
    width: 100%;
    height: calc(100% - 80px);
    background-color: #05326a;
    background-image: url(@/assets/images/grid_bg_01.png);
    background-repeat: repeat;
    perspective: 800px;
    .main-left {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 999;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: repeat(3, calc((100% - 40px) / 3));
      grid-gap: 20px;
      width: 380px;
      height: calc(100% - 40px);
    }
    .main-right {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 999;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: repeat(3, calc((100% - 40px) / 3));
      grid-gap: 20px;
      width: 380px;
      height: calc(100% - 40px);
      // transform: rotateY(-8deg);
    }
    .main-middle {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        z-index: 99;
        width: 100%;
        height: 100%;
        pointer-events: none;
        content: "";
        background-image: radial-gradient(circle, transparent 30%, #000 90%);
      }
    }
  }
}
</style>
