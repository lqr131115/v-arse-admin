import { App } from "vue";
import descriptions from './src/descriptions.vue'
export default {
    install(app:App){
        app.component('m-descriptions',descriptions)
    }
}