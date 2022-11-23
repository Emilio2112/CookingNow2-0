<template>
  <div class="container">

      <RecipeCard  v-for = "recipe in recipes" :key = "idx" :recipe="recipe"/>


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

<style scoped>
.container{
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
}
</style>
