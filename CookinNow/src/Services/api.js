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
  const result = await API.get("/recipes");
  return result;
}

export default {
  signup,
  login,
  getAllRecipes,
};
