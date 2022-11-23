<template>
  <div class="contenedor">
    <button @click="getRecipesByDiet('vegano')" class="button">Recetas Veganas</button>
    <button @click="getRecipesByDiet('vegetariano')" class="button">Recetas Vegetarianas</button>
    <button @click="getRecipesByDiet('omnivoro')" class="button">Recetas Omnivoras</button>
    <SearchBar />
    <RecipeCard  v-for = "(recipe, idx) in recipes" :key = "idx" :recipe="recipe"/>
  </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue';
import API from "../Services/api";
import RecipeCard from '../components/RecipeCard.vue';

</script>

<script>
export default {
  data() {
    return {
      recipes: [],
    }
  },
  methods: {
    async getRecipesByDiet(diet) {
      const result = await API.searchRecipeDiet(diet) 
      console.log(diet);
      this.recipes = result
    }
  }
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: flex-start;
}
.button {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: monospace;
  font-size: calc(16px + 1vw);
  color: white;
  background-color: rgb(242, 143, 75);
  border: none;
  border-radius: 8px;
  transition-duration: 0.4s;
}

.button:hover {
  color: black;
}

.button:active {
  transform: translateY(4px);
}
</style>
