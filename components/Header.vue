<template>
	<div class="bg-success px-2">
		<nav class="navbar navbar-expand-sm navbar-dark" fixed="top">
			<nuxt-link class="navbar-brand d-sm-block d-none" to="/"
				>Johnston Software Development</nuxt-link
			>
			<nuxt-link class="navbar-brand d-sm-none" to="/"
				>JS Development</nuxt-link
			>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
				@click="visible = !visible"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				id="navbarNavDropdown"
				class="collapse navbar-collapse"
				:class="{ show: visible }"
			>
				<div class="navbar-nav ms-auto">
					<nuxt-link
						class="nav-item"
						to="/projects"
						active-class="active"
						>Projects</nuxt-link
					>
					<nuxt-link
						v-if="store.user"
						class="nav-item"
						to="/admin"
						active-class="active"
						>Admin</nuxt-link
					>
					<nuxt-link
						v-if="store.user"
						class="nav-item"
						active-class="active"
						@click="handleLogout"
						>Logout</nuxt-link
					>
				</div>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { useMainStore } from '~/stores'
// import { storeToRefs } from 'pinia'

const store = useMainStore()
// const { user } = storeToRefs(store)

const handleLogout = async () => {
	await store.signOut()
}
</script>

<style scoped>
.dropdown-menu {
	background-color: #28a745 !important;
}
.hoverable:hover {
	box-shadow: 0px 2px 2px 2px #cccccc;
	transition: all 0.8s ease-in-out;
}
</style>
