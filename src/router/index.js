import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue"
import contactView from "../components/contact/contactView.vue"
import inc from "../components/about/inc.vue"
import history from "@/components/about/history.vue"
import creatorView from "@/components/creator/creatorView.vue"
import creatorPro2 from "@/components/creator/creatorPro2.vue"
import newsView from "@/components/news/newsView.vue"
import newsPre2 from "@/components/news/newsPre2.vue"


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
  {
    path: "/creator",
    component: creatorView,
  },
  {
    path: "/creator/2",
    component: creatorPro2,
  },
  {
    path: "/news",
    component: newsView,
  },
  {
    path: "/news/2",
    component: newsPre2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;