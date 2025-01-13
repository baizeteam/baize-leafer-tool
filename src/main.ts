import { createApp } from 'vue';
// import './style.css'
import App from './App.vue';
import router from './router';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import CodeDemo from '@/components/CodeDemo/index.vue';
import '@/assets/style/base.scss';
import '@/assets/style/theme.scss';
import ElementPlus from 'element-plus';

const app = createApp(App);
app.use(hljsVuePlugin);
app.component('CodeDemo', CodeDemo);
app.use(router).use(ElementPlus).mount('#app');
