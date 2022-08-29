import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";

import "bootstrap/dist/css/bootstrap.min.css";

export const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

import {ElButton} from "element-plus";
app.component("el-button", ElButton);

app.mount("#app");
