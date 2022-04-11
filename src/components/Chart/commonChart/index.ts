import { App } from "vue";
import commonchart from './src/commonchart.vue'
export default {
    install(app:App){
        app.component('c-common-chart',commonchart)
    }
}