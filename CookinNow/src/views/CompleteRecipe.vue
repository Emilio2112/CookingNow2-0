<template>
  <div class="container">
    <!-- <p v-for="(ingredient,idx) in ingredientList" :key="idx">{{ingredient.ingredient.name}}</p> -->

    <h3>{{ recipe.name }}</h3>
    <div class="receta">
      <div class="grid-block"></div>
      <div>
        <p>Tipo de dieta: {{ recipe.diet }}</p>
        <p>Tipo de plato: {{ recipe.dishType }}</p>
        <p>Dificultad: {{ recipe.difficulty }}</p>
      </div>
    </div>

    <p class="prep">{{ recipe.preparation }}</p>
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
      recipe: {},
      ingredient: "",
      quantity: "",
      ingredientList: [],
      authStore: useAuthStore(),
    };
  },

  async beforeMount() {
    this.recipe = await API.searchRecipe(this.$route.params.id);
    this.ingredientList = this.recipe.ingredients;
    console.log(this.ingredientList);
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto 60px auto;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgb(242, 143, 75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}
.grid-block {
  background-image: url(https://cocina-casera.com/wp-content/uploads/2018/05/helado-de-fresa-casero.jpg);
  width: 100%;
  height: 20vh;
  background-size: contain;
  background-repeat: no-repeat;
}
.prep {

  margin:40px;
  text-align: justify;
}
</style>