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
	middleware: 'auth',
	components: {
		Edit,
	},
	computed: {
		...mapState(useAuthStore, ['user']),
	},
}
</script>
