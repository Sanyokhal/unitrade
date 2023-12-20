import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faArrowLeft,
    faArrowRight,
    faUserSecret,
    faPlus,
    faExclamation, faPhone, faPen, faMapLocation
} from '@fortawesome/free-solid-svg-icons'
import {faFlag, faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret, faArrowLeft, faArrowRight, faFlag, faPlus, faExclamation, faEnvelope, faInstagram, faPen,faMapLocation, faTelegram, faPhone)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
