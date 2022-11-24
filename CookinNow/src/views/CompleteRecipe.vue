<template>
  <div class="container">
    <!-- <p v-for="(ingredient,idx) in ingredientList" :key="idx">{{ingredient.ingredient.name}}</p> -->

    <h3>{{ recipe.name }}</h3>
    <div class="receta">
      <div>
        <p>Tipo de dieta: {{ recipe.diet }}</p>
        <p>Tipo de plato: {{ recipe.dishType }}</p>
        <p>Dificultad: {{ recipe.difficulty }}</p>
      </div>
      <div
        class="grid-block"
        style="
          background-image: url(https://cocina-casera.com/wp-content/uploads/2018/05/helado-de-fresa-casero.jpg);
          width: 100%;

          background-size: contain;
          background-repeat: no-repeat;
        "
      ></div>
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
  margin: 100px auto;
  border: 2px solid rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background-color: rgb(242, 143, 75);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 600px;
  padding: 20px 40px;
  font-family: monospace;
  font-size: calc(16px + 1vw);
}
h3 {
  text-align: center;
}
p {
  font-family: monospace;
  font-size: 20px;
  text-align: left;
}

.prep {
  line-height: 30px;

}

.receta {
  display: flex;
  justify-content: space-between;


}

.receta .grid-block{

  margin-left: 5px;
}
</style>