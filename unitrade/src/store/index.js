import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      avatarUrl: "",
      fullName: "",
      email: "",
    },
    accessToken: "",
    isLoggedIn: false,
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
    changeIsLoggedIn(state) {
        state.isLoggedIn = !state.isLoggedIn;
    } 
  },
  actions: {},
});
