<template>
  <div class="container space-y-40 mx-auto">
    <section
      class="flex lg:justify-between xl:flex-row relative items-center flex-col-reverse gap-4"
    >
      <div class="xl:space-y-16 space-y-8 text-center xl:text-left">
        <h1 class="text-secondary xl:text-7xl text-4xl">Hi, I'm Kerem</h1>
        <p class="text-fifthiary xl:max-w-xl w-full">
          As a third-year
          <b class="text-secondary">Software Engineering</b> student with a
          focus on <b class="text-secondary">Front-End development</b>, I've
          crafted numerous projects showcasing my expertise in
          <b class="text-secondary"
            >HTML, CSS, JavaScript, Vue.JS and React.JS.</b
          >
          Eager to contribute to impactful projects, I bring a blend of
          creativity and precision to the ever-evolving landscape of web
          development. Welcome to my portfolio, where possibilities are endless.
        </p>
        <div class="flex xl:flex-row flex-col items-center gap-4">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1KbG_9QSmWSihSJhjbrwrJiJVbumFbeYp/view?usp=sharing"
            class="bg-secondary px-10 py-2.5 rounded-full font-bold"
          >
            Download CV
          </a>
          <router-link to="/projects" class="text-primary"
            >See projects</router-link
          >
        </div>
      </div>
      <img
        class="xl:w-1/4 w-1/6 aspect-square"
        src="../assets/keremyurttas.png"
        alt=""
      />
    </section>
    <section class="flex gap-12 items-center flex-col xl:flex-row">
      <div class="">
        <p class="text-fifthiary leading-9 w-max">
          4 years of <br />
          <strong class="text-white text-8xl">XP</strong> <br />
          working with JS universe
        </p>
      </div>
      <div ref="container" class="keen-slider">
        <div
          v-for="slide in experiencedTechnologies"
          :key="slide"
          class="keen-slider__slide p-20 text-2xl font-bold rounded-[60px]"
          :class="`bg-[${slide.backgroundColor}]`"
        >
          <img
            class="w-16 h-16"
            :src="require(`../assets/icons/${slide.src}`)"
            alt=""
          />
          {{ slide.name }}
        </div>
      </div>
    </section>
    <section class="xl:text-7xl text-4xl text-center space-y-20 font-semibold">
      <h2 class="text-[#C69AFF]">JavaScript</h2>
      <h2 class="text-[#AA68FF]">Vue</h2>
      <h2 class="text-[#9038FF]">React</h2>
      <h2 class="text-[#6104D6]">Coffee</h2>
    </section>
    <section class="text-secondary space-y-20">
      <h2
        class="xl:text-6xl text-3xl text-sixthiary text-center leading-normal"
      >
        The technologies I've <br />
        been using...
      </h2>

      <div ref="secondContainer" class="keen-slider">
        <div
          v-for="(usingTech, index) in usingTechnologies"
          :key="index"
          class="keen-slider__slide px-8 py-6 h-min rounded-xl border text-secondary border-[#232323] w-1/3 space-y-5"
        >
          <h4>{{ usingTech.header }}</h4>
          <ul class="space-y-4">
            <li
              v-for="(technology, index) in usingTech.techs"
              :key="index"
              class="flex items-center gap-4"
            >
              <div class="bg-fifthiary p-1 rounded-full">
                <img
                  :src="require(`../assets/icons/${technology.src}`)"
                  alt="react icon"
                  class="w-5 h-5"
                />
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
  {
    name: "JavaScript",
    src: "javascript.svg",
    backgroundColor: "#C3C99E",
  },
  { name: "React", src: "react.svg", backgroundColor: "#7D9CA5" },
  { name: "Vue.JS", src: "vue.svg", backgroundColor: "#42936C" },
  { name: "Next.JS", src: "next.svg", backgroundColor: "#C2C2C2" },

  { name: "Nuxt.JS", src: "nuxt.svg", backgroundColor: "#428593" },
  { name: "Figma", src: "figma.svg", backgroundColor: "#C0E5D7" },
];

const usingTechnologies = [
  {
    header: "Devops",
    techs: [{ name: "Github Actions", src: "githubActions.svg" }],
  },
  {
    header: "Languages",
    techs: [
      { name: "JavaScript", src: "javascript.svg" },
      { name: "TypeScript", src: "typescript.svg" },
    ],
  },
  {
    header: "Front-end Engineering Design",
    techs: [
      {
        name: "Vue JS",
        src: "vue.svg",
      },
      {
        name: "Nuxt JS",
        src: "nuxt.svg",
      },
      {
        name: "React JS",
        src: "react.svg",
      },
      {
        name: "React Native",
        src: "reactNative.svg",
      },

      {
        name: "Next JS",
        src: "next.svg",
      },
      {
        name: "Vitest",
        src: "vitest.svg",
      },
      {
        name: "Jest",
        src: "jest.svg",
      },
    ],
  },
];
</script>
