<template>
  <nav class="header">
    <h1 class="brand">LOGO</h1>
    <h3 v-if="getSessionStatus">Welcome {{ getUsername }} !</h3>
    <h3 v-else>Please Login.</h3>
    <ul class="link-list">
      <li class="link-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="link-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="link-item">
        <router-link to="/shop">Shop</router-link>
      </li>
      <li class="link-item">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["getSessionStatus", "getUsername"]),
  },
};
</script>

<style>
.header {
  height: 50px;
  background: red;
  display: flex;
}

.brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  width: 70%;
}

.link-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto 0;
  width: 100%;
  list-style: none;
}
.link-item a {
  text-decoration: none;
  color: black;
}
.link-item a:hover {
  color: white;
}
</style>
