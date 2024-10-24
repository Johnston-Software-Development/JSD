<template lang="pug">
  .card.border-0
    .card-header.mb-0.mt-4.rounded
      h1 The making of Johnston Software Development...
    .card-body.mt-0.pt-0.pb-0
      v-timeline
        v-timeline-item(
          v-for="(e, i) in event"
          :key="i"
          :color="e.color"
          small)
          template(v-slot:opposite)
            span(
              :class="`headline font-weight-bold`"
              :style="{color: e.color}"
              v-text="e.when")
          .py-4
            <h2 :class="`headline font-weight-light mb-4 ${e.color}--text`">{{e.title}}</h2>
            div {{e.what}}
    .card-header.mb-0.rounded.mt-0
      h1 Johnston Software Development founded 2020
</template>

<script>
export default {
	data: () => ({
		event: [
			{
				color: 'green',
				when: 'Childhood',
				title: 'Home',
				what: 'While growing up my Mother built a 386 computer. Thus sparked interest in DOS, Dosshell, and Windows 3.1',
			},
			{
				color: 'green',
				when: 'Childhood',
				title: 'Coding Camp',
				what: 'DOS 101 summer camp',
			},
			{
				color: 'green',
				when: 'Childhood',
				title: 'First Website',
				what: 'Built with HTML and JavaScript with the Sympatico free hosting',
			},
			{
				color: 'green',
				when: 'Highschool',
				title: 'School website',
				what: 'Founding member of the schools website team.',
			},
			{
				color: 'green',
				when: 'Highschool',
				title: 'CO-OP placement',
				what: 'CO-OP placement as Schools Admins Tech Assistant',
			},
			{
				color: 'green',
				when: 'Severity Gaming',
				title: 'Co-Website Administrator',
				what: 'Gaming groups website and supporting player auditing apps',
			},
			{
				color: 'green',
				when: 'College',
				title: 'Advanced Diaploma',
				what: 'Advanced Diaploma as a Computer Programming Analysts',
			},
			{
				color: 'green',
				when: 'Oiika',
				title: 'Tutor Finding Web Service',
				what: 'Software Developer for a tutor finding web service',
			},
			{
				color: 'green',
				when: 'E-Data Now!',
				title: 'Coding Camp',
				what: 'Software Developer for an inspection company, with a large administrative website and two supporting mobile apps.',
			},
		],
	}),
}
</script>
