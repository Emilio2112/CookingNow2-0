<template>
  <div>
    Aqui va un listado de recetas
    {{ recipes }}
    <RecipeCard :recipe="recipe"/>
  </div>
</template>
<script setup>
import RecipeCard from "../components/RecipeCard.vue";
import getAllRecipes from "../Services/api";
</script>
<script>
export default {
  data() {
    return {
      recipe: {},
    };
  },

  beforeCreate() {
    getAllRecipes
      .getAllRecipes()
      .then((res) => {
        console.log(this.recipe);
        this.recipe = res.recipe;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
