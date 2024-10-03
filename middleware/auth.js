import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore()

	// Redirect if user is not authenticated
	if (!authStore.user && to.path !== '/login') {
		return navigateTo('/login')
	}

	// Redirect if user is authenticated but trying to access login page
	if (authStore.user && to.path === '/login') {
		return navigateTo('/admin')
	}
})
