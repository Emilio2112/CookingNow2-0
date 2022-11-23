<template>
  <div>
    <label
      >name
      <input type="text" v-model.trim="newRecipe.name" />
    </label>
    <label
      >diet
      <select v-model="newRecipe.diet">
        <option value="vegano">Vegano</option>
        <option value="vegetariano">Vegetariano</option>
        <option value="omnivoro">Omnívoro</option>
      </select>
    </label>
    <label
      >dishType
      <select v-model="newRecipe.dishType">
        <option value="primer plato">primer plato</option>
        <option value="segundo plato ">segundo plato</option>
        <option value="aperitivo">aperitivo</option>
        <option value="postre">postre</option>
        <option value="salsa">salsa</option>
      </select>
    </label>
    <label
      >ingredients
      <input type="text" v-model.trim="newRecipe.ingredients.ingredient" />
      Cantidad
      <input type="text" v-model.trim="newRecipe.ingredients.quantity" />
    </label>
    <label
      >time
      <input type="text" v-model.trim="newRecipe.time" />
    </label>
    <label
      >difficulty
      <select v-model="newRecipe.difficulty">
        <option value="facil">facil</option>
        <option value="medio">medio</option>
        <option value="dificil">dificil</option>
      </select>
    </label>
    <label
      >preparation
      <input type="text" v-model.trim="newRecipe.preparation" />
    </label>
    <button @click.prevent="createRecipe">Crear Receta</button>
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
      newRecipe: {
        name: "",
        diet: "",
        dishType: "",
        ingredients: [],
        time: "",
        difficulty: "",
        preparation: "",
      },
      authStore: useAuthStore(),
    };
  },
  methods: {
    async createRecipe() {
      const response = await API.createRecipe(this.newRecipe);
      if (response.error) {
        alert("Error creating recipe");
      } else {
        this.$router.push({ name: "homeadmin" });
      }
    },
  },
};
</script>

<style scoped></style>
