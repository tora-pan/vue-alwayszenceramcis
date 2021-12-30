import { createStore } from "vuex";
import user from "./modules/user";
import shop from "./modules/shop";
import cart from "./modules/cart";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    shop,
    cart,
  },
});
