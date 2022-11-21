

<template>
  <div>
    <header class="header">
      <headerPage />
      <nav v-if="!token">
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/login">Login</RouterLink> |
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>
      <nav v-else>
        <button @click="logout">Logout</button>
      </nav>
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
const token = localStorage.getItem("token");
const email = localStorage.getItem("email");

export default {
  data() {
    return {
      token,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>

</style>
