<template>
  <LayoutPanel>
    <div class="wrap">
      <div ref="container" class="item-list">
        <div
          v-for="{ name, status, time } in list"
          :key="time"
          class="item error"
        >
          <div class="item-circle"></div>
          <div class="item-name">{{ name }}</div>
          <div class="item-time">{{ status }}</div>
        </div>
      </div>
    </div>
  </LayoutPanel>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Random } from "mockjs";
import { LayoutPanel } from "@/layout";

const list = ref<any[]>([
  {
    name: "都斛水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "大蓬降水库",
    lnglat: [],
    status: "设备异常",
  },
  {
    name: "湖边水库",
    lnglat: [],
    status: "测值异常",
  },
  {
    name: "云丽水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "思明湖水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "溪东水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "汀溪水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "石兜水库",
    lnglat: [],
    status: "设备测值异常",
  },
  {
    name: "上李水库",
    lnglat: [],
    status: "设备测值异常",
  },
]);

const container = ref();
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  overflow: hidden;
}
.item-list {
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  height: 670px;

  // overflow: hidden;
  &.scroll {
    position: relative;
    animation: row-out 1s linear forwards;
    .row:first-child {
      opacity: 0;
      transition: opacity 1s;
    }
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    background: linear-gradient(90deg, #74fabd22, transparent);
    &.error {
      background: linear-gradient(90deg, #e38d7022, transparent);
      .item-circle {
        background-color: #e38d70;
      }
    }
    .item-circle {
      position: absolute;
      left: 10px;
      width: 5px;
      height: 10px;
      background-color: #74fabd;
    }
    .item-name {
      width: 30%;
      padding-left: 15px;
    }
    .item-type {
      width: 30%;
    }
    .item-time {
      width: 60%;
      text-align: end;
    }
  }
}
</style>
