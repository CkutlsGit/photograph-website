import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'

import { MaskInput } from 'vue-mask-next'

const app = createApp(App)

app.component('MaskInput' ,MaskInput)
app.mount('#app')
