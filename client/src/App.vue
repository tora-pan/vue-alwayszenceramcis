<template>
  <div id="app">
    <Header />
    <div class="container">
      <button @click="login">Login User</button>
      <button @click="logout">Logout User</button>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/core/Header.vue";
export default {
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
