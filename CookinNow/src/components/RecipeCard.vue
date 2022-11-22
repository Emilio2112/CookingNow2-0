<template>
  <div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{recipe.name}}</h5>
        <p class="card-text">
            {{ recipe.diet }}
        </p>
        <p class="card-text">
            {{ recipe.dishType }}
        </p>

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

</style>
