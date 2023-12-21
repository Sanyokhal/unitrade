import { collection, getDocs } from "firebase/firestore/lite";

import { firebaseDB } from "@/firebase-config";
const dbCollection = collection(firebaseDB, "users");
import Token from "@/token-usage";

export default {
  // ...firestoreHelper('users'),
  namespaced: true,
  state: {
    user: {},
    accessToken: Token.getAccessTokenFromCookie(),
  },
  getters: {
    user: ({ user }) => {
      return user;
    },
    accessToken: ({ accessToken }) => {
      return accessToken;
    },
  },
  mutations: {
    changeUser(state, value) {
      state.user = value;
    },
    changeAccessToken(state, value) {
      state.accessToken = value;
    },
  },
  actions: {
    async loadUser({ commit, state }) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const userDoc = querySnapshot.docs.find(
          (doc) => doc.id === state.accessToken
        );

        if (userDoc) {
          const userData = userDoc.data();
          userData.id = userDoc.id;
          commit("changeUser", userData);
          return userData;
        } else {
          console.warn("User not found");
          return null;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    },

    changeAccessToken({ commit }, value) {
      commit("changeAccessToken", value);
    },
    changeUser({ commit }, value) {
      commit("changeUser", value);
    },
  },
};
