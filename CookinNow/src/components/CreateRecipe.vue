<template>
  <div class="container">
    <h2 class="title">Nueva Receta</h2>
    <div>
      <label class="inputContainer"
        >Nombre
        <input type="text" v-model.trim="newRecipe.name" />
      </label>
      <label class="inputContainer"
        >Dieta
        <select v-model="newRecipe.diet">
          <option value="vegano">Vegano</option>
          <option value="vegetariano">Vegetariano</option>
          <option value="omnivoro">Omnívoro</option>
        </select>
      </label>
      <label class="inputContainer"
        >Tipo de plato
        <select v-model="newRecipe.dishType">
          <option value="primer plato">primer plato</option>
          <option value="segundo plato ">segundo plato</option>
          <option value="aperitivo">aperitivo</option>
          <option value="postre">postre</option>
          <option value="salsa">salsa</option>
        </select>
      </label>

      <label class="inputContainer"
        >Tiempo
        <input type="text" v-model.trim="newRecipe.time" />
      </label>
      <label class="inputContainer"
        >Dificultad
        <select v-model="newRecipe.difficulty">
          <option value="facil">facil</option>
          <option value="medio">medio</option>
          <option value="dificil">dificil</option>
        </select>
      </label>
      <label class="inputContainer"
        >Preparación
        <textarea
          v-model.trim="newRecipe.preparation"
          rows="10"
          cols="45"
        ></textarea>
      </label>
      <label class="inputIng"
        >Ingredientes
        <select v-model.trim="ingredient">
          <option value="">Selecciona Ingrediente</option>
          <option
            v-for="(ing, idx) in ingredientList"
            :key="idx"
            :value="ing._id"
          >
            {{ ing.name }}
          </option>
        </select>
        <label
          >Cantidad
          <input type="text" v-model.trim="quantity" />
        </label>
        <button class="addIng" @click="addIngredient">Añadir</button>
      </label>
      <div>
        <ul>
          <li v-for="(ingAdd, idx) in listIngredientsByName" :key="idx">
            {{ ingAdd.name }} - {{ ingAdd.quantity }}
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
      return this.newRecipe.ingredients.map((element) => {
        return {
          name: this.ingredientList.filter((el) => {
            return el._id === element.ingredient;
          })[0].name,
          quantity: element.quantity,
        };
      });
    },
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
  font-family: monospace;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 5%;
  margin-bottom: 60px;
  background-color: rgb(242, 143, 75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.title {
  align-self: center;
}
.inputContainer {
  font-size: calc(16px, 1vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 2%;
}
label {
  margin-top: 2%;
}
input {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
}
select {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
}
textarea {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
}
.inputIng {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  margin-right: 2%;
  margin-left: 2%;
}

.submitBtn {
  margin-left: 5%;
  margin-bottom: 5%;
  border-radius: 7px;
  font-family: monospace;
  background-color: #fff;
  color: rgb(242, 143, 75);
  border: none;
  font-size: calc(16px, 1vw);
  transition: all 0.5s;
  font-weight: bolder;
  padding: 8px 15px;
  cursor: pointer;
}

.submitBtn:active {
  background-color: rgb(242, 143, 75);
  transform: translateY(-2px);
}

.addIng {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
  font-size: calc(16px, 1vw);
  font-weight: bolder;
  padding: 8px 15px;
  cursor: pointer;
  background-color: #fff;
  color: rgb(242, 143, 75);
  border: none;
}

.addIng:active {
  background-color: rgb(242, 143, 75);
  transform: translateY(-2px);
}

li {
  list-style: none;
}

</style>
