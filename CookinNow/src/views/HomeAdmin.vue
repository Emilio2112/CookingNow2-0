<template>
  <div>
    <ul class="main-links">
      <li class="dropdown-li">
        Recetas
        <ul class="dropdown">
          <li><RouterLink to="/admin/recipe-create" >Crear recetas</RouterLink></li>
          <li>Modificar recetas</li>
          <li>Eliminar receta</li>
        </ul>
      </li>
      <li class="dropdown-li">
        Ingredientes
        <ul class="dropdown">
          <li><RouterLink to="/admin/ing-create" >Crear ingredientes</RouterLink></li>
          <li>Modificar ingredientes</li>
          <li>Eliminar ingredientes</li>
        </ul>
      </li>
      <li class="dropdown-li">
        Usuarios
        <ul class="dropdown">
          <li><RouterLink to="/admin/usercreate" >Crear usuarios</RouterLink></li>
          <li>Modificar usuarios</li>
          <li>Eliminar usuarios</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAuthStore } from "../stores/store";
</script>

<script>
export default {
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  methods: {
    async checkAdmin() {
      if (this.authStore.isAdmin) {
        this.$router.push({ name: "homeadmin" });
        console.log(this.authStore.isAdmin);
      }
    },
  },
};
</script>

<style scoped>
.main-links {
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  list-style: none;
  font-family: monospace;
  font-size: 30px;
}
.main-links li {
  padding: 5px;
  background-color: rgb(242, 143, 75);
}

.dropdown-li {
  position: relative;
  border-radius: 10px;

}

.dropdown-li:hover .dropdown {
  border-radius: 10px;
  display: block;
  opacity: 2;
}

.dropdown {
  border-radius: 10px;
  text-decoration : none;
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
  display: none;
  background: rgb(242, 143, 75);
  font-size: 19px;
}

.dropdown li {
  border-radius: 10px;
  list-style: none;
}
</style>
