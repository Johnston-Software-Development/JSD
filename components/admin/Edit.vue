<template>
	<div class="container">
		<div class="row">
			<div class="col"></div>
			<div class="col">
				<button class="btn btn-primary" @click="addItem">
					Add Project
				</button>
			</div>
			<div class="col"></div>
		</div>
		<div class="row mb-3">
			<div class="col-3">
				<label for="itemSelector">Select Project:</label>
			</div>
			<div class="col">
				<select
					id="itemSelector"
					v-model="selectedItemId"
					@change="loadSelectedItem"
					class="form-control"
				>
					<option
						v-for="item in sortedItems"
						:key="item.id"
						:value="item.id"
					>
						{{ item.id }} - {{ item.project }}
					</option>
				</select>
			</div>
		</div>

		<div v-if="selectedItem">
			<div class="row mb-3">
				<div class="col-3">
					<label for="type">Type:</label>
				</div>
				<div class="col">
					<select
						id="type"
						class="form-select"
						v-model="selectedItem.type"
					>
						<option
							v-for="type in availableTypes"
							:key="type"
							:value="type"
						>
							{{ type }}
						</option>
					</select>
				</div>
			</div>

			<div
				class="row mb-3"
				v-for="(value, key) in selectedItem"
				:key="key"
				v-if="key !== 'type'"
			>
				<div class="col-3">
					<label :for="key">
						{{ key.charAt(0).toUpperCase() + key.slice(1) }}:
					</label>
				</div>
				<div class="col">
					<template v-if="key === 'jsd'">
						<input
							type="checkbox"
							:id="key"
							v-model="selectedItem[key]"
						/>
					</template>
					<template
						v-else-if="
							['description', 'teaser', 'about'].includes(key)
						"
					>
						<textarea
							class="form-control"
							:id="key"
							v-model="selectedItem[key]"
						></textarea>
					</template>
					<template v-else-if="key === 'image'">
						<div class="row">
							<div class="col">
								<select
									v-model="selectedItem.image"
									class="form-control"
								>
									<option
										v-for="image in imageList"
										:key="image.path"
										:value="image.path"
									>
										{{ image.name }}
									</option>
								</select>
							</div>
							<div class="col">
								<img :src="selectedItem[key]" width="100px" />
							</div>
						</div>
					</template>
					<template v-else-if="key === 'tech'">
						<div>
							<div
								class="row mb-2"
								v-for="(techItem, index) in selectedItem.tech"
								:key="index"
							>
								<div class="col">
									<input
										type="text"
										class="form-control"
										:value="techItem"
										@input="
											updateTech(
												index,
												$event.target.value
											)
										"
									/>
								</div>
								<div class="col-2">
									<button
										class="btn btn-danger btn-sm"
										@click="removeTech(index)"
									>
										Remove
									</button>
								</div>
							</div>
							<button class="btn btn-secondary" @click="addTech">
								Add Tech
							</button>
						</div>
					</template>
					<template v-else>
						<div class="row mb-3">
							<div class="col">
								<input
									class="form-control"
									:type="key === 'id' ? 'number' : 'text'"
									:id="key"
									v-model="selectedItem[key]"
									:disabled="key === 'id'"
								/>
							</div>
							<div class="col" v-if="key === 'image'">
								<img :src="selectedItem[key]" width="100px" />
							</div>
						</div>
					</template>
				</div>
			</div>

			<div class="d-flex justify-content-between mb-3">
				<button
					class="btn btn-secondary"
					@click="navigateItem('back')"
					:disabled="!canNavigateBack"
				>
					Back
				</button>
				<button class="btn btn-primary" @click="saveItem">Save</button>
				<button
					class="btn btn-secondary"
					@click="navigateItem('forward')"
					:disabled="!canNavigateForward"
				>
					Forward
				</button>
			</div>
		</div>

		<div class="d-flex justify-content-between">
			<button class="btn btn-secondary" @click="exportData">
				Export Projects as JSON
			</button>
			<button class="btn btn-primary" @click="saveAll">Save All</button>
		</div>
	</div>
</template>

<script>
import {
	collection,
	getDocs,
	setDoc,
	doc,
	writeBatch,
} from 'firebase/firestore'
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '~/stores/index'
import { useNuxtApp } from '#app'

export default {
	data() {
		return {
			selectedItemId: null,
			selectedItem: null,
			availableTypes: [],
			imageList: [],
		}
	},
	mounted() {
		this.loadItems()
		this.loadAvailableTypes()
		this.loadImageList()
	},
	computed: {
		canNavigateBack() {
			return (
				this.selectedItemId !== null &&
				this.projects.findIndex(
					(item) => item.id === this.selectedItemId
				) > 0
			)
		},
		canNavigateForward() {
			return (
				this.selectedItemId !== null &&
				this.projects.findIndex(
					(item) => item.id === this.selectedItemId
				) <
					this.projects.length - 1
			)
		},
		sortedItems() {
			return this.projects.slice().sort((a, b) => a.id - b.id)
		},
		...mapState(useMainStore, ['projects']),
	},
	methods: {
		...mapActions(useMainStore, ['loadProjects']),
		exportData() {
			const projectsJson = JSON.stringify(this.projects, null, 2)
			const blob = new Blob([projectsJson], { type: 'application/json' })
			const url = URL.createObjectURL(blob)
			const a = document.createElement('a')
			a.href = url
			a.download = 'projects.json'
			a.click()
			URL.revokeObjectURL(url)
		},
		async loadItems() {
			await this.loadProjects()
			this.selectedItemId = this.projects[0]?.id || null
			this.selectedItem = this.projects.find(
				(item) => item.id === this.selectedItemId
			)
		},
		async loadImageList() {
			try {
				const images = import.meta.glob(
					'/public/*.{png,jpg,jpeg,gif,svg}',
					{
						eager: true,
						as: 'url',
					}
				)

				this.imageList = Object.entries(images).map(
					([fullPath, url]) => ({
						path: url,
						name: fullPath.split('/').pop(),
					})
				)
			} catch (error) {
				console.error('Error loading images:', error)
				this.imageList = []
			}
		},
		async loadAvailableTypes() {
			const { $firestore } = useNuxtApp()
			try {
				const querySnapshot = await getDocs(
					collection($firestore, 'projects')
				)
				const types = new Set()
				querySnapshot.forEach((doc) => types.add(doc.data().type))
				this.availableTypes = Array.from(types)
			} catch (error) {
				console.error('Error loading types:', error)
			}
		},
		async saveItem() {
			const { $firestore } = useNuxtApp()
			if (!this.selectedItem) return
			try {
				await setDoc(
					doc(
						$firestore,
						'projects',
						this.selectedItem.id.toString()
					),
					this.selectedItem
				)
				console.log('Item saved:', this.selectedItem)
			} catch (error) {
				console.error('Error saving item:', error)
			}
		},
		async saveAll() {
			const { $firestore } = useNuxtApp()
			try {
				const batch = writeBatch($firestore)
				this.projects.forEach((item) => {
					const docRef = doc(
						$firestore,
						'projects',
						item.id.toString()
					)
					batch.set(docRef, item)
				})
				await batch.commit()
				console.log('All items saved')
			} catch (error) {
				console.error('Error saving all items:', error)
			}
		},
		loadSelectedItem() {
			this.selectedItem = this.projects.find(
				(item) => item.id === this.selectedItemId
			)
		},
		addItem() {
			const newItem = {
				id: this.projects.length + 1,
				type: '',
				jsd: false,
				image: '',
				url: '',
				project: '',
				dates: '',
				company: '',
				teaser: '',
				description: '',
				about: '',
				tech: [],
			}
			this.projects.push(newItem)
			this.selectedItemId = newItem.id
			this.selectedItem = newItem
		},
		updateTech(index, value) {
			this.selectedItem.tech = [
				...this.selectedItem.tech.slice(0, index),
				value,
				...this.selectedItem.tech.slice(index + 1),
			]
		},
		addTech() {
			if (this.selectedItem.tech == '') this.selectedItem.tech = []
			this.selectedItem.tech.push('')
		},
		removeTech(index) {
			this.selectedItem.tech.splice(index, 1)
		},
		navigateItem(direction) {
			const currentIndex = this.projects.findIndex(
				(item) => item.id === this.selectedItemId
			)
			if (direction === 'back' && currentIndex > 0) {
				this.selectedItemId = this.projects[currentIndex - 1].id
			} else if (
				direction === 'forward' &&
				currentIndex < this.projects.length - 1
			) {
				this.selectedItemId = this.projects[currentIndex + 1].id
			}
			this.selectedItem = this.projects.find(
				(item) => item.id === this.selectedItemId
			)
		},
	},
	watch: {
		projects(newVal) {
			this.selectedItemId = newVal[0]?.id || null
			this.selectedItem = newVal.find(
				(item) => item.id === this.selectedItemId
			)
		},
	},
}
</script>

<style scoped>
.container {
	margin-top: 20px;
}
</style>
