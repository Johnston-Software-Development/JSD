<template>
	<div v-if="loading" class="loader-overlay">
		<div class="loader"></div>
	</div>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true,
		},
	},
}
</script>

<style scoped>
.loader-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999; /* Ensure loader is on top */
}

.loader {
	border: 16px solid #f3f3f3;
	border-top: 16px solid #28a745;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
