import { App } from "vue";
import tree from './src/tree.vue'
export default {
    install(app:App){
        app.component('m-tree',tree)
    }
}