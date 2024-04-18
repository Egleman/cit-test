import MainPageApp from '@/views/MainPageApp.vue';
import CatalogPageApp from '@/views/CatalogPageApp.vue';
export const routes = [
    {
        path: '/',
        name: 'base',
        component: MainPageApp,
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: CatalogPageApp,
    },
]