<template>
  <section
    class="px-10 py-8 border border-[#232323] rounded-[50px] xl:flex justify-between items-center"
  >
    <div class="space-y-3 mb-8 xl:mb-0">
      <h2 class="xl:text-3xl text-secondary">{{ name }}</h2>
      <h4 class="text-primary">{{ detail }}</h4>
      <span class="text-fifthiary block">{{ date }}</span>
    </div>
    <span
      v-if="typeof extraInfo == 'string'"
      class="text-[#5fb9b0] xl:text-2xl"
      >{{ extraInfo }}</span
    >
    <a
      v-else
      target="_blank"
      class="text-[#5fb9b0] xl:text-2xl p-4 border border-[#232323] rounded-3xl hover:opacity-70"
      :href="extraInfo.src"
      >{{ extraInfo.text }}</a
    >
  </section>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  date: String,
  detail: String,
  name: String,
  extraInfo: String || {
    text: String,
    src: String,
  },
});
</script>
