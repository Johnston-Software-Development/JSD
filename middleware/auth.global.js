import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
	const authStore = useAuthStore()
	console.log('authStore', authStore)

	// Check if the route requires authentication
	if (to.path.startsWith('/admin') && !authStore.isAuthenticated) {
		return navigateTo('/login')
	}

	// Redirect if user is authenticated but trying to access login page
	if (authStore.user && to.path === '/login') {
		return navigateTo('/admin')
	}
})
