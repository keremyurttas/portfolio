<template>
  <div class="container space-y-32 mx-auto text-secondary">
    <section class="flex items-center flex-col gap-4">
      <h4 class="text-3xl leading-loose text-center font-light text-sixthiary">
        &lt; Get to know me better and explore my journey as a <br />
        <strong class="text-secondary font-bold">
          Front-End Software Engineer
        </strong>
        /&gt;
      </h4>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1KbG_9QSmWSihSJhjbrwrJiJVbumFbeYp/view?usp=sharing"
        class="bg-secondary px-10 py-4 text-tertary font-bold rounded-full hover:opacity-70"
      >
        Download CV
      </a>
    </section>
    <section class="space-y-10">
      <ProjectTemplate
        v-for="(project, index) in projects"
        :key="index"
        v-bind="project"
      ></ProjectTemplate>
    </section>
  </div>
</template>
<script setup>
import ProjectTemplate from "../components/ProjectTemplate.vue";
const projects = [
  {
    name: "NuVerge Automation Builder",
    imgSource: "nuverge.png",
    usedTechnologies: [
      {
        name: "Next.JS",
        imgSrc: "next.svg",
      },

      {
        name: "NEON",
        imgSrc: "neon.svg",
      },
      {
        name: "Prisma",
        imgSrc: "prisma.svg",
      },
      {
        name: "Clerk",
        imgSrc: "clerk.svg",
      },
      {
        name: "Shadcn",
        imgSrc: "shadcn.svg",
      },
    ],

    details: [
      "Nuverge is an advanced automation builder that enables users to create and manage workflows utilizing AI-driven logic.",
      "The application is developed using Next.js and Prisma, with Neon.tech as the database provider and Clerk for authentication to ensure optimal performance.",
      "Zustand is employed for state management, facilitating smooth user interactions.",
      "Features include an AI-powered automation box integrated with OpenAI, the ability to manage Google Drive files, and capabilities to managing a database in Notion and utilize Slack's messaging features to enhance workflow customization.",
      "Tailwind CSS and ShadCN are utilized to create a modern, responsive, and visually appealing user interface.",
    ],
    liveLink: "https://documentation-app-psi.vercel.app/",
    repoLink: "https://github.com/keremyurttas/documentationApp",
  },
  {
    name: "Dogan Led Documentation App",
    imgSource: "doganled.png",
    usedTechnologies: [
      {
        name: "Vue.JS",
        imgSrc: "vue.svg",
      },

      {
        name: "Google Drive API",
        imgSrc: "googleDrive.svg",
      },
      {
        name: "Vuetify",
        imgSrc: "vuetify.svg",
      },
    ],

    details: [
      "The Dogan LED documentation app is a freelance project designed to provide users with a comprehensive and intuitive interface for managing documentation.",
      "The application features a modern and fully responsive user interface, ensuring an optimal experience across various devices.",
      "It is fully integrated with Google Drive API, allowing users to navigate seamlessly within the app while utilizing the admin's established folder structure.",
      "The project exemplifies effective use of contemporary web development practices to deliver a user-friendly and efficient solution.",
    ],
    liveLink: "https://nu-verge.onrender.com/",
    repoLink: "https://github.com/steadytaha/nu-verge",
  },
  {
    name: "Revflix",
    imgSource: "revflix.png",
    usedTechnologies: [
      {
        name: "Next.JS",
        imgSrc: "next.svg",
      },

      {
        name: "Node.JS",
        imgSrc: "tailwind.svg",
      },
      {
        name: "MongoDB",
        imgSrc: "mongodb.svg",
      },
      {
        name: "MUI",
        imgSrc: "mui.svg",
      },
    ],

    details: [
      "Revflix is a responsive film rating and review app designed for an optimal user experience across all devices.",
      "It is developed using Node.js and Next.js, ensuring robust performance and seamless navigation.",
      "The app includes comprehensive user login and sign-up features, providing a secure and personalized experience.",
      "NOTE: Upon entering the website, you may need to wait a few minutes for the backend server to reboot.",
    ],
    liveLink: "https://revflix.vercel.app/",
    repoLink: "https://github.com/keremyurttas/revflix",
  },
  {
    name: "Wordle",
    imgSource: "wordle.png",
    usedTechnologies: [
      {
        name: "React.JS",
        imgSrc: "react.svg",
      },
      {
        name: "Tailwind",
        imgSrc: "tailwind.svg",
      },
    ],

    details: [
      "A classical Wordle game with an optional dark theme for enhanced visual comfort.",
      "Enjoy a fresh challenge with a new word generated each time the page loads.",
      "Verify the validity of each entry with our built-in English word checker.",
      "Designed to be mobile and web-friendly, offering a beautifully crafted interface for seamless gameplay.",
    ],
    liveLink: "https://wordle-react-sage.vercel.app/",
    repoLink: "https://github.com/keremyurttas/wordleReact",
  },

  {
    name: "Survey App",
    imgSource: "surveyApp.png",
    usedTechnologies: [
      {
        name: "Nuxt",
        imgSrc: "nuxt.svg",
      },
      {
        name: "Tailwind",
        imgSrc: "tailwind.svg",
      },
      {
        name: "Firebase",
        imgSrc: "firebase.svg",
      },
    ],
    details: [
      "Explore our Survey App seamlessly integrated with Firebase.",
      "Craft your own surveys effortlessly and share them with friends, fostering engaging and interactive experiences.",
      "Participants can answer surveys without the requirement of signing in, ensuring accessibility for all.",
    ],
    liveLink: "https://survey-app-plum.vercel.app/",
    repoLink: "https://github.com/keremyurttas/survey-app",
  },
  {
    name: "Toast Notifications npm package",
    imgSource: "toastNotifications.png",
    usedTechnologies: [
      {
        name: "Vue.JS",
        imgSrc: "vue.svg",
      },
      {
        name: "Node package manager",
        imgSrc: "npm.svg",
      },
    ],
    details: [
      "It is a toast notifications package for Vue.JS.",
      "Six different position options for optimal display.",
      "Three distinct states to suit various notification needs.",
      "Dismissible option for user convenience.",
      "Custom duration values in milliseconds for tailored notification timing.",
    ],
    liveLink: "https://toast-notifications-yusikerem.vercel.app/",
    repoLink: "https://github.com/keremyurttas/toastNotifications",
  },
  {
    name: "NFT Marketplace",
    imgSource: "nftMarketPlace.png",
    usedTechnologies: [
      {
        name: "Nuxt",
        imgSrc: "nuxt.svg",
      },
      {
        name: "Tailwind",
        imgSrc: "tailwind.svg",
      },
    ],
    details: [
      "Presenting a large-scale, fully responsive website meticulously crafted with Nuxt.js.",
      "Featuring seven intricately detailed pages, each tailored to provide an immersive and seamless user experience across all devices.",
    ],
    liveLink: "https://nft-market-place-dusky.vercel.app/",
    repoLink: "https://github.com/keremyurttas/NFT-Marketplace",
  },
  {
    name: "Crypto App",
    imgSource: "cryptoApp.png",
    usedTechnologies: [
      {
        name: "React.JS",
        imgSrc: "react.svg",
      },
      {
        name: "Tailwind",
        imgSrc: "tailwind.svg",
      },
    ],
    details: [
      "A responsive project that simulates your crypto wallet using real-time API.",
    ],
    liveLink: "https://crypto-app-react-ashy.vercel.app/",
    repoLink: "https://github.com/keremyurttas/CryptoAppReact",
  },
  {
    name: "AcademiaHub",
    imgSource: "academiaHub.png",
    usedTechnologies: [
      {
        name: "Javascript",
        imgSrc: "javascript.svg",
      },
      {
        name: "CSS",
        imgSrc: "css.svg",
      },
    ],
    details: [
      "Built entirely with pure JavaScript and CSS",
      "Experience seamless transitions and smooth effects throughout.",
      "Fully responsive design ensures optimal viewing across all devices.",
    ],
    liveLink: "https://school-genuine-snowy.vercel.app/",
    repoLink: "https://github.com/keremyurttas/AcademiaHub",
  },
];
</script>
