<template>
  <div v-show="isVisible" class="relative z-50">
    <div
      class="absolute flex flex-col justify-start bg-light rounded-b-md w-96 h-auto top-10 -left-36 pb-12 border-dark border"
    >
      <div class="h-12 w-full bg-light text-dark flex justify-center items-center">
        Your Current Total: ${{ cartTotalPrice }}
      </div>
      <div class="mt-1 pt-2 w-full bg-light">
        <ul class="list-none w-full">
          <li
            class="flex flex-row p-2 mb-4 w-full b shadow-sm border-b-2 text-white"
            v-for="item in cartItems"
            :key="item.id"
          >
            <img
              class="mx-2"
              :src="item.productURL"
              :alt="item.productDescription"
            />
            <div class="flex flex-col justify-start w-3/4">
              <span class="pt-2 text-xl">{{ item.productName }}</span>
              <span class="item-price"
                >${{ item.productPrice }} x {{ item.productQuantity }}</span
              >
            </div>
            <button @click="removeItem(item)" class="pr-6">X</button>
          </li>
        </ul>
      </div>
      <div class="relative h-12 gap-1 bg-light rounded-b-md flex felx-row justify-around px-2">
        <button class="button button--primary" @click="continueShopping">Keep Shopping</button>
        <button class="button button--secondary">Checkout</button>
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

