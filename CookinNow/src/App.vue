<template>
  <div>
    <header class="header">
      <headerPage />
    </header>

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
export default {};
</script>

<style scoped></style>
