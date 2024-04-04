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
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="py-16 px-10 bg-fourthiary rounded-[2.5rem] xl:flex gap-36"
      >
        <div class="space-y-4">
          <h5 class="xl:text-4xl text-2xl font-bold text-primary">
            {{ project.name }}
          </h5>
          <img
            class="xl:max-w-[600px] object-cover max-w-[200px] rounded-lg"
            :src="require(`../assets/projects/${project.imgSource}`)"
            :alt="`${project.name} image`"
          />
        </div>
        <div class="xl:space-y-16 space-y-10 xl:mt-12 mt-6">
          <div class="space-y-4">
            <div class="xl:flex gap-4 xl:space-y-0 space-y-2">
              <h6
                v-for="(usedTech, usedTechIndex) in project.usedTechnologies"
                :key="usedTechIndex"
                class="xl:text-3xl font-semibold flex items-center gap-2 px-6 py-3 bg-tertary w-max rounded-full"
              >
                <img
                  class="xl:w-12 w-4 aspect-square"
                  :src="require(`../assets/icons/${usedTech.imgSrc}`)"
                  alt="a react icon"
                />
                {{ usedTech.name }}
              </h6>
            </div>
            <ul class="xl:text-xl text-fifthiary list-disc px-6">
              <li
                v-for="(text, detailIndex) in project.details"
                :key="detailIndex"
              >
                {{ text }}
              </li>
            </ul>
          </div>
          <div class="xl:flex gap-8 xl:space-y-0 space-y-4">
            <a
              target="_blank"
              :href="project.liveLink"
              class="xl:px-6 xl:py-2 px-2 py-1 bg-primary flex gap-2 items-center text-bold xl:text-xl w-full xl:w-max rounded-xl justify-center hover:opacity-80"
            >
              <img
                class="w-10 h-10"
                src="../assets/icons/live.svg"
                alt="live icon"
              />View Live
            </a>
            <a
              target="_blank"
              :href="project.repoLink"
              class="xl:px-6 xl:py-2 px-2 py-1 bg-secondary flex gap-2 items-center text-bold xl:text-xl rounded-xl w-full xl:w-max justify-center text-tertary hover:opacity-80"
            >
              <img
                class="w-10 h-10"
                src="../assets/icons/github.svg"
                alt="github icon"
              />
              View on Github
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const projects = [
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
      "No need for more words, It is a classical Wordle game with dark theme option.",
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
      `Explore my Survey App, seamlessly integrated with Firebase.
  Sign up to craft personalized surveys and effortlessly share them
  with your friends, creating engaging and interactive experiences.`,
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
    details: ["It is a toast notifications package for Vue.JS."],
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
      "A large - scale, fully responsive, well designed website with Nuxt.",
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
    details: ["Written in pure JavaScript and CSS with some smooth effects."],
    liveLink: "https://school-genuine-snowy.vercel.app/",
    repoLink: "https://github.com/keremyurttas/AcademiaHub",
  },
];
</script>
