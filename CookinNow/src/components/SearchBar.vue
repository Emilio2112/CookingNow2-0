<template>
  <div>
    <input type="text" v-model="query"/>
    <button @click="listRecipesByName">Buscar</button>
    <RecipeCard  v-for = "(recipe, idx) in recipes" :key = "idx" :recipe="recipe"/>
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
        this.recipes = result.filter(el => {
            return el.name.toUpperCase().includes(this.query.toUpperCase())
            ;
          })
      }
    }
};
</script>

<style scoped></style>
