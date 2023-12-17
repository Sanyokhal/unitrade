import { createStore } from "vuex";
import information from "./modules/information";
import posts from "./modules/posts";
import user from "./modules/user";
import works from "./modules/works";

// import firestoreHelper from "./helpers/firestore-helper";

export default createStore({
  namespaced: true,
  modules:{
    information,
    posts: posts,
    user,
    works: works,
  },
});
