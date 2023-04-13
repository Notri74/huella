import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "bootstrap";
import "bootswatch/dist/yeti/bootstrap.min.css";

createApp(App).use(createPinia()).mount("#app");
