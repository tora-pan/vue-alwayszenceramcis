// STATE
const state = {
  cartItems: [],
  isDropdownVisible: false,
};

// MUTATIONS
const mutations = {
  INITIALIZE_STORE(state) {
    const localState = JSON.parse(localStorage.getItem("cartData"));
    if (localState !== null) {
      state.cartItems = localState;
    }
  },

  ADD_TO_CART(state, payload) {
    let productInCart = state.cartItems.find((cartItem) => {
      return cartItem.productId === payload.productId;
    });
    if (productInCart) {
      productInCart.productQuantity += 1;
    } else {
      state.cartItems.push(payload);
    }
    localStorage.setItem("cartData", JSON.stringify(state.cartItems));
  },
  REMOVE_FROM_CART(state, payload) {
    let productInCart = state.cartItems.find((cartItem) => {
      return cartItem.productId === payload.productId;
    });
    if (productInCart.productQuantity > 1) {
      productInCart.productQuantity -= 1;
    } else {
      let index = state.cartItems.indexOf(payload.productId);
      state.cartItems.splice(index, 1);
    }
    localStorage.setItem("cartData", JSON.stringify(state.cartItems));
  },
  TOGGLE_DROPDOWN_VISIBLE() {
    this.state.isDropdownVisible = !this.state.isDropdownVisible;
  },
};
// ACTIONS (asynchronous) ({commit})
const actions = {
  addItem({ commit }, item) {
    commit("ADD_TO_CART", item);
  },
  toggleDropdownVisible({ commit }) {
    commit("TOGGLE_DROPDOWN_VISIBLE");
  },
  removeItem({ commit }, item) {
    commit("REMOVE_FROM_CART", item);
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
      totalPrice += item.productQuantity * item.productPrice;
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
