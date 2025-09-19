<template>
  <div class="marker-trigger" @click="onclick">
    <div class="icon">
      <div class="icon-inner">
        <img :src="data.icon" />
        <div class="error"></div>
      </div>
    </div>
    <div class="name">{{ data.name }}</div>
  </div>
</template>
<script setup lang="tsx">
interface PropsType {
  data: any;
  onclick: () => void;
}
const props = defineProps<PropsType>();
</script>
<style lang="scss" scoped>
.marker-trigger {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;
  position: relative;
  z-index: 999999;

  img {
    position: relative;
    z-index: 2;
  }

  .error {
    position: absolute;
    z-index: 1;
    width: 30px;
    height: 30px;
    content: "";
    background-color: red;
    border-radius: 50%;
    opacity: 0;
    animation: ripple-effect 2s linear 0.5s infinite;
  }

  @keyframes ripple-effect {
    0% {
      opacity: 1;
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(2);
    }
  }

  .icon {
    position: relative;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    padding: 2px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 5px 8px #00000059;

    .icon-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #fff 0%, #a9bdc2 100%);
      border-radius: 50%;

      img {
        width: 80%;
        height: 80%;
      }
    }
  }

  .name {
    padding: 0 10px;
    margin-top: 4px;
    overflow: hidden;
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
    background-color: #00000073;
    border-radius: 20px;
  }
}
</style>
