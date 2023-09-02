// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/eslint-module",
		"@nuxt/image",
		"@nuxtjs/robots"
	],
	image: {
		dir: "./assets"
	}
});