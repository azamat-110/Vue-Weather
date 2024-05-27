import { createApp } from 'vue'
import App from './App.vue'
import  './assets/style/style.scss';
import { createPinia } from 'pinia';

const pinia = createPinia();




createApp(App).use(pinia).mount('#app')
