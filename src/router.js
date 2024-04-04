import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import EducationView from "./views/EducationView.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/projects", component: ProjectsView },
  { path: "/education", component: EducationView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
