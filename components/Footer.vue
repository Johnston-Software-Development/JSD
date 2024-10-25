<template lang="pug">
footer.d-flex.justify-content-around.social-footer.m-0
  .social-footer-icons
    a.p-2.col-sm-3.text-secondary(href="https://github.com/derekjj")
      font-awesome-icon(aria-hidden="true" :icon="['fab', 'github']")
    a.p-2.col-sm-3.text-secondary(href="https://www.linkedin.com/company/johnston-software-development")
      font-awesome-icon(aria-hidden="true" :icon="['fab', 'linkedin']")
    router-link.p-2.col-sm-3.text-secondary(to="/contact")
      font-awesome-icon(aria-hidden="true" :icon="['fa', 'address-card']")
      
</template>

<style scoped>
footer {
	padding: 10px;
	background-color: #28a745;
	height: 50px;
}

.social-footer .social-footer-icons .fa {
	font-size: 1.6rem;
	color: #fefefe;
}

.social-footer .social-footer-icons .fa:hover {
	color: #4a4a4a;
	transition: color 0.3s ease-in;
}
</style>
