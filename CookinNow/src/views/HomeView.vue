<template>
 

  <div class="container">
    <div
        class="grid-block"
        style="
          background-image: url(https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/british_shakshuka_26737_16x9.jpg);
          width: 100%;
          height: 160vh;
          background-size: contain;
          background-repeat: no-repeat;
        "
      ></div>
    <RecipeCard v-for="(recipe, idx) in recipes" :key="idx" :recipe="recipe" />
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
    this.recipes = await API.getAllRecipes();
  },
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 60px;
}

.grid-block {
background-size: cover;
}

</style>
