import autofit from "autofit.js";
import { createApp } from "vue";
import App from "./App.vue";
import "animate.css";
import "@/assets/styles/reset.css";
import "@/assets/fonts/DincorosBlack/result.css";
import "@/assets/fonts/DouyuFont/result.css";
import "@/assets/fonts/SarasaMonoSC/result.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import arco from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

const boostrap = async () => {
  const app = createApp(App);
  app.use(arco);
  app.mount("#app");

  const ScreenSize = {
    big: [2560, 1440],
    normal: [1920, 1080],
    small: [1280, 720],
  }.normal;

  autofit.init({
    el: "#app",
    dw: ScreenSize[0],
    dh: ScreenSize[1],
    resize: true,
    // ignore: [".leaflet-map-pane"],
  });
};

boostrap();
