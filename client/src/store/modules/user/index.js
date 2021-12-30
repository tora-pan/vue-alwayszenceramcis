// STATE
const state = {
  username: "tora-pan",
  userEmail: "travis.pandos@gmailcom",
  userAge: 32,
  isLoggedIn: null,
};

// MUTATIONS
const mutations = {
  UPDATE_USER_STATUS(state, payload) {
    state.isLoggedIn = payload;
  },
};
// ACTIONS (asynchronous) ({commit})
const actions = {
  //login user
  //ping firebase, then commit("UPDATE_USER_DATA", response.data)
  simulateLogin({ commit }) {
    commit("UPDATE_USER_STATUS", true);
  },
  simulateLogout({ commit }) {
    commit("UPDATE_USER_STATUS", false);
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
