import { collection, getDocs } from "firebase/firestore/lite";

import { firebaseDB } from "@/firebase-config";
const dbCollection = collection(firebaseDB, "posts");
const dbCreator = collection(firebaseDB, "users");
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
    async fetchList({ commit }) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const creatorSnapshot = await getDocs(dbCreator);
        const list = querySnapshot.docs.map((doc) => {
          const creatorId = doc.data().creatorId;
          const creator = creatorSnapshot.docs.find(
            (creatorDoc) => creatorDoc.id === creatorId
          );

          return {
            id: doc.id,
            ...doc.data(),
            creator: creator ? { ...creator.data() } : null,
          };
        });
        commit("setList", list);
        return list; // Опціонально, можна повертати дані для подальшого використання
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async loadListByDormitory({ commit }, dormitory) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const creatorSnapshot = await getDocs(dbCreator);
        const list = querySnapshot.docs
          .filter((doc) => doc.data().dormitory == dormitory)
          .map((doc) => {
            const creatorId = doc.data().creatorId;
            const creator = creatorSnapshot.docs.find(
              (creatorDoc) => creatorDoc.id === creatorId
            );

            return {
              id: doc.id,
              ...doc.data(),
              creator: creator ? { ...creator.data() } : null,
            };
          });
        commit("setList", list);
        return list; // Опціонально, можна повертати дані для подальшого використання
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async loadListByCreator({ commit }, creatorUid) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const creatorSnapshot = await getDocs(dbCreator);
        const list = querySnapshot.docs
          .filter((doc) => doc.data().creatorId == creatorUid)
          .map((doc) => {
            const creator = creatorSnapshot.docs.find(
              (creatorDoc) => creatorDoc.id === creatorUid
            );

            return {
              id: doc.id,
              ...doc.data(),
              creator: creator ? { ...creator.data() } : null,
            };
          });
        commit("setList", list);
        return list; // Опціонально, можна повертати дані для подальшого використання
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    async loadListById({ commit }, postId) {
      try {
        const querySnapshot = await getDocs(dbCollection);
        const creatorSnapshot = await getDocs(dbCreator);

        const list = querySnapshot.docs
          .filter((doc) => doc.id == postId)
          .map((doc) => {
            const creatorId = doc.data().creatorId;
            const creator = creatorSnapshot.docs.find(
              (creatorDoc) => creatorDoc.id == creatorId
            );

            return {
              id: doc.id,
              ...doc.data(),
              creator: creator ? { ...creator.data() } : null,
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
