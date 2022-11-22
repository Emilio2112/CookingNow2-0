import axios from "axios";

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
export default {
  signup,
  login,
  getAllRecipes,
  getRecipeById
};
