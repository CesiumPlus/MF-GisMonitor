<template>
  <div class="widget-map" ref="container"></div>
</template>
<script setup lang="ts">
import { region, river, wave, sites } from "@/assets/jsons";
import { onMounted } from "vue";
import { useLeaflet } from "@/hooks";
const { container, onSetRegion, onAddJsonLayer, onAddMarkers } = useLeaflet();
onMounted(() => {
  onSetRegion(region);
  onAddJsonLayer(wave, {
    weight: 0.5,
    fillColor: "#fff",
    color: "#fff",
    opacity: 0.6,
    fillOpacity: 0.2,
  });
  onAddJsonLayer(river, {
    weight: 1,
    color: "#fff",
    opacity: 0.3,
  });
  onAddMarkers(sites);
});
</script>
<style lang="scss" scoped>
.widget-map {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(65, 143, 203, 0.56);
    mix-blend-mode: multiply;
    z-index: 999;
    pointer-events: none;
  }
}
</style>
