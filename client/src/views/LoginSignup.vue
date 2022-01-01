<template>
  <div class="login-signup">
    <h2>Login with Google</h2>
    <button @click="googleSignin">Click Here</button>
    <button @click="logInfo">LogInfo</button>
  </div>
</template>

<script>
import {  auth } from "../firebase/firebaseUtils";

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
  },
};
</script>

<style></style>
