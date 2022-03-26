import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import MUI from './components'
import Icons from './icons'
import 'virtual:svg-icons-register'
import './mock'
import './permission'
import 'normalize.css'
import 'element-plus/dist/index.css'
import './styles/index.scss'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.use(ElementPlus)
app.use(MUI)
app.use(Icons)
app.mount('#app')
