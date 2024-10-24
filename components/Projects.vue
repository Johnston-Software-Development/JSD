<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<h2 class="text-center">Projects</h2>
			</div>
		</div>
		<div
			class="row justify-content-center"
			v-if="projects && projects.length > 0"
		>
			<div
				v-for="project in projects"
				:key="project.id"
				class="col-sm-6 col-md-4 col-lg-3 py-2"
			>
				<NuxtLink :to="`/projects/${project.id}`">
					<div class="card h-100">
						<div
							class="card-header p-3"
							style="color: black; background-color: #fff"
						>
							<img
								:src="project.image"
								:alt="project.company || 'Project image'"
								class="screen-shot"
							/>
						</div>
						<div class="card-body">
							<div
								class="card-text p-3"
								style="color: black; background-color: #fff"
							>
								{{
									project.teaser ||
									project.description ||
									project.shortDescription
								}}
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import { useMainStore } from '~/stores/index'
import { storeToRefs } from 'pinia'

export default {
	setup() {
		const store = useMainStore()
		const { projects } = storeToRefs(store)

		return {
			projects,
		}
	},
}
</script>

<style scoped>
.card .card-subtitle,
.card .card-text {
	color: black !important;
}

img.screen-shot {
	width: 100%;
}

.card {
	background-color: white;
	box-shadow:
		0 4px 8px rgba(0, 0, 0, 0.1),
		0 6px 20px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.2s,
		box-shadow 0.2s;
}

.card:hover {
	transform: translateY(-10px);
	box-shadow:
		0 8px 16px rgba(0, 0, 0, 0.2),
		0 12px 40px rgba(0, 0, 0, 0.2);
}
</style>
