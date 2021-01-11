import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../config/fierbase'
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/user/Profile";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Profile',
        component: Profile,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//check for logged in users
router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    if (requiresAuth && !auth.currentUser) {
        next('/login')
    } else {
        next()
    }
})

export default router