<template>
  <Popover position="rt" trigger="click" content-class="marker-popover">
    <MarkerTrigger :data="data" />
    <template #content>
      <MarkerPopup :data="data" />
    </template>
  </Popover>
</template>
<script setup lang="ts">
import { Popover } from "@arco-design/web-vue";
import MarkerTrigger from "./MarkerTrigger.vue";
import MarkerPopup from "./MarkerPopup.vue";

interface PropsType {
  data: any;
}
defineProps<PropsType>();
</script>
