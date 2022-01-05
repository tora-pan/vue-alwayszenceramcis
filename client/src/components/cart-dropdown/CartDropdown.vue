<template>
  <div v-show="isVisible" class="cart-dropdown">
    <div class="container">
      <div class="header">Your Current Total: ${{ cartTotalPrice }}</div>
      <div class="item-list">
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            <img
              class="item-image"
              :src="item.productURL"
              :alt="item.productDescription"
            />
            <div class="title-and-price">
              <span class="item-name">{{ item.productName }}</span>
              <span class="item-price"
                >${{ item.productPrice }} x {{ item.productQuantity }}</span
              >
            </div>
            <button @click="removeItem">X</button>
          </li>
        </ul>
      </div>
      <div class="footer">
        <button>Keep Shopping</button>
        <button>Keep Checkout</button>
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
    continueShopping() {},
    goToCart() {},
    removeItem() {},
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

<style scoped>
.cart-dropdown {
  position: relative;
  z-index: 99999;
}
.container {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  background: rgb(255, 234, 207);
  background: radial-gradient(
    circle,
    rgba(255, 234, 207, 1) 0%,
    rgba(237, 216, 182, 1) 100%
  );
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 5px;
  width: 300px;
  height: 500px;
  top: 40px;
  left: -150px;
}
.header {
  width: 100%;
  height: 50px;
  color: black;

  background: rgb(255, 234, 207);
  background: radial-gradient(
    circle,
    rgba(255, 234, 207, 1) 0%,
    rgba(237, 216, 182, 1) 100%
  );
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-list ul {
  list-style: none;
}
.item-list {
  margin-top: 20px;
  padding-top: 20px;
  width: 90%;
}
.item-list li {
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 18px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  /* background-color: white; */
}

.item-list .title-and-price {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.item-image {
  margin-right: 20px;
}
.item-name {
  padding-top: 10px;
  font-size: 16px;
}

.footer {
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 100%;
  background: rgb(255, 234, 207);
  background: radial-gradient(
    circle,
    rgba(255, 234, 207, 1) 0%,
    rgba(237, 216, 182, 1) 100%
  );
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0px;
}
</style>
