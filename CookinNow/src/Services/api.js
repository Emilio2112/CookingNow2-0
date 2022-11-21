import axios from "axios";

const API = axios.create({
  baseURL: "https://cookingnow.onrender.com/api",
});

async function signup(newUser) {
  const {
    data: { token, email },
  } = await API.post("/auth/signup", newUser);
  localStorage.setItem("token", token);
  localStorage.setItem("email", email);
  return token;
}

async function login(newUser) {
  const {
    data: { token, email, role },
  } = await API.post("/auth/login", newUser);
  localStorage.setItem("token", token);
  localStorage.setItem("email", email);
  localStorage.setItem("role", role)

  return token;
}

export default {
  signup,
  login,
};
