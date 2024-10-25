<template>
	<div>
		<div class="container col-12">
			<h1 class="text-center">Testimonials</h1>
		</div>
		<div class="row">
			<div
				v-for="testimonial in testimonials"
				:key="testimonial.author"
				class="col-md-4"
			>
				<div class="card hoverable m-1">
					<router-link to="/services/mobile" active-class="active">
						<div class="card-img-top">
							<img
								v-if="testimonial.image"
								:src="testimonial.image"
								:alt="testimonial.author"
								class="img-fluid"
							/>
						</div>
						<div class="card-body">
							<div class="card-title">
								{{ testimonial.author }}
							</div>
							<div class="card-subtitle">Subtitle</div>
							<div class="card-text">
								{{ testimonial.description || 'text' }}
							</div>
							<a class="card-link" href="/">link</a>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
			],
		}
	},
}
</script>

<style scoped>
.card {
	transition: transform 0.2s ease;
}

.card:hover {
	transform: translateY(-5px);
}

.card a {
	color: inherit;
	text-decoration: none;
}

.card-img-top {
	height: 200px;
	overflow: hidden;
}

.card-img-top img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
