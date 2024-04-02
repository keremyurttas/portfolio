import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import ExperienceView from "./components/ExperienceView.vue";
import EducationView from "./components/EducationView.vue";
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
