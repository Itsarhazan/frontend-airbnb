import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HistogramSlider from 'vue3-histogram-slider'
import 'vue3-histogram-slider/dist/histogram-slider.css'
// Styles
import './styles/style.scss'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import VCalendar from 'v-calendar';
import Popper from "vue3-popper";

const app = createApp(App)

app.config.globalProperties.$filters = {
    currencyUSD(amount) {
        return '$' + amount
    },
}
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VCalendar, {})
app.component("Popper", Popper);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBywa1co0r0B4Etra4c-McqtPtIuNNICgU',

    }
})
app.component(HistogramSlider.name, HistogramSlider)


app.mount('#app')