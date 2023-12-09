import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      avatarUrl: sessionStorage.getItem('avatarUrl'),
      fullName: sessionStorage.getItem('fullName'),
      email: sessionStorage.getItem('email'),
    },
    accessToken: null,
    isLoggedIn: sessionStorage.getItem('isLoggedIn'),
    isUserLoading: false,
  },
  getters: {
    user: ({ user }) => {
      return user;
    },
    accessToken: ({ accessToken }) => {
      return accessToken;
    },
    isLoggedIn: ({ isLoggedIn }) => {
      return isLoggedIn;
    },
  },
  mutations: {
    changeUser(state, value){
      state.user = value;
    },
    changeIsLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    // changeUserAvatarUrl(state, value) {
    //   state.user.avatarUrl = value;
    // },
    // changeUserFullName(state, value) {
    //   state.user.fullName = value;
    // },
    // changeUserEmail(state, value){
    //   state.user.email = value;
    // },
    changeAccessToken(state, value){
      state.accessToken = value;
    },
  },
  actions: {},
});
