<template>
	<div class="container mt-4">
		<div v-if="selectedItem" class="project-details">
			<div class="row">
				<div class="col">
					<button
						class="btn btn-secondary"
						@click="navigateItem('back')"
						:disabled="!canNavigateBack"
					>
						Back
					</button>
				</div>
				<div class="col text-center">
					<select
						id="itemSelector"
						v-model="selectedItemId"
						@change="loadSelectedItem"
						class="form-select form-control"
					>
						<option
							v-for="item in jsd"
							:key="item.id"
							:value="item.id"
						>
							{{ item.company }}
							{{ item.project && item.company ? ' - ' : '' }}
							{{ item.project }}
						</option>
					</select>
				</div>
				<div class="col">
					<button
						class="btn btn-secondary"
						@click="navigateItem('forward')"
						:disabled="!canNavigateForward"
					>
						Forward
					</button>
				</div>
			</div>
			<div class="row">
				<div
					class="col-sm-12 col-md-4 text-center justify-content-center"
				>
					<img
						:src="selectedItem.image"
						alt="Project Image"
						width="100%"
					/>
					<span v-if="selectedItem.url">
						<a :href="selectedItem.url" target="_blank">{{
							selectedItem.url
						}}</a>
					</span>
				</div>
				<div class="col align-content-center">
					<div class="row" v-if="false">
						<div class="col">
							<span v-if="selectedItem.type">
								<strong>Type:</strong> {{ selectedItem.type }}
							</span>
							<span v-if="selectedItem.project">
								<strong>Project:</strong>
								{{ selectedItem.project }}
							</span>
							<span v-if="selectedItem.dates">
								<strong>Dates:</strong> {{ selectedItem.dates }}
							</span>
							<span v-if="selectedItem.company">
								<strong>Company:</strong>
								{{ selectedItem.company }}
							</span>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<span v-if="selectedItem.tech.length > 1">
								<strong>Tech:</strong>
								{{ selectedItem.tech.join(', ') }}
							</span>
						</div>
					</div>
					<div class="row">
						<div class="col">
							<p>
								<strong>Description:</strong>
								{{ selectedItem.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<p v-if="selectedItem.about">
						<strong>About:</strong> {{ selectedItem.about }}
					</p>
				</div>
			</div>
			<div class="row"></div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '~/stores/index'
export default {
	data() {
		return {
			selectedItemId: null,
			selectedItem: null,
		}
	},
	computed: {
		...mapState(useMainStore, ['jsd']),
		canNavigateBack() {
			return (
				this.selectedItemId !== null &&
				this.jsd.findIndex((item) => item.id === this.selectedItemId) >
					0
			)
		},
		canNavigateForward() {
			return (
				this.selectedItemId !== null &&
				this.jsd.findIndex((item) => item.id === this.selectedItemId) <
					this.jsd.length - 1
			)
		},
	},
	methods: {
		loadSelectedItem() {
			console.log('loadSelectedItem')
			this.selectedItem = this.jsd.find(
				(item) => item.id === this.selectedItemId
			)
		},
		navigateItem(direction) {
			console.log('navigateItem', direction)
			const currentIndex = this.jsd.findIndex(
				(item) => item.id == this.selectedItemId
			)
			if (direction === 'back' && currentIndex > 0) {
				this.$router.push({
					path: '/projects/' + this.jsd[currentIndex - 1].id,
				})
			} else if (
				direction === 'forward' &&
				currentIndex < this.jsd.length - 1
			) {
				this.$router.push({
					path: '/projects/' + this.jsd[currentIndex + 1].id,
				})
			}
			this.selectedItem = this.jsd.find(
				(item) => item.id === this.selectedItemId
			)
		},
	},
	async mounted() {
		this.selectedItemId = this.$route.params.id || 0
		this.selectedItem = this.jsd.find(
			(item) => item.id == this.selectedItemId
		)
		if (!this.selectedItem) {
			console.log('Project not found, redirecting to 0')
			this.$router.push('/projects/0')
		}
	},
	watch: {
		jsd() {
			if (this.selectedItemId !== null) {
				this.selectedItem = this.jsd.find(
					(item) => item.id == this.selectedItemId
				)
			}
		},
	},
}
</script>

<style scoped>
.project-details {
	margin-top: 40px;
}

.project-details img {
	display: block;
	margin-bottom: 20px;
}

.project-details p {
	margin-bottom: 10px;
}
</style>
