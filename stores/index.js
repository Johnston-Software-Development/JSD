import { defineStore } from 'pinia'
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { useNuxtApp, useRouter } from '#app' // Add this import
import fallbackProjects from '~/assets/projects'

export const useMainStore = defineStore('main', {
	state: () => ({
		user: null,
		authError: null,
		projects: [],
		loading: true,
	}),

	actions: {
		async signIn(email, password) {
			const { $auth } = useNuxtApp()
			const router = useRouter()
			try {
				const userCredential = await signInWithEmailAndPassword(
					$auth,
					email,
					password
				)
				this.user = userCredential.user
				this.authError = null
				await router.push('/admin') // Add await here
			} catch (error) {
				this.authError = error.message
			}
		},

		async signOut() {
			const { $auth } = useNuxtApp()
			const router = useRouter() // Add router here if you need to redirect after logout
			try {
				await signOut($auth)
				this.user = null
				this.authError = null
				await router.push('/') // Optional: redirect after logout
			} catch (error) {
				this.authError = error.message
			}
		},

		initializeAuth() {
			const nuxtApp = useNuxtApp() // Get nuxtApp instance
			if (!nuxtApp.$auth) return // Add safety check

			onAuthStateChanged(nuxtApp.$auth, (user) => {
				this.user = user || null
			})
		},

		async loadProjects() {
			this.loading = true
			try {
				const { $firestore } = useNuxtApp()
				if (!$firestore) {
					this.projects = fallbackProjects
					return
				}

				const querySnapshot = await getDocs(
					collection($firestore, 'projects')
				)
				this.projects = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			} catch (error) {
				console.error('Error loading data:', error)
				this.projects = fallbackProjects
			} finally {
				this.loading = false
			}
		},
	},

	getters: {
		isLoggedIn: (state) => !!state.user,
		apps: (state) => state.projects.filter((item) => item.type === 'app'),
		web: (state) => state.projects.filter((item) => item.type === 'web'),
		jsd: (state) => state.projects.filter((item) => item.jsd === true),
		notJsd: (state) => state.projects.filter((item) => item.jsd !== true),
	},
})
