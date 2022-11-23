import axios from "axios";
import {useAuthStore} from '../stores/store'

const API = axios.create({
  baseURL: "https://cookingnow.onrender.com/api",
});

async function signup(newUser) {
  try {
    const {
      data: { token, email, role },
    } = await API.post("/auth/signup", newUser);
    return { token, email, role };
  } catch (error) {
    return { error: error.message };
  }
}

async function login(newUser) {
  try {
    const {
      data: { token, email, role },
    } = await API.post("/auth/login", newUser);

    return { token, email, role };
  } catch (error) {
    return { error: error.message };
  }
}

async function getAllRecipes() {
  try {
    const result = await API.get("/recipes");
    return result.data;
  } catch (error) {
    return { error: error.message };
  }
}

async function getRecipeById(id) {
  try {
    const result = await API.get(`/recipes/${id}`)
    return result.data;
  } catch (error) {
    return { error: error.message };
  }
}

async function createUser(newUser) {
  try {
    const result = await API.post("/users/", newUser)
    console.log(result);
    return result.data
  } catch (error) {
    return { error: error.message };
  }
}


async function createIng(newIng) {
  try {
    const authStore = useAuthStore()
   
    const result = await API.post("/ingredients/", newIng, {headers: {token: authStore.userToken}})
    return result.data
  } catch (error) {
    return { error: error.message };
  }
}

export default {
  signup,
  login,
  getAllRecipes,
  getRecipeById,
  createUser,
  createIng
};
