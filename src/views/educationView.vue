<template>
  <div class="container space-y-10 mx-auto">
    <EducationTemplate
      v-for="(education, index) in educations"
      :key="index"
      v-bind="education"
    ></EducationTemplate>
  </div>
</template>
<script setup>
import EducationTemplate from "../components/EducationTemplate.vue";
const educations = [
  {
    name: "Microsoft and LinkedIn",
    detail: "Career Essentials in Software Development",
    date: "Apr 2024",
    extraInfo: {
      text: "View Certificate",
      src: "https://www.linkedin.com/learning/certificates/e3b1e45c44f33c1400ad6cf5b672ea9230a333e264660c6180161132056b1943",
    },
  },
  {
    name: "Nişantaşı University",
    detail: "Bachelors in Software Engineering",
    date: "Jan 2021 - Current",
    extraInfo: "GPA: 3.41",
  },

  {
    name: "Nişantaşı University",
    detail: "English Preperation Class",
    date: "Jan 2020 - 2021",
    extraInfo: "C1 Level",
  },
];
</script>
