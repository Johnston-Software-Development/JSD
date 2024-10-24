import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faX, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {
	faGithub,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons'
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// Add icons to the library
library.add(faX, faGithub, faLinkedin, faAddressCard)

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
