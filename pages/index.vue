<template lang="pug">
div
	v-parallax(
		dark
		:src="getImageUrl('devices.jpg')"
		:height="$vssHeight"
		jumbotron)
		v-row(
		align="center"
		:height="$vssHeight"
		justify="center")
		v-col.mt-5.text-center(cols="12")
			h1.mt-5.display-1.font-weight-thin.mb-4
			| Web and Mobile Apps
			h4.subheading Build your application today!
	.container.bg-transparent
		.row
			websites
	//- .container.col-12.mb-5.bg-transparent
		testimonials.col-12
</template>
<script>
//TODO: set height of a parallax to the window height (handle on change)
import websites from '~/components/Websites.vue'
import testimonials from '~/components/Testimonials.vue'
import Parallax from 'vue-parallaxy'
import VueScreenSize from 'vue-screen-size'

export default {
	components: {
		websites,
		testimonials,
		Parallax,
	},
	methods: {
		getImageUrl(img) {
			return require(`~/assets/${img}`)
		},
	},
	mixins: [VueScreenSize.VueScreenSizeMixin],
}
</script>
<style scoped>
.container {
	padding-bottom: 20px;
	padding-top: 20px;
	background-color: #fff;
}
.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
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
