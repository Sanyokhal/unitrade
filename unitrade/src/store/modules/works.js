import { collection, getDocs } from "firebase/firestore/lite";

import { firebaseDB } from "@/firebase-config";
const dbCollection = collection(firebaseDB, "works");
export default {
  namespaced: true,
  state: () => ({
    list: [],
  }),
  getters: {
    list: (state) => state.list,
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
  },
  actions: {
    async loadListById({ commit }, postId) {
      try {
        const querySnapshot = await getDocs(dbCollection);

        const list = querySnapshot.docs
          .filter((doc) => doc.id == postId)
          .map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
        commit("setList", list);
        return list; // Optionally, you can return the data for further use
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
