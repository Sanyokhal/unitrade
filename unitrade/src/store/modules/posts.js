import {firebaseDB} from "@/firebase-config";
import {
  collection,
  getDocs,

} from "firebase/firestore/lite";
// doc,addDoc,deleteDoc,updateDoc,query,where,
const dbCollection = collection(firebaseDB, '/posts');

const state = {
  posts: [
  //   {
  //     id: 1,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 2,
  //     name: "Чайник емальований",
  //     img_url:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     author: "Галь Олександр",
  //     tag: "Посуд",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 3,
  //     name: "Чайник емальований",
  //     img_url:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     author: "Галь Олександр",
  //     tag: "Посуд",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 4,
  //     name: "Чайник емальований",
  //     img_url:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     author: "Галь Олександр",
  //     tag: "Посуд",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 5,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 6,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 7,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 8,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 9,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 10,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 11,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  //   {
  //     id: 12,
  //     name: "Сковорода Б/У",
  //     img_url:
  //       "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e6608fce997.jpg?crop=0.617xw:0.464xh;0.0369xw,0.413xh&resize=1200:*",
  //     // price: 200,
  //     // description:
  //     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
  //     creation_date: "11.09.2023 12:00",
  //     tag: "Посуд",
  //     author: "Галь Олександр",
  //     creator_id: 1,
  //     // user_data: {
  //     //   dormitory: "Гуртожиток №4, 4 поверх, 82/4",
  //     //   telegram: "https://t.me/sasha_hal",
  //     //   instagram: "https://www.instagram.com/just_sanyok_hal/",
  //     //   phone: "0771820653",
  //     // },
  //   },
  ],
};
const getters = {
  // posts: (state) => state.posts,
  posts: (state) => state.posts,
};
const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  async fetchPosts({ commit }) {
    try {
      const querySnapshot = await getDocs(dbCollection);
      const list = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      commit('setPosts', list);
      return list; // Опціонально, можна повертати дані для подальшого використання
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
const actions = {
  async fetchPosts({ commit }) {
    try {
      const querySnapshot = await getDocs(dbCollection);
      const list = querySnapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data(),
      }));
      commit('setPosts', list);
      return list; // Опціонально, можна повертати дані для подальшого використання
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
