import { defineStore } from 'pinia'
import { auth } from '~/plugins/firebase'
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import fallbackProjects from '~/assets/projects'
import { firestore } from '~/plugins/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const useStore = defineStore('store', {
	state: () => ({
		user: null,
		auth: {
			loggedIn: false,
		},
		projects: [],
		loading: true,
	}),
	actions: {
		nuxtClientInit({ commit }) {
			console.log('init store')
			onAuthStateChanged(auth, (user) => {
				if (user) {
					// console.log('set user', user)
					commit('setUser', user)
				} else {
					commit('clearUser')
				}
			})
			// Load projects from Firebase
			commit('loadProjects')
		},
		async login({ commit }, { email, password }) {
			try {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				)
				commit('setUser', userCredential.user)
				return { success: true }
			} catch (error) {
				return { success: false, error: error.message }
			}
		},
		async logout({ commit }) {
			try {
				await signOut(auth)
				commit('clearUser')
			} catch (error) {
				console.error('Logout error:', error)
			}
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user
			state.auth.loggedIn = !!user
		},
		clearUser(state) {
			state.user = null
			state.auth.loggedIn = false
		},
		async loadProjects(state) {
			state.loading = true
			try {
				const querySnapshot = await getDocs(
					collection(firestore, 'projects')
				)
				const items = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
				state.projects = items
				// console.log('state.projects', state.projects)
			} catch (error) {
				state.projects = fallbackProjects
				console.error('Error loading data:', error)
			}
			state.loading = false
		},
		setLoading(state, loading) {
			state.loading = loading
		},
	},
	getters: {
		projects(state) {
			return state.projects
		},
		apps(state) {
			return state.projects.filter((item) => item.type === 'app')
		},
		web(state) {
			return state.projects.filter((item) => item.type === 'web')
		},
		jsd(state) {
			return state.projects.filter((item) => item.jsd === true)
		},
		notJsd(state) {
			return state.projects.filter((item) => item.jsd !== true)
		},
	},
})

export default store
