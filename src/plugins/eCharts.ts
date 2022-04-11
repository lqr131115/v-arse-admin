import { App } from 'vue'
import VueECharts from 'vue-echarts'

export default {
    install(app: App) {
        app.component('v-chart',VueECharts)
    }
}