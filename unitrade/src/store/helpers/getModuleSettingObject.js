import DbOperations from "./DbOperations";

function getModuleSettingsObject(collectionTitle) {
  const collectionDB = new DbOperations(collectionTitle);
  return {
    namespaced: true,

    state: () => ({
      [collectionTitle]: [],
      loading: false,
      error: null,
    }),

    getters: {
      isLoading: (state) => state.loading,
      hasError: (state) => state.error,

      getItemsList: (state) => state[collectionTitle],
      getItemById: (state) => (itemId) =>
        state[collectionTitle].find((item) => item.id == itemId),
    },
    mutations: {
      setItemsList(state, itemsList) {
        state[collectionTitle] = itemsList;
      },
      addItem(state, item) {
        state[collectionTitle].push(item);
      },
      deleteItem(state, deleteItemId) {
        state[collectionTitle] = state[collectionTitle].filter(
          (item) => item.id !== deleteItemId
        );
      },
      setLoading(state, value) {
        state.loading = value;
      },
      setError(state, error) {
        state.error = error;
      },
    },

    actions: {
      loadList({ commit }) {
        commit("setError", null);
        commit("setLoading", true);
        return collectionDB
          .loadItemsList()
          .then((list) => {
            commit("setItemsList", list);
            return list;
          })
          .catch((error) => {
            commit("setError", error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      },
      addItem({ commit, dispatch }, item) {
        commit("setError", null);
        commit("setLoading", true);
        collectionDB
          .addItem(item)
          .then(() => {
            dispatch("loadList");
          })
          .catch((error) => {
            commit("setError", error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      },
      deleteItem({ commit, dispatch }, itemId) {
        commit("setError", null);
        commit("setLoading", true);

        return new Promise((resolve, reject) => {
          collectionDB
            .deleteItem(itemId)
            .then(() => {
              dispatch("loadList");
              resolve(); // Resolve the Promise on successful deletion
            })
            .catch((error) => {
              commit("setError", error);
              reject(error); // Reject the Promise on deletion error
            })
            .finally(() => {
              commit("setLoading", false);
            });
        });
      },
      updateItem({ commit, dispatch }, { itemId, data }) {
        console.log("UpdateItemId = " + itemId);
        console.log(data);
        commit("setError", null);
        commit("setLoading", true);

        collectionDB
          .updateItem(itemId, data)
          .then(() => {
            dispatch("loadList");
          })
          .catch((error) => {
            commit("setError", error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      },
      loadFilteredData(
        { commit },
        { fieldTitle, compareOperator, valueToCompare }
      ) {
        commit("setError", null);
        commit("setLoading", true);
        collectionDB
          .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
          .then((list) => {
            commit("setItemsList", list);
          })
          .catch((error) => {
            commit("setError", error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      },
    },
  };
}

export default getModuleSettingsObject;
