import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'

import { MaskInput } from 'vue-mask-next'
import BaseButton from "./components/base/BaseButton.vue"

const app = createApp(App)

app.component('MaskInput' ,MaskInput)
app.component('BaseButton', BaseButton)
app.mount('#app')
