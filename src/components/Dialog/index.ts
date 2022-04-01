import { App } from "vue";
import dialog from './src/dialog.vue'

export default {
    install(app:App){
        app.component('m-dialog',dialog)
    }
}
