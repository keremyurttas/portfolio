<template>
  <div class="py-16 px-10 bg-fourthiary rounded-[2.5rem] xl:flex gap-36">
    <div class="space-y-4">
      <h5 class="xl:text-4xl text-2xl font-bold text-primary">
        {{ name }}
      </h5>
      <img
        class="xl:max-w-[600px] object-cover max-w-[200px] rounded-lg"
        :src="require(`../assets/projects/${imgSource}`)"
        :alt="`${name} image`"
      />
    </div>
    <div class="xl:space-y-16 space-y-10 xl:mt-12 mt-6">
      <div class="space-y-8">
        <div class="xl:flex gap-4 xl:space-y-0 space-y-2 flex-wrap">
          <h6
            v-for="(usedTech, usedTechIndex) in usedTechnologies"
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
          <li v-for="(text, detailIndex) in details" :key="detailIndex">
            {{ text }}
          </li>
        </ul>
      </div>
      <div class="xl:flex gap-8 xl:space-y-0 space-y-4">
        <a
          target="_blank"
          :href="liveLink"
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
          :href="repoLink"
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
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  liveLink: String,
  repoLink: String,
  usedTechnologies: [{ name: String, imgSrc: String }],
  imgSource: String,
  details: [String],
});
console.log(props);
</script>
