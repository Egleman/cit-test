import { createApp } from 'vue';
import "@/assets/scss/style.scss";
import App from './App.vue';
import {router} from "./router/index.js";
import VueClickAway from 'vue3-click-away';

const app = createApp(App);
app.use(router)
    .use(VueClickAway)
    .mount('#app');
