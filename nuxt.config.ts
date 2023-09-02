// https://nuxt.com/docs/api/configuration/nuxt-config
import visualizer from "rollup-plugin-visualizer";

export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true
		}
	},
	components: false,
	hooks: {
		"build:manifest": (manifest) => {
			for (const key in manifest) {
				manifest[key].dynamicImports = [];
				const file = manifest[key];

				if (file.assets) {
					file.assets = file.assets
						.filter(
							(asset) =>
								!asset.endsWith(".webp") &&
								!asset.endsWith(".jpg") &&
								!asset.endsWith(".png") &&
								!asset.endsWith(".svg") &&
								!asset.endsWith(".jpeg")
						);
				}
			}
		}
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/eslint-module",
		"@nuxt/image",
		"@nuxtjs/robots"
	],
	nitro: {
		prerender: {
			crawlLinks: true,
			routes: [
				"/"
			]
		}
	},
	vite: {
		build: {
			commonjsOptions: {
				include: []
			},
			rollupOptions: {
				plugins: [
					visualizer({})
				],
				output: {
					manualChunks: {
						// zones: ["/store/auditModule.ts","leaflet"]
					}
				},
				treeshake: true
			}
		},
		optimizeDeps: {
			disabled: false
		}
	},
	image: {
		dir: "./assets"
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "ru"
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
				{ name: "viewport", content: "width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes" }
			]

		}
	}
});
