<template lang="pug">
  div
    .container.col-12
      .card.bg-transparent
        h1.text-center About
    parallax(fixed=true :speed-factor="0.3")
      img(src="~/assets/laptops.jpg")
    .container.col-12
      aboutSubjects.col-12
</template>

<script>
import Parallax from 'vue-parallaxy'
import aboutSubjects from '~/components/aboutSubjects.vue'
export default {
	components: {
		Parallax,
		aboutSubjects,
	},
}
</script>
