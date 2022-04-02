import { App } from "vue"
import card from './src/card.vue'

export  default {
    install(app:App){
        app.component('m-card',card)
    }   
}