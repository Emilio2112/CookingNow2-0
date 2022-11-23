<template>
  <div class="container">
    <h2 class="title">Crear nueva receta</h2>
    <div class="detailrecipe">
      <label class="inputContainer"
        >name
        <input class="campos" type="text" v-model.trim="newRecipe.name" />
      </label>
      <label class="inputContainer"
        >diet
        <select v-model="newRecipe.diet">
          <option value="vegano">Vegano</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="omnivoro">Omnívoro</option>
        </select>
      </label>
      <label class="inputContainer"
        >dishType
        <select v-model="newRecipe.dishType">
          <option value="primer plato">primer plato</option>
          <option value="segundo plato ">segundo plato</option>
          <option value="aperitivo">aperitivo</option>
          <option value="postre">postre</option>
          <option value="salsa">salsa</option>
        </select>
      </label>

      <label class="inputContainer"
        >time
        <input class="campos" type="text" v-model.trim="newRecipe.time" />
      </label>
      <label class="inputContainer"
        >difficulty
        <select v-model="newRecipe.difficulty">
          <option value="facil">facil</option>
          <option value="medio">medio</option>
          <option value="dificil">dificil</option>
        </select>
      </label>
      <label class="inputContainer"
        >preparation
        <textarea
          class="campos"
          v-model.trim="newRecipe.preparation"
          rows="10"
          cols="50"
        ></textarea>
      </label>
      <label class="inputIng"
        >ingredients
        <select v-model.trim="ingredient">
          <option value="">Select Ingredient</option>
          <option
            v-for="(ing, idx) in ingredientList"
            :key="idx"
            :value="ing._id"
          >
            {{ ing.name }}
          </option>
        </select>
        Cantidad
        <input class="campos" type="text" v-model.trim="quantity" />
        <button class="submitBtn" @click="addIngredient">Añadir</button>
      </label>
      <div>
        <ul>
          <li v-for="(ingAdd, idx) in listIngredientsByName" :key="idx">
            {{ ingAdd }}
          </li>
        </ul>
      </div>
      <button class="submitBtn" @click.prevent="createRecipe">
        Crear Receta
      </button>
    </div>
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
      newRecipe: {
        name: "",
        diet: "",
        dishType: "",
        ingredients: [],
        time: "",
        difficulty: "",
        preparation: "",
      },
      ingredient: "",
      quantity: "",
      ingredientList: [],
      authStore: useAuthStore(),
    };
  },
  computed: {
    listIngredientsByName() {
      return this.newRecipe.ingredients.map (element => {
        return {
          name: this.ingredientList.filter(el => {
            return el._id === element.ingredient
          })[0].name,
          quantity: element.quantity
        }
      })
    }
  },
  methods: {
    async createRecipe() {
      console.log(this.newRecipe);
      const response = await API.createRecipe(this.newRecipe);
      if (response.error) {
        alert("Error creating recipe");
      } else {
        this.$router.push({ name: "homeadmin" });
      }
    },
    addIngredient() {
      this.newRecipe.ingredients.push({
        ingredient: this.ingredient,
        quantity: this.quantity,
      });
    },
  },
  async mounted() {
    this.ingredientList = await API.getIngredients();
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 600px;
  padding: 20px 40px;
  font-family: monospace;
}

.title {
}
.inputContainer {
  position: relative;
  display: block;
  width: 90%;
  margin-bottom: 17px;
}

input {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 30%;
  border: 1px solid #dadce0;
  border-radius: 7px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  background: none;
  z-index: 1;
}

.submitBtn {
  display: block;
  margin-left: auto;
  padding: 15px 30px;
  border: none;
  background-color: rgb(242, 143, 75);
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;
}
.submitBtn:hover {
  background-color: #9867c5;
  transform: translateY(-2px);
}

.inputIng {
  display: block;
}
.campos {

}

.detailrecipe {
  background-color: white;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

}


</style>
