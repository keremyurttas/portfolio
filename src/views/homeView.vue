<template>
  <div class="container space-y-40 mx-auto">
    <section class="flex lg:justify-between xl:flex-row relative items-center flex-col-reverse gap-4">
      <div class="xl:space-y-16 space-y-8 text-center xl:text-left">
        <h1 class="text-secondary xl:text-7xl text-4xl">Hi, I'm Kerem</h1>
        <p class="text-fifthiary xl:max-w-xl w-full">
          As a Software Engineer who graduated first in my class, I am a Full Stack Developer with experience building
          scalable web applications. My expertise spans modern architectures including
          <b class="text-secondary">Next.js, Supabase, PostgreSQL, Java, and Python</b>.
          With strong problem-solving skills, I focus on building sustainable and efficient systems. Welcome to my
          portfolio, where possibilities are endless.
        </p>
        <div class="flex xl:flex-row flex-col items-center gap-4">
          <a target="_blank" href="https://drive.google.com/file/d/1KbG_9QSmWSihSJhjbrwrJiJVbumFbeYp/view?usp=sharing"
            class="bg-secondary px-10 py-2.5 rounded-full font-bold">
            Download CV
          </a>
          <router-link to="/projects" class="text-primary">See projects</router-link>
        </div>
      </div>
      <img width="400" height="400" loading="lazy" class="xl:w-1/4 md:w-1/6 w-1/2 aspect-square rounded-full"
        src="../assets/keremyurttas.webp" alt="keremyurttas image" />
    </section>
    <section class="flex gap-12 items-center flex-col xl:flex-row">
      <div class="">
        <p class="text-fifthiary leading-9 w-max">
          Full Stack <br />
          <strong class="text-white text-7xl">Engineer</strong> <br />
          building scalable apps
        </p>
      </div>
      <div ref="container" class="keen-slider">
        <div v-for="slide in experiencedTechnologies" :key="slide.name"
          class="keen-slider__slide p-20 text-2xl font-bold rounded-[60px]" :class="`bg-[${slide.backgroundColor}]`">
          <img class="w-16 h-16" :src="require(`../assets/icons/${slide.src}`)" alt="" />
          {{ slide.name }}
        </div>
      </div>
    </section>
    <section class="xl:text-7xl text-4xl text-center space-y-20 font-semibold">
      <h2 class="text-[#C69AFF]">Next.js</h2>
      <h2 class="text-[#AA68FF]">Vue</h2>
      <h2 class="text-[#9038FF]">PostgreSQL</h2>
      <h2 class="text-[#6104D6]">Supabase</h2>
    </section>
    <section class="text-secondary space-y-20">
      <h2 class="xl:text-6xl text-3xl text-sixthiary text-center leading-normal">
        The technologies I've <br />
        been using...
      </h2>

      <div ref="secondContainer" class="keen-slider">
        <div v-for="(usingTech, index) in usingTechnologies" :key="index"
          class="keen-slider__slide px-8 py-6 h-min rounded-xl border text-secondary border-[#232323] w-1/3 space-y-5">
          <h4>{{ usingTech.header }}</h4>
          <ul class="space-y-4">
            <li v-for="(technology, idx) in usingTech.techs" :key="idx" class="flex items-center gap-4">
              <div class="bg-fifthiary p-1 rounded-full">
                <img :src="require(`../assets/icons/${technology.src}`)" :alt="`${technology.name} icon`"
                  class="w-5 h-5" />
              </div>

              <span>{{ technology.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

const [container] = useKeenSlider({
  slides: {
    perView: 1.5,
    spacing: 15,
  },
  breakpoints: {
    "(min-width: 1280px)": {
      slides: {
        perView: 2.5,
        spacing: 30,
      },
    },
  },
});

const [secondContainer] = useKeenSlider({
  initial: 1,
  loop: true,
  slides: {
    perView: 1.2,
    spacing: 15,
  },
  breakpoints: {
    "(min-width: 1280px)": {
      slides: {
        perView: 2.5,
        spacing: 80,
      },
    },
  },
});

const experiencedTechnologies = [
  { name: "TypeScript", src: "typescript.svg", backgroundColor: "#8A97F2" },

  { name: "Vue.JS", src: "vue.svg", backgroundColor: "#42936C" },
  { name: "Next.JS", src: "next.svg", backgroundColor: "#C2C2C2" },
  { name: "React", src: "react.svg", backgroundColor: "#7D9CA5" },
  { name: "PostgreSQL", src: "postgre.svg", backgroundColor: "#3D4247" },
  { name: "Supabase", src: "supabase.svg", backgroundColor: "#667355" },
];

const usingTechnologies = [
  {
    header: "Languages",
    techs: [
      { name: "TypeScript", src: "typescript.svg" },
      { name: "JavaScript", src: "javascript.svg" },
      { name: "Python", src: "python.svg" },
      { name: "Java", src: "java.svg" },
      { name: "SQL", src: "sql.svg" },
    ],
  },
  {
    header: "Front-End",
    techs: [
      { name: "Next.js", src: "next.svg" },
      { name: "Vue.js", src: "vue.svg" },
      { name: "React", src: "react.svg" },
      { name: "Nuxt", src: "nuxt.svg" },
      { name: "Tailwind", src: "tailwind.svg" },
      { name: "HTML", src: "html.svg" },
      { name: "CSS", src: "css.svg" },
    ],
  },
  {
    header: "Back-End & DB",
    techs: [
      { name: "Node.js", src: "nodejs.svg" },
      { name: "PostgreSQL", src: "postgre.svg" },
      { name: "MongoDB", src: "mongodb.svg" },
      { name: "Supabase", src: "supabase.svg" },
      { name: "Spring", src: "spring.svg" },
    ],
  },
  {
    header: "Testing & QA",
    techs: [
      { name: "Selenium", src: "selenium.svg" },
      { name: "Playwright", src: "playwright.svg" },
      { name: "Vitest", src: "vitest.svg" },
      { name: "Jest", src: "jest.svg" },
    ],
  },
];
</script>