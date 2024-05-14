import './assets/main.css'

import { createApp } from 'vue'  //載入createApp函式
import App from './App.vue'  //載入根組件
import router from './router'

//建立Vue App物件
const app = createApp(App)

app.use(router)

//掛載到html標籤底下
app.mount('#app')
