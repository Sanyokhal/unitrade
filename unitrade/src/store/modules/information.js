import { collection, getDocs } from "firebase/firestore/lite";

import { firebaseDB } from "@/firebase-config";
const dbCollection = collection(firebaseDB, "information");
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
    async loadListByDormitory({ commit }, dormitory) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const list = querySnapshot.docs
          .filter((doc) => doc.data().dormitory == dormitory)
          .map((doc) => {

            return {
              id: doc.id,
              ...doc.data(),
            };
          });
        commit("setList", list);
        return list; // Опціонально, можна повертати дані для подальшого використання
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
