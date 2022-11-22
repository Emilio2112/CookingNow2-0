<template>
  <div>
    <label
      >name
      <input type="text" v-model.trim="newIng.name" />
    </label>

    <button @click.prevent="createIng">Crear Ingrediente</button>
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
      newIng: {
        name: ""
      },
      authStore: useAuthStore(),
    };
  },
  methods: {
    async createIng() {
       this.authStore.isAdmin
        const response = await API.createIng(this.newIng);
        if (response.error) {
          alert("Error creating ingredient");
        } else {
          this.$router.push({ name: "homeadmin" });
        }
      }
    },
  }
</script>

<style scoped></style>
