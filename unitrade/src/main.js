import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowLeft, faArrowRight, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {faFlag} from '@fortawesome/free-regular-svg-icons';

library.add(faUserSecret,faArrowLeft, faArrowRight,faFlag)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
