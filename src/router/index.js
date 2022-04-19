import { createRouter, createWebHistory } from "vue-router";
import InputScreen from  "../views/InputScreen.vue";

const routes = [
  {
    path: "/",
    name: "input",
    component: InputScreen,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
