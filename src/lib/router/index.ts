import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home/home-view.vue";
import SignIn from "@/pages/sing-in/sing-in.vue";
import Cart from "@/pages/cart/cart-view.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/sign-in",
    component: SignIn,
  },

  {
    path: "/cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
