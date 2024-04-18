import { createApp } from 'vue';
import "@/assets/scss/style.scss";
import App from './App.vue';
import {router} from "./router/index.js";

const app = createApp(App);
app.use(router)
    .mount('#app');