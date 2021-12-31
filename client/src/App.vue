<template>
  <div id="app">
    <Header />
    <div class="container">
      <button @click="login">Login User</button>
      <button @click="logout">Logout User</button>
      <router-view />
    </div>
    <input type="text" v-model="theDisplayName" placeholder="display name" />
    <input type="text" v-model="theEmail" placeholder="email" />
    <button @click="addUser">Add User</button>
    <table>
      <tr v-for="{ id, displayName, email } in users" :key="id">
        <td>{{ id }}</td>
        <td>{{ displayName }}</td>
        <td>{{ email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "./components/core/Header.vue";
import {  useLoadUsers, createUser } from "./firebase/firebaseUtils";

export default {
  setup() {
    const users = useLoadUsers();
    return { users };
  },
  data() {
    return {
      theDisplayName: "",
      theEmail: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    login() {
      this.$store.dispatch("simulateLogin");
    },
    logout() {
      this.$store.dispatch("simulateLogout");
    },
    
    addUser() {
      createUser({
        displayName: this.theDisplayName,
        email: this.theEmail,
        createdAt: Date.now(),
      });
    },
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
