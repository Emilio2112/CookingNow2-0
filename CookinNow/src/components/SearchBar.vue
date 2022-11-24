<template>
  <div>
    <div class="contenedor">
      <input
        @keydown.prevent.enter="listRecipesByName"
        type="text"
        v-model="query"
      />
      <button @click="listRecipesByName">Buscar</button>
    </div>
    <RecipeCard v-for="(recipe, idx) in recipes" :key="idx" :recipe="recipe" />
  </div>
</template>

<script setup>
import API from "../Services/api";
import RecipeCard from "../components/RecipeCard.vue";
</script>

<script>
export default {
  data() {
    return {
      recipes: [],
      query: "",
    };
  },

  methods: {
    async listRecipesByName() {
      const result = await API.getAllRecipes();
      this.recipes = result.filter((el) => {
        return el.name.toUpperCase().includes(this.query.toUpperCase());
      });
    },
  },
};
</script>

<style scoped>
.contenedor {
  margin: 40px;
}

input {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
}

button {
  border-radius: 7px;
  font-family: monospace;
  font-size: calc(16px, 1vw);
  font-weight: bolder;
  padding: 8px 15px;
  cursor: pointer;
  background-color: rgb(242, 143, 75);
}
</style>
