<template>
  <div class="header">
    <nav class="navbar">
      <a href="/">
        <img src="../assets/images/cookingnow.png" />
      </a>

      <div id="navbar-links"  class="navbar-links" v-if="!authStore.isLoggedIn">
        <RouterLink style="text-decoration: none; color: inherit" to="/login">Login</RouterLink> 
        <RouterLink style="text-decoration: none; color: inherit" to="/signup">SignUp</RouterLink>
      </div>
      <div class="navbar-links" v-else>
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      authStore: useAuthStore()
    };
  },
  methods: {
    logout() {
      this.authStore.logout()
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.header{
  background-color: rgb(242, 143, 75);
  position: sticky;
  top:0;
  left: 0;
  width: 100%;
}

img {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  width: 60px;
  height: 40px;
}
.navbar {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.navbar-links {
  height: 100%;
  text-decoration: none;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  width: 120px;

}
</style>