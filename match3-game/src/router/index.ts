import { createRouter, createWebHistory } from "vue-router";
import LobbyVue from "../views/Lobby.vue";
import LoginVue from "../views/Login.vue";
import RegisterVue from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: LobbyVue },
    { path: "/register", name: "Register", component: RegisterVue },
    { path: "/login", name: "Login", component: LoginVue },
  ],
});

export default router;
