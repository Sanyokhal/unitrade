import { createStore } from "vuex";
import information from "./modules/information";
import posts from "./modules/posts";
import user from "./modules/user";
import works from "./modules/works";

// import firestoreHelper from "./helpers/firestore-helper";
import firebaseGetModules from "./helpers/getModuleSettingObject";
export default createStore({
  namespaced: true,
  modules: {
    information,
    postsDefaultDB: firebaseGetModules("posts"),
    posts,
    user,
    usersDefaultDB: firebaseGetModules("users"),
    works,
  },
});
