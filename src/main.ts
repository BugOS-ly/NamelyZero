import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 自适应尺寸
import 'amfe-flexible/index.js'
// 引入重置样式和全局样式
import './styles/reset.scss'
import './styles/global.scss'

createApp(App).use(router).mount('#app')
