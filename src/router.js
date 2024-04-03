import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import EducationView from "./views/EducationView.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/experience", component: ExperienceView },
  { path: "/education", component: EducationView },
];

const router = createRouter({
  history: createMemoryHistory(),

  routes,
});

export default router;
