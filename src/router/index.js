import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from  "../views/HomeScreen.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeScreen,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
