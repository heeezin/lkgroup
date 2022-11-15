import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue"
import contactView from "../components/contact/contactView.vue"
import inc from "../components/about/inc.vue"
import history from "@/components/about/history.vue"


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: contactView,
  },
  {
    path: "/lkpartners",
    component: inc,
  },
  {
    path: "/history",
    component: history,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;