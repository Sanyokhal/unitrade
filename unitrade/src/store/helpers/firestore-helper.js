import { firebaseDB } from "@/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
// doc,addDoc,deleteDoc,updateDoc,query,where,
function firestoreHelper(collectionTitle) {
  const dbCollection = collection(firebaseDB, collectionTitle);
  const dbCreator = collection(firebaseDB, "users");
  return {
    namespaced: true,
    state: {
      list: [],
    },
    getters: {
      list: (state) => state.list,
    },
    mutations: {
      setList(state, list) {
        state.list = list;
      },
    },
    actions: {
      addItem(item) {
        return new Promise((resolve, reject) => {
          addDoc(this.dbCollection, item)
            .then(() => {
              resolve(true);
            })
            .catch((error) => {
              reject(error);
            });
        });
      },
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
    },
  };
}

export default firestoreHelper;
