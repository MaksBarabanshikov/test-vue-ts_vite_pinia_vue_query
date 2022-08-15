import {createRouter} from 'vue-router'
import Home from '@/pages/home/Home.vue'
import SignIn from '@/pages/sing-in/SingIn.vue'
import Cart from '@/pages/cart/Cart.vue'


const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/sign-in',
        component: SignIn
    },

    {
        path: '/cart',
        component: Cart
    },
]

export default function (history: any) {
    return createRouter({
        routes,
        history
    })
}