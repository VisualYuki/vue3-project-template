import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			//template: {
			//	compilerOptions: {
			//		isCustomElement: (tag) => ["p-button"].includes(tag),
			//	},
			//},
		}),
		ElementPlus(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
