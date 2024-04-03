<template>
  <section class="relative p-8">
    <NavHeader></NavHeader>

    <main class="mb-20 xl:mt-60 mt-20">
      <router-view></router-view>
    </main>
    <MyFooter></MyFooter>
  </section>
</template>

<script setup>
import MyFooter from "./components/MyFooter.vue";
import NavHeader from "./components/NavHeader.vue";
</script>

<style></style>
