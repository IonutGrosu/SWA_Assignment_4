import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../components/Home.vue";
import LoginVue from "../components/Login.vue";
import RegisterVue from "../components/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: HomeVue },
    { path: "/register", name: "Register", component: RegisterVue },
    { path: "/login", name: "Login", component: LoginVue },
  ],
});

export default router;
