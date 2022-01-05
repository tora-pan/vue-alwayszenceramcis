<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/core/Header.vue";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
export default {
  components: {
    Header,
  },
  data() {
    return {
      unsubscribeFromAuth: null,
    };
  },
  created() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          this.$store.dispatch("setUserData", {
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
    });
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

html,
body {
  width: 100%;
  /* height: 100%; */
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /* text-align: center; */
  color: #2c3e50;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 234, 207, 1) 0%,
    rgba(218, 190, 142, 1) 100%
  );
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 50px; */
}
</style>
