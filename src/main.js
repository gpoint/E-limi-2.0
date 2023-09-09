import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueProgressBar from "@aacassandra/vue3-progressbar";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

const progressBarOptions = {
  color: "#77132b",
  failedColor: "#ff0000",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "1",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

app.use(VueProgressBar, progressBarOptions)

app.mount("#app");
