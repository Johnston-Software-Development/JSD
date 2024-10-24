import { useMainStore } from "~/stores"

// plugins/init.ts
export default defineNuxtPlugin(async (nuxtApp) => {
	const store = useMainStore()

	// Only run on client-side
	if (import.meta.client) {
		await store.loadProjects()
		store.initializeAuth()
	}
})
