<template>
  <div >
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{recipe.name}}</h5>
        <p class="card-text">
           Dieta : {{ recipe.diet }}
        </p>
        <p class="card-text">
           Tipo de plato: {{ recipe.dishType }}
        </p>
        <a href="/login"> Ver receta </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "recipeCard",
  props: {
    recipe: Object,
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 200px;
  border: 2px black solid;
  margin-bottom: 5%;
  color: black;
  background-color: rgb(242,143,75);
  text-align: center
}
.name {
  font-size: 100%;
  font-family: monospace;

}
p{
  font-family: monospace;
}
a {
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  background-color: white;
  color: #e07f17;
  border: 1px solid #ff8605;
  border-radius: 4px;
  transition: all 400ms ease;
}
a:hover {
  background-color: red;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  color: #fff;
  border: 1px solid #e07f17;
  border-radius: 4px;
  transition: all 400ms ease;
}


</style>
