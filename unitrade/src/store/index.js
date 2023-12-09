import { createStore } from "vuex";
import information from "./modules/information";
import posts from "./modules/posts";
import user from "./modules/user";
import works from "./modules/works";


export default createStore({
  modules:{
    information,
    posts,
    user,
    works
  },
});
