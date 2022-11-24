<template>
  <div >
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{recipe.name}}</h5>
        <RouterLink :to="`/recipe/${recipe._id}`">Ver Receta</RouterLink>
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
  width: 100%;
  display: flex;
  max-width: 1100px;
}
.card-body {
  width: 100%;
  margin: 20px;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  cursor: default;
  transition: all 400ms ease;
  text-align: center;
}
.card-body:hover {
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-3%);
}
.card-title {

  text-align: center;
}

a {
  text-decoration: none;
  display: inline-block;
  padding: 10px;
  margin: 10px ;
  color: #e07f17;
  border: 1px solid #e07f17;
  border-radius: 4px;
  transition: all 400ms ease;
}

</style>
