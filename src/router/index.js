import { createRouter, createWebHistory } from "vue-router";
import home from "@/homePage/home.vue";
import demoPage from "@/DemoPage/demoPage.vue";
import SecondPage from "@/SecondPage/SecondPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/billing",
    name: "Billing",
    component: demoPage,
  },
  {
    path: "/SecondPage",
    name: "SecondPage",
    component: SecondPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
