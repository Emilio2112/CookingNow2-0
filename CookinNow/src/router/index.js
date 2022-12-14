import { createRouter, createWebHistory } from "vue-router";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import HomeAdmin from "../views/HomeAdmin.vue";
import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue";
import CreateUser from "../components/CreateUser.vue";
import CreateIngredient from "../components/CreateIngredient.vue";
import CreateRecipe from "../components/CreateRecipe.vue"
import CompleteRecipe from "../views/CompleteRecipe.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/admin",
      name: "homeadmin",
      component: HomeAdmin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/user",
      name: "homeUser",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/usercreate",
      name: "userCreate",
      component: CreateUser,
    },
    {
      path: "/admin/ing-create",
      name: "ingCreate",
      component: CreateIngredient,
    },
    {
      path: "/admin/recipe-create",
      name: "recipeCreate",
      component: CreateRecipe,
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: CompleteRecipe,
    },
  ],
});

import { useAuthStore } from "../stores/store";

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
