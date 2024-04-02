<template>
  <section class="relative">
    <NavHeader></NavHeader>
  </section>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import NavHeader from "./components/NavHeader.vue";
</script>

<style></style>
