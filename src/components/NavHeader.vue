<template>
  <nav
    class="text-secondary w-max fixed bottom-6 z-10 xl:top-20 h-max left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
  >
    <ul class="flex gap-8 items-center px-8 py-6 bg-fourthiary rounded-full">
      <li
        v-for="navItem in navItems"
        :key="navItem"
        :class="{
          'text-primary': isActive(navItem),
        }"
        class="hover:brightness-75 xl:text-base text-sm"
      >
        <RouterLink :to="navItem === 'keremyurttas' ? '/' : '/' + navItem">{{
          navItem
        }}</RouterLink>
      </li>

      <li class="hover:brightness-75 xl:block hidden">
        <a target="_blank" href="https://github.com/keremyurttas">
          <img
            width="24"
            height="24"
            class="cursor-pointer"
            src="../assets/icons/github.svg"
            alt="GitHub logo"
          />
        </a>
      </li>
      <li class="hover:brightness-75 xl:block hidden">
        <a target="_blank" href="https://www.linkedin.com/in/keremyurttas/"
          ><img
            width="24"
            height="24"
            class="cursor-pointer"
            src="../assets/icons/linkedin.svg"
            alt="LinkedIn logo"
        /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
const navItems = ["keremyurttas", "projects", "education"];

const $route = useRoute();

const isActive = (navItem) => {
  return navItem === "keremyurttas"
    ? $route.fullPath === "/"
    : `/${navItem}` === $route.fullPath;
};
</script>
