<template>
  <div>
    <label
      >name
      <input type="text" v-model.trim="newUser.name" />
    </label>
    <label
      >username
      <input type="text" v-model.trim="newUser.username" />
    </label>
    <label
      >email
      <input type="email" v-model.trim="newUser.email" />
    </label>
    <label
      >password
      <input type="password" v-model.trim="newUser.password" />
    </label>
    <label
      >diet
      <select v-model="newUser.diet">
        <option value="vegano">Vegano</option>
        <option value="vegetariano">Vegetariano</option>
        <option value="omnivoro">Omnívoro</option>
      </select>
    </label>
    <label
      >role
      <select v-model="newUser.role">
        <option value="usuario">Usuario</option>
        <option value="administrador">Administrador</option>
      </select>
    </label>
    <button @click.prevent="createUser">Crear Usuario</button>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/store";
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
        diet: "",
        role: "",
      },
      authStore: useAuthStore(),
    };
  },
  methods: {
    async createUser() {
      const response = await API.createUser(this.newUser);
      if (response.error) {
        alert("Error creating account");
      } else {
        this.$router.push({ name: "homeadmin" });
      }
    },
  },
};
</script>

<style scoped></style>
