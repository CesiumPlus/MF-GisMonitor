<template>
  <div class="widget-map" ref="container"></div>
</template>
<script setup lang="ts">
import { sites } from "@/assets/jsons";
import { onMounted } from "vue";
import { useLeaflet } from "@/hooks";
import axios from "axios";
import coordtransform from "coordtransform";

const { container, onSetRegion, onAddJsonLayer, onAddMarkers } = useLeaflet();

const toGCJ02 = (geojson: any) => {
  const convertCoord = ([lng, lat]: any) =>
    coordtransform.wgs84togcj02(lng, lat);

  const deepConvert = (coords: any) => {
    if (typeof coords[0] === "number") return convertCoord(coords);
    return coords.map(deepConvert);
  };

  return {
    ...geojson,
    features: geojson.features.map((f: any) => ({
      ...f,
      geometry: {
        ...f.geometry,
        coordinates: deepConvert(f.geometry.coordinates),
      },
    })),
  };
};
onMounted(() => {
  Promise.all([
    axios.get("https://geo.datav.aliyun.com/areas_v3/bound/530303.json"),
    axios.get("/public/jsons/river.geojson"),
    axios.get("/public/jsons/water.geojson"),
  ]).then(([region, river, water]) => {
    onSetRegion(toGCJ02(region.data));
    onAddJsonLayer(toGCJ02(water), {
      weight: 0.5,
      fillColor: "#fff",
      color: "#fff",
      opacity: 0.6,
      fillOpacity: 0.2,
    });
    onAddJsonLayer(toGCJ02(river), {
      weight: 1,
      color: "#fff",
      opacity: 0.3,
    });
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
  // &:after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(65, 143, 203, 0.56);
  //   mix-blend-mode: multiply;
  //   z-index: 999;
  //   pointer-events: none;
  // }
}
</style>
