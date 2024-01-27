import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/task/:id', component: () => import('../views/TaskView.vue'), props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router