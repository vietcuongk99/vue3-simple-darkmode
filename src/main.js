import './assets/css/main.scss'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
library.add(faSun, faMoon)

import { createApp } from 'vue';
import App from './App.vue'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
