import { createWebHistory, createRouter } from "vue-router";

import homeView from "./views/homeView.vue";
import projectsView from "./views/projectsView.vue";
import educationView from "./views/educationView.vue";
const routes = [
  { path: "/", component: homeView },
  { path: "/projects", component: projectsView },
  { path: "/education", component: educationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
