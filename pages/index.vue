<template>
	<div>
		<v-parallax
			class="d-flex align-center"
			:src="deviceImage"
			:height="height"
		>
			<v-container fluid>
				<v-row align="center" justify="center">
					<v-col cols="12" class="text-center">
						<h1 class="text-h2 font-weight-thin mb-4 text-primary">
							Web and Mobile Apps
						</h1>
						<h4 class="text-subtitle-1">
							Build your application today!
						</h4>
					</v-col>
				</v-row>
			</v-container>
		</v-parallax>

		<v-container class="bg-transparent">
			<v-row>
				<v-col>
					<projects />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import projects from '~/components/Projects.vue'

const height = ref(window?.innerHeight || 500)

const updateHeight = () => {
	height.value = window.innerHeight
}

onMounted(() => {
	updateHeight()
	window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
	window.removeEventListener('resize', updateHeight)
})

// If you need deviceImage
const deviceImage = ref(new URL('../assets/devices.jpg', import.meta.url).href)
</script>

<style scoped>
.container {
	padding-bottom: 20px;
	padding-top: 20px;
	background-color: #fff;
}

.title {
	font-family:
		'Quicksand',
		'Source Sans Pro',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		'Helvetica Neue',
		Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
