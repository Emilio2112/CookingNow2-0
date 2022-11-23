<template>
  <div class="contact-us">
    <form class="form">
      <h3 class="title">Sign up!</h3>
      <div class="inputContainer">
        <label>
          <input
            type="text"
            v-model.trim="newUser.name"
            placeholder="Enter your name"
        /></label>
      </div>
      <div class="inputContainer">
        <label>
          <input
            type="text"
            v-model.trim="newUser.username"
            placeholder="Enter your username"
        /></label>
      </div>
      <div class="inputContainer">
        <label>
          <input
            type="email"
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
      <button class="submitBtn" @click.prevent="signupUser()">
        Registrarse
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/store'
import API from "../Services/api.js";
</script>

<script>
export default {
  data() {
    return {
      newUser: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      authStore: useAuthStore()
    };
  },

  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser);
      if (response.error) {
        alert("Error creating account");
      } else {
        this.authStore.login({token:response.token, email: response.email, role: response.role})
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped>
.contact-us {
  margin: 100px auto;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgb(242, 143, 75);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  background-color: #9867c5;
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
