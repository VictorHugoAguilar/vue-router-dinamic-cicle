import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";

// Create and mount the root instance.
createApp(App).use(router).mount("#app");
