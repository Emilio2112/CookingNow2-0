<template>
    <div >
      {{recipe.name}}
    </div>
  </template>

  <script setup>
  import API from "../Services/api"

  </script>
  
  <script>
  export default {
    name: "completeRecipe",
    data() {
      return{
      recipe: {}
    }
    },
    async mounted() {
      this.recipe = await API.searchRecipe(this.$route.params.id)
      console.log(this.recipe)
    }

  };
  </script>
  
  <style scoped>

  </style>