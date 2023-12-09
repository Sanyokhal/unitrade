const state = {
  user: {
    avatarUrl: sessionStorage.getItem("avatarUrl"),
    fullName: sessionStorage.getItem("fullName"),
    email: sessionStorage.getItem("email"),
  },
  accessToken: null,
  isLoggedIn: sessionStorage.getItem("isLoggedIn") === 'true',
  isUserLoading: false,
};
const getters = {
  user: ({ user }) => {
    return user;
  },
  accessToken: ({ accessToken }) => {
    return accessToken;
  },
  isLoggedIn: ({ isLoggedIn }) => {
    return isLoggedIn;
  },
};
const mutations = {
  changeUser(state, value) {
    state.user = value;
  },
  changeIsLoggedIn(state, value) {
    state.isLoggedIn = value;
  },
  changeAccessToken(state, value) {
    state.accessToken = value;
  },
};
const actions = {
    changeIsLoggedIn({commit},value){
        commit('changeIsLoggedIn',value)
    },
    changeAccessToken({commit},value){
        commit('changeAccessToken',value)
    },
    changeUser({commit},value){
        commit('changeUser',value)
    },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
