<template>
  <div>
    <headerPage />

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

<style>
body {
  margin: 0;
  background-image: url(./assets/images/iStock-473891870.jpg);
}

</style>
