<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <h2 class="text-3xl mb-4">Login with Google</h2>
    <button @click="googleSignin" class="button button--primary">Click Here</button>
    <!-- <button @click="logInfo">LogInfo</button>
    <button @click="logout">Logout</button> -->
  </div>
</template>

<script>
import { auth } from "../firebase/firebaseUtils";

export default {
  name: "LoginSignup",
  methods: {
    googleSignin() {
      if (auth.currentUser === null) {
        this.$store.dispatch("loginWithGoogle");
      }
    },
    logInfo() {
      console.log(auth);
    },
    logout() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>

<style></style>
