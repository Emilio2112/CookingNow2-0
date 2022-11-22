<template>
  <div>
    Aqui va un listado de recetas
    <div v-if="recipes">
      <RecipeCard :recipe="recipes[0]"/>

    </div>
  </div>
</template>
<script setup>
import RecipeCard from "../components/RecipeCard.vue";
import API from "../Services/api";
</script>
<script>
export default {
  data() {
    return {
      recipes: [],
    };
  },

  async created() {
    this.recipes = await API.getAllRecipes()
  },
};
</script>

<style scoped></style>
