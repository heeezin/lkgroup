import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue"
import contactView from "../components/contact/contactView.vue"


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: contactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;