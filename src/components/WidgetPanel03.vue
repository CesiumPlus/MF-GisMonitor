<template>
  <LayoutPanel>
    <div class="wrap">
      <div ref="container" class="item-list">
        <div v-for="{ title, time } in list" :key="time" class="item">
          <div class="item-circle"></div>
          <div class="item-name">{{ title }}</div>
          <!-- <div class="item-time">{{ time }}</div> -->
        </div>
      </div>
    </div>
  </LayoutPanel>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { LayoutPanel } from "@/layout";

const list = ref<any[]>([
  {
    title: "智慧水利平台V3.2版本升级公告",
    time: "2025-08-05 00:00",
  },
  {
    title: "XX水库监测设备（ID: WH-2025-058）离线告警",
    time: "2025-07-10 14:30",
  },
  {
    title: "XX大坝渗压数据异常（超阈值+15%）",
    time: "2025-07-15 09:12",
  },
  {
    title: "关于启动2025年汛期Ⅲ级应急响应的通知",
    time: "2025-06-01 08:00",
  },
  {
    title: "2025年Q3泵站设备维护计划发布",
    time: "2025-07-01 10:00",
  },
  {
    title: "雨水情监测系统数据同步延迟修复完成",
    time: "2025-07-08 16:45",
  },
  {
    title: "大坝安全巡检机器人部署通知",
    time: "2025-06-20 13:20",
  },
  {
    title: "智慧水利移动端APP上线公告",
    time: "2025-05-15 09:00",
  },
  {
    title: "XX流域水位超警戒线预警",
    time: "2025-07-12 18:30",
  },
  {
    title: "水库调度系统权限更新说明",
    time: "2025-06-25 11:15",
  },
  {
    title: "灌区自动化控制系统故障通报",
    time: "2025-07-05 07:50",
  },
  {
    title: "闸门远程控制功能临时维护通知",
    time: "2025-06-10 22:00",
  },
  {
    title: "智慧水利大数据分析报告（2025上半年）发布",
    time: "2025-07-01 14:00",
  },
  {
    title: "XX泵站电力中断紧急抢修通知",
    time: "2025-07-18 03:10",
  },
  {
    title: "雨量监测站点校准工作安排",
    time: "2025-06-05 09:30",
  },
  {
    title: "水利工程安全培训会议通知",
    time: "2025-07-22 15:00",
  },
  {
    title: "系统登录异常问题已修复",
    time: "2025-06-30 12:40",
  },
  {
    title: "XX水库泄洪调度演练计划",
    time: "2025-07-30 08:00",
  },
  {
    title: "水质监测数据接口更新说明",
    time: "2025-06-15 17:25",
  },
  {
    title: "智慧水利专家在线答疑时段调整",
    time: "2025-07-10 10:00",
  },
]);

const container = ref();

let timer: any;
onMounted(() => {
  if (timer) window.clearInterval(timer);
  timer = setInterval(() => {
    container.value.classList.add("scroll");
    setTimeout(() => {
      if (!timer) return void 0;
      container.value.classList.remove("scroll");
      list.value.push(list.value.shift());
    }, 2000);
  }, 3000);
});
</script>

<style lang="scss" scoped>
@keyframes row-out {
  from {
    top: 0;
  }
  to {
    top: -36px;
  }
}
.wrap {
  width: 100%;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}
.item-list {
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  height: 670px;
  box-sizing: border-box;

  &.scroll {
    position: relative;
    animation: row-out 1s linear forwards;
    .row:first-child {
      opacity: 0;
      transition: opacity 1s;
    }
  }
  .item {
    width: calc(100% - 40px);
    height: 36px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    box-sizing: border-box;
    background: linear-gradient(90deg, #74fabd22, transparent);
    .item-circle {
      position: absolute;
      left: 10px;
      width: 5px;
      height: 10px;
      background-color: #74fabd;
    }

    .item-name {
      position: absolute;
      left: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      box-sizing: border-box;
    }
  }
}
</style>
