import { createWebHistory, createRouter } from "vue-router";

import homeView from "./views/homeView.vue";
import projectsView from "./views/projectsView.vue";
import educationView from "./views/educationView.vue";
const routes = [
  {
    path: "/",
    component: homeView,
    meta: {
      title: "Home",
      metaTags: [
        {
          name: "description",
          content:
            "As a third-year Software Engineering student with a focus on Front-End development, Kerem has crafted numerous projects showcasing expertise in HTML, CSS, JavaScript, Vue.JS, and React.JS.",
        },
        {
          name: "keywords",
          content:
            "software engineering, front-end development, HTML, CSS, JavaScript, Vue.js, React.js, web development",
        },
        {
          name: "author",
          content: "keremyurttas",
        },
      ],
    },
  },
  {
    path: "/projects",
    component: projectsView,
    meta: {
      title: "Projects",
      metaTags: [
        {
          name: "description",
          content:
            "Get to know me better and explore my journey as a Front-End Software Engineer. Download CV and explore projects like Wordle, Survey App, Toast Notifications npm package, NFT Marketplace, Crypto App, and AcademiaHub.",
        },
        {
          name: "keywords",
          content:
            "front-end software engineer, CV, projects, Wordle, Survey App, Toast Notifications, NFT Marketplace, Crypto App, AcademiaHub",
        },
        {
          name: "author",
          content: "Your Name",
        },
      ],
    },
  },
  {
    path: "/education",
    component: educationView,
    meta: {
      title: "Education",
      metaTags: [
        {
          name: "description",
          content: "Explore Kerem's educational background and certifications.",
        },
        {
          name: "keywords",
          content:
            "education, certificates, bootcamp, university, computer science",
        },
        {
          name: "author",
          content: "Kerem Yurttas",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // Get the title from the route meta fields or use a default title
  const pageTitle = "keremyurttas | " + to.meta.title || "Your Default Title";
  // Set the document title
  document.title = pageTitle;

  if (to.meta.metaTags) {
    to.meta.metaTags.forEach((tag) => {
      const metaTag = document.createElement("meta");
      metaTag.setAttribute("name", tag.name);
      metaTag.setAttribute("content", tag.content);
      document.head.appendChild(metaTag);
    });
  }
  next();
});

export default router;
