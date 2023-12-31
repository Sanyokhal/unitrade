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
    informationDefaultDB: firebaseGetModules("information"),
    posts,
    postsDefaultDB: firebaseGetModules("posts"),
    user,
    usersDefaultDB: firebaseGetModules("users"),
    works,
    worksDefaultDB: firebaseGetModules("works"),
  },
});
