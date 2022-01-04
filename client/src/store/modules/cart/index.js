// STATE
const state = {
  cartItems: [],
  isDropdownVisible: false,
};

// MUTATIONS
const mutations = {
  ADD_TO_CART(state, payload) {
    let productInCart = state.cartItems.find((cartItem) => {
      return cartItem.productId === payload.productId;
    });
    if (productInCart) {
      productInCart.productQuantity += 1;
    } else {
      state.cartItems.push(payload);
    }
  },
  REMOVE_FROM_CART(item) {
    let productInCart = state.cartItems.find((cartItem) => {
      return cartItem.productId === item.productId;
    });
    if (productInCart.productQuantity > 0) {
      productInCart.productQuantity -= 1;
    } else {
      let index = state.cartItems.indexOf(item.productId);
      state.cartItems.splice(index, 1);
    }
  },
  TOGGLE_DROPDOWN_VISIBLE() {
    this.state.isDropdownVisible = !this.state.isDropdownVisible;
  },
};
// ACTIONS (asynchronous) ({commit})
const actions = {
  addItem({ commit }, item) {
    console.log(item);
    commit("ADD_TO_CART", item);
  },
  toggleDropdownVisible({ commit }) {
    console.log("toggle called");
    commit("TOGGLE_DROPDOWN_VISIBLE");
  },
};
// GETTERS
const getters = {
  getCartItems: (state) => state.cartItems,
  getAllItems: (state) => {
    let total = 0;
    state.cartItems.map((item) => {
      total += item.productQuantity;
    });
    return total;
  },
  getDropdownVisible: (state) => state.isDropdownVisible,
  getCartTotalPrice: (state) => {
    let totalPrice = 0;
    state.cartItems.map((item) => {
      totalPrice += (item.productQuantity * item.productPrice);
    });
    return totalPrice;
  },
};
const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
