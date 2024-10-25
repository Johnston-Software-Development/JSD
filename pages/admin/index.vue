<template>
	<div>
		<h1>Welcome, {{ user?.email }}</h1>
		<Edit />
	</div>
</template>

<script>
import { useAuthStore } from '~/stores/auth'
import { mapState } from 'pinia'
import Edit from '~/components/admin/Edit.vue'
export default {
	components: {
		Edit,
	},
	middleware: 'auth',
	computed: {
		...mapState(useAuthStore, ['user']),
	},
}
</script>
