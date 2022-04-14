import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import directives from './directives'
import element from './plugins/element'
import eChart from './plugins/eCharts'
import MUI from './components'
import Icons from './icons'
import 'virtual:svg-icons-register'
import './mock'
import './auth/permission'
import 'normalize.css'
import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(directives)
app.use(element)
app.use(eChart)
app.use(MUI)
app.use(Icons)
app.mount('#app')
