<template>
  <div class="contenedor">
    <button class="button">Recetas Veganas</button>
    <button class="button">Recetas Vegetarianas</button>
    <button class="button">Recetas Omnivoras</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-content: flex-start;
}
.button {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: monospace;
  font-size: calc(16px + 1vw);
  color: white;
  background-color: rgb(242, 143, 75);
  border: none;
  border-radius: 8px;
  transition-duration: 0.4s;
}

.button:hover {
  color: black;
}

.button:active {
  transform: translateY(4px);
}
</style>
