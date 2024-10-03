export default defineNuxtConfig({
	mode: 'spa',
	/*
	 ** Headers of the page
	 */
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
			// { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['@fortawesome/fontawesome-svg-core/styles.css'],
	/*
	 ** Plugins to load before mounting the App
	 */
	// plugins: [{ src: '~/plugins/firebase.js', mode: 'client' }],

	/*
	 ** Nuxt.js modules
	 */
	// modules: ['@pinia/nuxt'],
	/*
	 ** Build configuration
	 */
	build: { transpile: ['@fortawesome/vue-fontawesome'] },

	axios: {
		baseURL: 'http://localhost:3000/api', // Replace with your API base URL
	},
	firebase: {
		config: {
			apiKey: process.env.NUXT_ENV_FIREBASE_API_KEY,
			authDomain: process.env.NUXT_ENV_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NUXT_ENV_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NUXT_ENV_FIREBASE_STORAGE_BUCKET,
			messagingSenderId:
				process.env.NUXT_ENV_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NUXT_ENV_FIREBASE_APP_ID,
			measurementId: process.env.NUXT_ENV_FIREBASE_MEASUREMENT_ID,
		},
		services: {
			auth: true,
			firestore: true,
			storage: true,
			database: true,
		},
	},
	auth: {
		middleware: ['~/middleware/auth.js'],
		cookie: {
			prefix: 'auth.',
			// options: {
			// 	path: '/',
			// },
		},
		localStorage: {
			prefix: 'auth.',
		},
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					required: true,
					type: 'Bearer',
				},
				user: {
					property: 'user',
					autoFetch: true,
				},
				endpoints: {
					login: {
						url: '/login',
						method: 'post',
						propertyName: 'token',
					},
					logout: { url: '/logout', method: 'post' },
				},
			},
		},
		// redirect: {
		// 	// home: '/',
		// 	login: '/login',
		// 	callback: '/login',
		// 	// logout: '/',
		// },
	},
})
