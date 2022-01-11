<template>
  <nav
    class="relative text-dark flex justify-center items-center w-screen max-w-full py-10 h-16 pl-3 pr-10 bg-light"
  >
    <h1 class="flex justify-start items-center pl-24 w-3/4">
      Always Zen Ceramics
    </h1>
    <ul
      class="hidden lg:flex flex-row justify-end items-center gap-14 py-0 px-12 w-full list-none"
    >
      <li class="hover:text-black">
        <router-link to="/">Home</router-link>
      </li>
      <li class="hover:text-black">
        <router-link to="/about">About</router-link>
      </li>
      <li class="hover:text-black">
        <router-link to="/shop">Shop</router-link>
      </li>
      <li class="hover:text-black">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="hover:text-black">
        <HeaderDropdownIcon
          :test="getLiked"
          :badgeTotal="allLikedItems"
          dropdownIcon="heart"
        />
      </li>
      <li class="hover:text-black">
        <HeaderDropdownIcon
          :badgeTotal="cartTotal"
          dropdownIcon="shopping-cart"
          @getTotals="getTotals"
        />
      </li>
    </ul>
    <router-link
      v-if="username === null"
      class="hidden lg:flex justify-center items-center mx-5 font-bold text-secondary hover:text-dark"
      to="/login"
      >Login</router-link
    >
    <div
      class="hidden lg:flex flex-row justify-center items-center gap-2 ml-10 -mr-2"
      v-else
    >
      <img
        :src="photoUrl"
        class="w-14 h-14 rounded-full"
        alt="profile picture"
      />
      <p class="text-sm font-medium">{{ username }}</p>
      <button
        class="hidden lg:flex justify-center items-center mx-5 font-bold text-red-300"
        @click="logoutUser"
      >
        Logout
      </button>
    </div>
    <button v-if="!isLoggedIn" class="button button--primary hidden lg:flex">
      Signup
    </button>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderDropdownIcon from "../header-dropdown-icons/HeaderDropdownIcon.vue";
export default {
  name: "Header",
  data() {
    return {
      cartQuantity: null,
    };
  },
  components: {
    HeaderDropdownIcon,
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
      allLikedItems: "getAllLikedItems",
      isLikedVisible: "getLikedIsVisible",
    }),
    getLiked() {
      return this.$store.state.isLikedDropdownvisible;
    },
  },
};
</script>

<style scoped></style>
