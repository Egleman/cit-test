import { createApp } from 'vue';
import "@/assets/scss/style.scss";
import App from './App.vue';
import {router} from "./router/index.js";
import VueClickAway from 'vue3-click-away';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const toastOptions = {
    transition: 'Vue-Toastification__bounce',
    maxToasts: 3,
    newestOnTop: true,
    position: 'top-left',
    timeout: 5000,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
};

const app = createApp(App);
app.use(router)
    .use(VueClickAway)
    .use(Toast, toastOptions)
    .mount('#app');
