import {
  auth,
  signInWithGoogle,
  signOutUser,
} from "../../../firebase/firebaseUtils";

// STATE
const state = {
  username: null,
  userEmail: null,
  isLoggedIn: null,
};

// MUTATIONS
const mutations = {
  UPDATE_USER_STATUS(state, payload) {
    state.isLoggedIn = payload;
    state.username = payload.displayName;
  },
  LOGOUT_USER(state) {
    state.username = null;
    state.userEmail = null;
    state.isLoggedIn = null;
  },
};
// ACTIONS (asynchronous) ({commit})
const actions = {
  //login user
  //ping firebase, then commit("UPDATE_USER_DATA", response.data)
  loginWithGoogle({ commit }) {
    signInWithGoogle().then((response) => {
      console.log(response.user.displayName);
      commit("UPDATE_USER_STATUS", response.user);
    });
  },
  logoutUser({ commit }) {
    console.log("logging out user");
    signOutUser(auth);
    commit("LOGOUT_USER");
  },
};
// GETTERS
const getters = {
  getSessionStatus: (state) => state.isLoggedIn,
  getUsername: (state) => state.username,
};
const userModule = {
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
