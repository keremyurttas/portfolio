import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { VueCarousel } from "vue-carousel";
import "./index.css";

createApp(App).use(VueCarousel).use(router).mount("#app");
