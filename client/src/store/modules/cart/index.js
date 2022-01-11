// STATE
const state = {
  cartItems: [],
  likedItems: [],
  isDropdownVisible: false,
  isLikedDropdownvisible: false,
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
  ADD_TO_FAVORITES(state, payload) {
    let productInCart = state.likedItems.find((likedItem) => {
      return likedItem.productId === payload.productId;
    });
    if (productInCart) {
      let index = state.likedItems
        .map((item) => item.productId)
        .indexOf(payload.productId);
      state.likedItems.splice(index, 1);
    } else {
      state.likedItems.push(payload);
    }

    // localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
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
  TOGGLE_LIKED_DROPDOWN_VISIBLE() {
    this.state.isLikedDropdownvisible = !this.state.isLikedDropdownvisible;
  },
};
// ACTIONS (asynchronous) ({commit})
const actions = {
  addItem({ commit }, item) {
    commit("ADD_TO_CART", item);
  },
  addLiked({ commit }, item) {
    commit("ADD_TO_FAVORITES", item);
  },
  toggleDropdownVisible({ commit }) {
    commit("TOGGLE_DROPDOWN_VISIBLE");
  },
  toggleLikedDropdownVisible({ commit }) {
    commit("TOGGLE_LIKED_DROPDOWN_VISIBLE");
  },
  removeItem({ commit }, item) {
    commit("REMOVE_FROM_CART", item);
  },
};
// GETTERS
const getters = {
  getCartItems: (state) => state.cartItems,
  getAllLikedItems: (state) => state.likedItems.length,
  getLikedIsVisible: (state) => state.isLikedDropdownvisible,
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
