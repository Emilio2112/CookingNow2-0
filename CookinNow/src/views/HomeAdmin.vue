<template>
  <div>
    <ul class="main-links">
      <li class="dropdown-li">
        Recetas
        <ul class="dropdown">
          <li>Modificar recetas</li>
          <li>Eliminar receta</li>
          <li>Añadir recetas</li>
        </ul>
      </li>
      <li class="dropdown-li">
        Ingredientes
        <ul class="dropdown">
          <li>Modificar ingredientes</li>
          <li>Eliminar ingredientes</li>
          <li>Añadir ingredientes</li>
        </ul>
      </li>
      <li class="dropdown-li">
        Usuarios
        <ul class="dropdown">
          <li>Modificar usuarios</li>
          <li>Eliminar usuarios</li>
          <li>Añadir usuarios</li>
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
  gap: 200px;
  list-style: none;
  font-family: monospace;
  font-size: 30px;
}
.main-links li {
  padding: 10px;
  background-color: rgb(242, 143, 75);
}

.dropdown-li {
  position: relative;
}

.dropdown-li:hover .dropdown {
  display: block;
  opacity: 2;
}

.dropdown {
  margin: 0;
  width: 150%;
  position: absolute;
  left: 0;
  top: 100%;
  opacity: 0;
  display: none;
  background: rgb(242, 143, 75);
}

.dropdown li {
  list-style: none;
}
</style>
