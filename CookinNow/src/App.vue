<template>
  <div>
    <headerPage />
    <RouterLink to="/"></RouterLink>
    <RouterView />
    <footerPage />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import footerPage from "./components/footerPage.vue";
import headerPage from "./components/headerPage.vue";
</script>

<script>
export default {
  name: "app"
};
</script>

<style scoped></style>
