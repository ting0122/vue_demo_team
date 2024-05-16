
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

//掛載到html標籤底下
app.mount('#app')
