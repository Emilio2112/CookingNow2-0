<template>
  <div class="container">
    <label class="inputIng"
      >Nombre:
      <input type="text" v-model.trim="newIng.name" />
    </label>

    <button class="submitBtn" @click.prevent="createIng">Crear Ingrediente</button>
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
        name: "",
      },
      authStore: useAuthStore(),
    };
  },
  methods: {
    async createIng() {
      this.authStore.isAdmin;
      const response = await API.createIng(this.newIng);
      if (response.error) {
        alert("Error creating ingredient");
      } else {
        this.$router.push({ name: "homeadmin" });
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: 100px auto;
  background-color: rgb(242, 143, 75);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 600px;
  font-family: monospace;
  font-size: 20px;
  margin-bottom: 5%;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.submitBtn {
  margin-left: 5%;
  border-radius: 7px;
  font-family: monospace;
  background-color: #fff;
  color: rgb(242, 143, 75);
  border: none;
  font-size: 20px;
  transition: all 0.5s;
  font-weight: bolder;
  padding: 8px 15px;
  cursor: pointer;
}

.submitBtn:active {
  background-color: rgb(242, 143, 75);
  transform: translateY(-2px);
}

.inputIng {
  margin-top: 2%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  margin-right: 2%;
  margin-left: 2%;
  font-size: 20px;

}

input {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
  font-size: 20px;

}
</style>
