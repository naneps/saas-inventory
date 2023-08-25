import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "./index.js";
import router from "./router";
import pinia from "./store";
const app = createApp(App);
app.use(pinia);
app.use(router).mount("#app");
