<template>
  <div class="contact-us">
    <form class="form">
      <h3 class="title">Login</h3>

      <div class="inputContainer">
        <label>
          <input
            type="text"
            v-model.trim="newUser.email"
            placeholder="Enter your email"
        /></label>
      </div>
      <div class="inputContainer">
        <label>
          <input
            type="password"
            v-model.trim="newUser.password"
            placeholder="Enter your password"
        /></label>
      </div>
      <button class="submitBtn" @click.prevent="loginUser()">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import API from "../Services/api.js";
import { useAuthStore } from '../stores/store'
</script>

<script>
export default {
  data() {
    return {
      newUser: {
        email: "",
        password: "",
      },
      authStore: useAuthStore()
    };
  },

  methods: {
    async loginUser() {
      const response = await API.login(this.newUser);
      if (response.error) {
        alert("Error creating account");
      } else {
        this.authStore.login({token:response.token, email: response.email, role: response.role})
        this.$router.push({ name: "homeadmin" });
      }
    },
  },
};
</script>

<style scoped>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: white;
  font-family: "lato", sans-serif;
}
.contact-us {
  margin: 100px auto;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgb(242, 143, 75);
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 400px;
  padding: 20px 40px;
}
.title {
  font-size: 40px;
  margin-bottom: 50px;
}
.inputContainer {
  position: relative;
  height: 45px;
  width: 90%;
  margin-bottom: 17px;
}
input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: rgb(242, 143, 75);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}
.submitBtn:hover {
  background-color: black;
  transform: translateY(-2px);
}

@media (min-width: 576px) and (orientation: landscape) {
  .contact-us {
    margin: 100px auto;
    border: 2px solid rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: rgb(242, 143, 75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
  }
}

@media (min-width: 576px) {
  .contact-us {
    margin: 100px auto;
    border: 2px solid rgba(0, 0, 0, 1);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: rgb(242, 143, 75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 600px;
  }
}
</style>
