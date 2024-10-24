<template>
	<div>
		<h1>Login</h1>
		<form @submit.prevent="handleLogin">
			<div>
				<label for="email">Email</label>
				<input type="email" v-model="email" id="email" />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" v-model="password" id="password" />
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
</template>

<script>
import { useAuthStore } from '~/stores/auth'
import { mapState, mapActions } from 'pinia'
// TODO: handle failed login
// TODO: Auto redirect to admin if logged in already
export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},
	computed: {
		...mapState(useAuthStore, ['getAuthError']),
	},
	methods: {
		...mapActions(useAuthStore, ['signIn']),
		async handleLogin() {
			try {
				const response = await this.signIn(this.email, this.password)

				if (!response) {
					throw new Error('Invalid credentials')
				} else {
					this.$router.push('/admin')
				}
			} catch (error) {
				console.error('An error occurred:', error.message)
			}
		},
	},
}
</script>
