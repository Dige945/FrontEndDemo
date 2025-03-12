import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from '../router/index'

createApp(App).use(ElementPlus).use(router).mount('#app')
App.use(ElementPlus, {
    locale: zhCn,
})

