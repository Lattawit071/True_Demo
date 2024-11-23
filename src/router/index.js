import { createRouter, createWebHistory } from "vue-router";
import home from "@/homePage/home.vue";
import billing from "@/DemoPage/billing.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/billing",
    name: "Billing",
    component: billing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
