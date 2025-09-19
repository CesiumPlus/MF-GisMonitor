<template>
  <LayoutPanel>
    <div class="container">
      <div
        v-for="(item, index) in source"
        :key="index"
        :class="{ active: current === index, item: true }"
      >
        <div class="item-label">{{ item.label }}</div>
        <div class="item-value">
          <span class="item-value-text">{{ item.value }}</span>
          <span class="item-value-unit">{{ item.unit }}</span>
        </div>
        <i :class="item.icon" class="item-icon"></i>
      </div>
    </div>
  </LayoutPanel>
</template>
<script setup lang="ts">
import { Random } from "mockjs";
import { LayoutPanel } from "@/layout";
import { ref } from "vue";

const current = ref(0);

setInterval(() => {
  if (current.value < source.length - 1) {
    current.value++;
  } else {
    current.value = 0;
  }
}, 1500);

const source = [
  {
    label: "水库座数",
    value: "23",
    unit: "座",
    icon: "fa-solid fa-code",
    status: Random.pick([true, false]),
  },
  {
    label: "水文站数量",
    value: "15",
    unit: "个",
    icon: "fa-solid fa-water",
    status: Random.pick([true, false]),
  },
  {
    label: "水位站数量",
    value: "42",
    unit: "个",
    icon: "fa-solid fa-gate",
    status: Random.pick([true, false]),
  },
  {
    label: "雨量站数量",
    value: "18",
    unit: "座",
    icon: "fa-solid fa-turbine",
    status: Random.pick([true, false]),
  },
  {
    label: "大坝安全异常数",
    value: "30",
    unit: "个",
    icon: "fa-solid fa-ship",
    status: Random.pick([true, false]),
  },
  {
    label: "大坝安全监测设备数",
    value: "30",
    unit: "个",
    icon: "fa-solid fa-phone",
    status: Random.pick([true, false]),
  },
  {
    label: "雨水情监测设备数",
    value: "30",
    unit: "个",
    icon: "fa-solid fa-fingerprint",
    status: Random.pick([true, false]),
  },

  {
    label: "雨水情预警数",
    value: "30",
    unit: "个",
    icon: "fa-solid fa-anchor",
    status: Random.pick([true, false]),
  },
  {
    label: "离线设备数",
    value: "30",
    unit: "个",
    icon: "fa-solid fa-anchor",
    status: Random.pick([true, false]),
  },
];
</script>

<style lang="scss" scoped>
$emphasize-color: #74f7fd;
.container {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 100%;
  padding-top: 10px;
  cursor: pointer;
  user-select: none;

  .item {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 6px 6px;
    overflow: hidden;
    background-color: rgba(93, 101, 122, 20%);

    .item-label {
      font-size: 14px;
      color: #999;
      text-align: left;
      transition: all 0.3s ease-in-out;
    }
    .item-value {
      position: absolute;
      bottom: 6px;
      right: 6px;
      color: #fff;
      text-align: right;
      transition: all 0.3s ease-in-out;
      .item-value-text {
        font-size: 24px;
        font-weight: bold;
      }
      .item-value-unit {
        font-size: 13px;
        margin-left: 4px;
      }
    }
    .item-icon {
      position: absolute;
      top: 10px;
      right: -10px;
      font-size: 70px;
      color: #ffffff12;
      transition: all 0.3s ease-in-out;
    }

    &:hover,
    &.active {
      .item-icon {
        color: #74fab022;
      }
      .item-label,
      .item-value {
        color: $emphasize-color;
      }
    }
  }
}
</style>
