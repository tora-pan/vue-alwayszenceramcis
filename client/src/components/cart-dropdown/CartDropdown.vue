<template>
  <div v-show="isVisible" class="relative z-50">
    <div
      class="absolute flex flex-col justify-start bg-red-200 rounded-b-md w-72 h-auto top-10 -left-36 pb-12"
    >
      <div class="h-12 w-full bg-red-100 flex justify-center items-center">
        Your Current Total: ${{ cartTotalPrice }}
      </div>
      <div class="mt-1 pt-2 w-full bg-red-100">
        <ul class="list-none">
          <li
            class="flex flex-row p-2 mb-4 w-full shadow-md"
            v-for="item in cartItems"
            :key="item.id"
          >
            <img
              class="mx-2"
              :src="item.productURL"
              :alt="item.productDescription"
            />
            <div class="flex flex-col justify-start">
              <span class="pt-2 text-xl">{{ item.productName }}</span>
              <span class="item-price"
                >${{ item.productPrice }} x {{ item.productQuantity }}</span
              >
            </div>
            <button @click="removeItem(item)">X</button>
          </li>
        </ul>
      </div>
      <div class="absolute bottom-0 h-12 w-full gap-2 bg-red-100 rounded-b-md flex felx-row justify-around px-2">
        <button class="bg-red-400 my-1 rounded-md" @click="continueShopping">Keep Shopping</button>
        <button class="bg-green-300 my-1 rounded-md">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartDropdown",
  data() {
    return {};
  },
  methods: {
    continueShopping() {
      this.$store.dispatch("toggleDropdownVisible");
    },
    goToCart() {},
    removeItem(item) {
      this.$store.dispatch("removeItem", item);
    },
  },

  computed: {
    ...mapGetters({
      cartItems: "getCartItems",
      cartTotalPrice: "getCartTotalPrice",
    }),

    isVisible() {
      return this.$store.state.isDropdownVisible;
    },
  },
};
</script>

<style scoped></style>
