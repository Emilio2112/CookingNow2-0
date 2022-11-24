<template>
  <div class="container">
    <label
      >name
      <input type="text" v-model.trim="newUser.name" />
    </label>
    <label
      >username
      <input type="text" v-model.trim="newUser.username" />
    </label>
    <label
      >email
      <input type="email" v-model.trim="newUser.email" />
    </label>
    <label
      >password
      <input type="password" v-model.trim="newUser.password" />
    </label>
    <label
      >diet
      <select v-model="newUser.diet">
        <option value="vegano">Vegano</option>
        <option value="vegetariano">Vegetariano</option>
        <option value="omnivoro">Omnívoro</option>
      </select>
    </label>
    <label
      >role
      <select v-model="newUser.role">
        <option value="usuario">Usuario</option>
        <option value="administrador">Administrador</option>
      </select>
    </label>
    <button @click.prevent="createUser">Crear Usuario</button>
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
      newUser: {
        name: "",
        username: "",
        email: "",
        password: "",
        diet: "",
        role: "",
      },
      authStore: useAuthStore(),
    };
  },
  methods: {
    async createUser() {
      const response = await API.createUser(this.newUser);
      if (response.error) {
        alert("Error creating account");
      } else {
        this.$router.push({ name: "homeadmin" });
      }
    },
  },
};
</script>

<style scoped>

.container {
  font-family: monospace;
  display: flex;
  flex-direction: column;
  width: 860px;
  margin: 100px auto;
  margin-bottom: 60px;
  background-color: rgb(242, 143, 75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  ;
}

.title {
  align-self: center;
}
.inputContainer {
  font-size: 20px;
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
  font-size: 20px;

}
select {
  margin-top: 2%;
  border-radius: 7px;
  font-family: monospace;
  font-size: 20px;

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
  font-size: 20px;

}

.submitBtn {
  margin-left: 5%;
  margin-bottom: 5%;
  border-radius: 7px;
  font-family: monospace;
  background-color: #fff;
  color: rgb(242, 143, 75);
  border: none;
  font-size: 20px;
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
  font-size: 20px;
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
  font-size: 20px;
}

</style>
