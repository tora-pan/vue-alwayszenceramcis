<template>
  <nav class="header">
    <h1 class="brand">Always Zen Ceramics</h1>
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
      <li class="link-item">
        <div @click.self="getTotals" class="shopping-cart">
          <CartDropdown />
          <fa icon="shopping-cart"></fa>
          <span v-if="cartTotal > 0" class="cart-badge">{{ cartTotal }}</span>
        </div>
      </li>
    </ul>
    <router-link v-if="username === null" class="login-link" to="/login"
      >Login</router-link
    >
    <div class="username-text" v-else>
      <img :src="photoUrl" class="profile-pic" alt="profile picture" />
      <p>{{ username }}</p>
      <button class="login-link" @click="logoutUser">Logout</button>
    </div>
    <button v-if="!isLoggedIn" class="button-24">Signup</button>
    <button @click="getTotals">TEST</button>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import CartDropdown from "../cart-dropdown/CartDropdown.vue";
export default {
  name: "Header",
  data() {
    return {
      cartQuantity: null,
    };
  },
  components: {
    CartDropdown,
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    getTotals() {
      this.$store.dispatch("toggleDropdownVisible");
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "getSessionStatus",
      username: "getUsername",
      photoUrl: "getPhotoUrl",
      cartTotal: "getAllItems",
      allCartItems: "getCartItems",
    }),
  },
};
</script>

<style scoped>
.username-text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  width: 200px;
}
.username-text p {
  font-size: 0.8rem;
}
.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
}

.header {
  position: relative;
  height: 80px;
  width: 100vw;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 40px;
  background: rgb(246, 243, 243);
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 100px;
  width: 70%;
}

.link-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  padding: 0 50px;
  width: 100%;
  list-style: none;
}
.link-item a {
  text-decoration: none;
  color: black;
}
.link-item a:hover {
  color: rgb(158, 137, 137);
}

.shopping-cart {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  color: rgb(175, 175, 175);
  background: rgb(255, 255, 255);
}
.shopping-cart span {
  color: white;
}

.cart-badge {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;
  background-color: #ff4742;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.signup-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  height: 20px;
}
.login-link {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 20px; */
  margin-left: 50px;
  text-decoration: none;
  color: rgb(204, 134, 146);
  font-weight: bold;
}
.login-link:hover {
  color: black;
}

/* CSS */
.button-24 {
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-right: 50px;
}

.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}

.button-24:active {
  opacity: 0.5;
}
</style>
