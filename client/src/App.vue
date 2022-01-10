<template>
  <div id="app" class="bg-white text-dark ">
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
  beforeCreate() {
    this.$store.commit("INITIALIZE_STORE");
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

/* html,
body {
  width: 100%;
  max-width: 100%;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
