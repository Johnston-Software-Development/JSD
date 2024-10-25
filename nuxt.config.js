//nuxt.config.js
export default defineNuxtConfig({
	ssr: false,
	// Add this to ensure proper static generation
	generate: {
		fallback: '404.html',
	},

	compatConfig: { MODE: 3 },

	app: {
		head: {
			title: 'Johnston Software Development',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					hid: 'description',
					name: 'description',
					content: process.env.npm_package_description || '',
				},
			],
			link: [
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/apple-touch-icon.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/favicon-16x16.png',
				},
				{ rel: 'manifest', href: '/site.webmanifest' },
			],
		},
	},

	// Remove loading property as it's not needed in Nuxt 3

	css: [
		'@fortawesome/fontawesome-svg-core/styles.css',
		'bootstrap-vue-next/dist/bootstrap-vue-next.css',
		'~/assets/scss/main.scss',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	router: {
		middleware: ['auth'],
	},

	plugins: [
		'~/plugins/firebase.js',
		'~/plugins/init.ts',
		{ src: '~/plugins/bootstrap.client.ts', mode: 'client' },
	],

	modules: ['@pinia/nuxt'],

	// Remove bootstrap-vue-next/nuxt as we're using the plugin approach

	build: {
		transpile: [
			'vuetify',
			'@firebase/app',
			'@firebase/auth',
			'@firebase/firestore',
		],
		// Remove bootstrap and bootstrap-vue-next from transpile
	},

	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "~/assets/scss/_variables.scss";',
				},
			},
		},
	},

	nitro: {
		preset: 'github-pages',
		serveStatic: true,
		esbuild: {
			options: {
				drop: ['console', 'debugger'],
				logOverride: {
					ROLLUP_DOUBLE_SLASH_RESOLUTION: 'silent',
				},
			},
		},
	},

	// Remove firebase and auth configs as they're not part of Nuxt 3's config
	// These should be handled in your plugins/firebase.js file
	runtimeConfig: {
		public: {
			FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
			FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
			FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
			FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET || '',
			FIREBASE_MESSAGING_SENDER_ID:
				process.env.FIREBASE_MESSAGING_SENDER_ID || '',
			FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || '',
			FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID || '',
		},
	},

	compatibilityDate: '2024-10-23',
})
