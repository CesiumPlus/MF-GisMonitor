import { nextTick, onMounted, ref, shallowRef } from "vue";
import * as L from "leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import { isFunction } from "lodash-es";
import { createVNode, defineComponent, h, render } from "vue";
import { WidgetMarker } from "@/components";

function instantiateVueComponent(component: any, props: any) {
  const newComponent = defineComponent({ render: () => h(component, props) });
  const instance = createVNode(newComponent);
  render(instance, document.createElement("div"));
  return instance.el as HTMLElement;
}

export function useLeaflet() {
  const container = ref();
  const map = shallowRef<L.Map>();
  const tile = shallowRef<L.TileLayer>();
  const eventLoop: Function[] = []; //事件队列
  const onBoostrapMap = async () => {
    map.value = L.map(container.value, {
      center: [26.07, 119.2],
      zoom: 11,
      minZoom: 9,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false,
    });
    while (eventLoop.length) {
      const event = eventLoop.pop();
      isFunction(event) && (await event());
    }
  };

  const onBoostrapTile = () => {
    const urls = {
      amap: "https://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
      street: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      satellite:
        "https://wprd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}",
    };
    tile.value = L.tileLayer(urls.amap);
    map.value?.addLayer(tile.value);
  };

  const onSetRegion = (geojson: any, style?: any) => {
    if (!map.value) {
      return eventLoop.unshift(() => onSetRegion(geojson, style));
    }
    const maxBoundary = [
      [73, 59],
      [136, 59],
      [136, 3],
      [73, 3],
      [73, 59],
    ];
    console.log("geojson.features[0]", geojson.features[0]);
    const difference: any = turf.difference(
      turf.polygon([maxBoundary]),
      geojson.features[0]
    );
    const defaultStyle = {
      fillOpacity: 0,
      color: "#fff",
    };
    const inverseRegion = L.geoJSON(difference, {
      style: {
        weight: 3,
        fillColor: "#4190cb",
        fillOpacity: 0.21,
      },
    });
    const positiveRegion = L.geoJSON(geojson.features[0].geometry, {
      style: Object.assign(defaultStyle, style, {
        className: "positive-region",
      }),
    });
    map.value?.addLayer(inverseRegion)?.addLayer(positiveRegion);
    const bounds = turf.bbox(geojson);
    const leafletBounds = L.latLngBounds([
      [bounds[1], bounds[0]],
      [bounds[3], bounds[2]],
    ]);
    map.value?.flyToBounds(leafletBounds, {
      duration: 1.5,
    });
    setTimeout(() => {
      map.value?.setMaxBounds(leafletBounds);
    }, 1500);
  };
  const onAddJsonLayer = (geojson: any, style = {}) => {
    const inverseRegion = L.geoJSON(geojson, {
      style,
    });
    if (!map.value) {
      eventLoop.push(() => map.value?.addLayer(inverseRegion));
    } else {
      map.value?.addLayer(inverseRegion);
    }
  };

  const onAddMarkers = (list: any[]) => {
    list.forEach((item) => {
      onAddMarker(item);
    });
  };
  const onAddMarker = (data: any) => {
    const el: any = instantiateVueComponent(WidgetMarker, {
      data,
      onclick: () => {
        map.value?.flyTo([data.lat, data.lng], 13);
      },
    });
    const icon = L.divIcon({
      html: el.nodeName === "#text" ? el.nextElementSibling : el,
      iconSize: [40, 40],
      iconAnchor: [40 / 2, 40 / 2],
    });
    const marker = L.marker(L.latLng([data.lat, data.lng]), { icon });
    if (!map.value) {
      eventLoop.push(() => map.value?.addLayer(marker));
    }
  };
  onMounted(() => {
    nextTick(() => {
      onBoostrapMap();
      onBoostrapTile();
    });
  });
  return {
    container,
    onSetRegion,
    onAddJsonLayer,
    onAddMarker,
    onAddMarkers,
  };
}
