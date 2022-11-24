<template>
  <div class="header">
    <nav class="logo">
      <RouterLink to="/"
        ><img src="../assets/images/cookingnow.png"
      /></RouterLink>
    </nav>
    <div id="navbar-links" class="navbar-links" v-if="!authStore.isLoggedIn">
      <RouterLink style="text-decoration: none; color: inherit" to="/login"
        >Login</RouterLink
      >
      <RouterLink style="text-decoration: none; color: inherit" to="/signup"
        >SignUp</RouterLink
      >
    </div>
    <div class="navbar-links" v-else>
      <button @click="logout">Logout</button>
    </div>
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

<style scoped>.header {
  background-color: rgb(242, 143, 75);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 10px;
}

img {
  width: 45%;
}

.navbar-links a {
  justify-content: end;
  text-align: center;
  margin-right: 10px;
  padding: 14px;
  align-content: center;
  font-size: calc(16px + 1vw);
  font-family: monospace;
}
.navbar-links a:hover {
  background-color: azure;
  border-radius: 30px;
  color: rgb(242, 143, 75);
}

button {
  font-family: monospace;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  color: rgb(242, 143, 75);
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin-right: 15px;
}
@media (min-width: 768px) {
  img {
    width: 30%;
  }
  .navbar-links a {
    justify-content: end;
    text-align: center;
    margin-right: 10px;
    padding: 14px;
    align-content: center;
    font-size: calc(20px + 2vw);
    font-family: monospace;
  }
  button {
    font-family: monospace;
    border-radius: 4px;
    background-color: #fff;
    border: none;
    color: rgb(242, 143, 75);
    text-align: center;
    font-size: 22px;
    padding: 20px;
    width: 150px;
    transition: all 0.5s;
    cursor: pointer;
    margin-right: 15px;
  }
}
@media (min-width: 1024px) {
  .logo {
    margin-left: 30px;
  }
  img {
    width: 20%;
  }

  .navbar-links a {
    justify-content: end;
    text-align: center;
    margin-left: 20px;
    padding: 14px;
    align-content: center;
    font-size: calc(16px + 1vw);
    font-family: monospace;
  }
  button {
    font-family: monospace;
    border-radius: 4px;
    background-color: #fff;
    border: none;
    color: rgb(242, 143, 75);
    text-align: center;
    font-size: 26px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin-right: 15px;
  }
}

</style>