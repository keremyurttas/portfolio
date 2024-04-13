<template>
  <section class="relative p-8">
    <NavHeader></NavHeader>

    <main class="mb-20 xl:mt-60 mt-20">
      <router-view></router-view>
    </main>
    <MainFooter></MainFooter>
  </section>
</template>

<script setup>
import MainFooter from "./components/MainFooter.vue";
import NavHeader from "./components/NavHeader.vue";
</script>

<style></style>
