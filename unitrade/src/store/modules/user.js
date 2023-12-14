const state = {
  user: {
    avatarUrl: sessionStorage.getItem("avatarUrl"),
    fullName: sessionStorage.getItem("fullName"),
    email: sessionStorage.getItem("email"),
  },
  accessToken: null,
  isUserLoading: false,
};
const getters = {
  user: ({ user }) => {
    return user;
  },
  accessToken: ({ accessToken }) => {
    return accessToken;
  },
};
const mutations = {
  changeUser(state, value) {
    state.user = value;
  },
  changeAccessToken(state, value) {
    state.accessToken = value;
  },
};
const actions = {
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
