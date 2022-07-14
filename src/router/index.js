import { createRouter, createWebHashHistory } from "vue-router";
const Home = () =>
    import ("@/views/Home/Home.vue")
const About = () =>
    import ("@/views/About/About.vue")

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router