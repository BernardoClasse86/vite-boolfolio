import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faUpRightFromSquare, faFolder, faGithub)
//

import { router } from './router'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
