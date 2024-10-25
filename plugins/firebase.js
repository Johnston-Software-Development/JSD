import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin((nuxtApp) => {
	const config = useRuntimeConfig()

	// Debug logging for configuration
	console.log('Firebase Config Keys Present:', {
		apiKey: !!config.public.FIREBASE_API_KEY,
		authDomain: !!config.public.FIREBASE_AUTH_DOMAIN,
		projectId: !!config.public.FIREBASE_PROJECT_ID,
		storageBucket: !!config.public.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: !!config.public.FIREBASE_MESSAGING_SENDER_ID,
		appId: !!config.public.FIREBASE_APP_ID,
		measurementId: !!config.public.FIREBASE_MEASUREMENT_ID,
	})

	const firebaseConfig = {
		apiKey: config.public.FIREBASE_API_KEY,
		authDomain: config.public.FIREBASE_AUTH_DOMAIN,
		projectId: config.public.FIREBASE_PROJECT_ID,
		storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
		appId: config.public.FIREBASE_APP_ID,
		measurementId: config.public.FIREBASE_MEASUREMENT_ID,
	}

	// Validate configuration
	if (!firebaseConfig.apiKey) {
		console.error('Firebase API key is missing!')
		throw new Error(
			'Firebase configuration is incomplete: API key is required'
		)
	}

	try {
		const app = initializeApp(firebaseConfig)
		const auth = getAuth(app)
		const firestore = getFirestore(app)
		const storage = getStorage(app)

		nuxtApp.provide('firebase', app)
		nuxtApp.provide('auth', auth)
		nuxtApp.provide('firestore', firestore)
		nuxtApp.provide('storage', storage)

		console.log('Firebase initialized successfully')
	} catch (error) {
		console.error('Error initializing Firebase:', error)
		throw error
	}
})
