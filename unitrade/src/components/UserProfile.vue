<template>
  <div class="user-profile" v-if="!edit_state">
    <div class="user-data">
      <div class="main-data">
        <div class="profile-photo">
          <img :src="user.avatarUrl" alt="Фото профілю" />
          <div class="edit-pen" @click="edit_state = true">
            <font-awesome-icon :icon="['fas', 'pen']" />
          </div>
        </div>
        <div class="data">
          <p id="fullname">{{ user.fullName }}</p>
          <p id="dormitory">
            Гуртожиток №{{ user.dormitory }}, Кімната {{ user.room }}
          </p>
          <p id="creationdate">Дата приєднання: 17.02.2023</p>
        </div>
      </div>
      <div class="contacts">
        <div class="left-part">
          <p>
            <font-awesome-icon :icon="['fas', 'phone']" />
            {{ user.phone }}
          </p>
          <p>
            <font-awesome-icon :icon="['far', 'envelope']" />
            {{ user.email }}
          </p>
        </div>
        <div class="right-part">
          <div class="links">
            <a :href="user.instagram"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
            <a :href="user.telegram"
              ><font-awesome-icon :icon="['fab', 'telegram']"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <div class="user-selector">
      <span>Показати</span>
      <div class="select-group">
        <select v-model="toggle">
          <option value="post">Оголошення</option>
          <option value="work">Робота</option>
        </select>
        <img src="@/assets/svg/browse.svg" alt="" v-if="toggle === 'post'" />
        <img src="@/assets/svg/work.svg" alt="" v-else />
      </div>
    </div>
    <div class="user-actions">
      <button id="exit" @click="signOutMethod()">Вийти</button>
      <button id="create-post" @click="this.$router.push('posts/create')">Створити оголошення</button>
    </div>
    <div class="spacer"></div>
    <div class="list" v-if="toggle === 'post'">
      <Post_comp :post="post" v-for="post in posts_list" :key="post.id" />
    </div>
    <div class="list" v-else>
      <Work_comp :work="work" v-for="work in works_list" :key="work.id" />
    </div>
  </div>
  <div class="user-edit" v-else>
    <div class="main-data">
      <div class="profile-photo">
        <img :src="user.avatarUrl" alt="Фото профілю" />
      </div>
      <div class="data">
        <p id="fullname">{{ user.fullName }}</p>
        <p id="creationdate">Дата приєднання: 17.02.2023</p>
      </div>
    </div>
    <div class="inputs">
      <div class="input-row">
        <font-awesome-icon :icon="['fas', 'building']" />
        <input
          type="number"
          v-model="user.dormitory"
          max="5"
          min="1"
          placeholder="Номер гуртожитку. Приклад: 4"
        />
      </div>
      <div class="input-row">
        <font-awesome-icon :icon="['fas', 'person-shelter']" />
        <input
          type="text"
          v-model="user.room"
          placeholder="Номер кімнати. Приклад: 82/4"
        />
      </div>
      <div class="input-row">
        <font-awesome-icon :icon="['fas', 'phone']" />
        <input
          type="text"
          v-model="user.phone"
          placeholder="Приклад: +380950990019"
        />
      </div>
      <div class="input-row">
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <input type="text" v-model="user.instagram" placeholder="Приклад: " />
      </div>
      <div class="input-row">
        <font-awesome-icon :icon="['fab', 'telegram']" />
        <input type="text" v-model="user.telegram" placeholder="Telegram" />
      </div>
    </div>
    <div class="actions">
      <button id="save" @click="setUser()">Зберегти</button>
      <button id="cancel" @click="edit_state = false">Скасувати</button>
    </div>
  </div>
</template>
<!--TODO Переробити сторінку PROFILE-->

<script>
import { mapActions, mapGetters } from "vuex";
import { auth } from "@/firebase-config.js";
import { signOut } from "firebase/auth";
import Token from "@/token-usage.js";
import Post_comp from "@/components/Post/Post_comp.vue";
import Work_comp from "@/components/Work/Work_comp.vue";

import { firebaseDB } from "@/firebase-config";
import { doc, setDoc } from "firebase/firestore/lite";

export default {
  components: { Work_comp, Post_comp },
  data() {
    return {
      toggle: "post",
      posts_list: [],
      works_list: [],
      edit_state: false,
    };
  },
  methods: {
    ...mapActions("works", {
      loadWorks: "loadList",
    }),
    ...mapActions("posts", {
      loadPosts: "fetchList",
    }),
    ...mapActions("user", ["loadUser"]),
    openPost(id) {
      this.$router.push({ name: "post", params: { id: id } });
    },
    signOutMethod() {
      signOut(auth)
        .then(() => {
          Token.removeAccessTokenCookie();
          Token.removeUserCookie();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async setUser() {
      try {
        await setDoc(doc(firebaseDB, "users", this.user.id), this.user);
        location.reload();
      } catch (error) {
        console.error("Error setting document:", error);
      }
    },
  },
  async mounted() {
    await this.loadUser();
    await this.loadWorks();
    await this.loadPosts();
    this.posts_list = this.posts;
    this.works_list = this.works;
  },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("works", {
      works: "getItemsList",
    }),
    ...mapGetters("posts", {
      posts: "list",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main_colors";
#exit {
  background-color: $danger-color;
}
.spacer {
  width: 100%;
  height: 2px;
  background-color: #b8dedc;
}

.user-actions {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  button {
    border: none;
    outline: none;
    background-color: #b8dedc;
    font-size: 12px;
    border-radius: 10px;
    padding: 5px 15px;
  }

  #exit {
    flex: 1;
  }
}

.user-edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: calc(90vw - 30px);
  border-radius: 15px;
  padding: 15px;
  margin: auto;
  margin-top: 15px;
  background-color: #ffffff;

  .main-data {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-direction: row;

    .profile-photo:hover {
      .edit-pen {
        transition: box-shadow ease-out 0.2s;
        box-shadow: 0px 0px 5px #000000;
      }
    }

    .profile-photo {
      height: 60px;
      width: 60px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
      }

      .edit-pen {
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: -65px;
        background-color: #edf6f9;
        color: #000000;
        transition: box-shadow ease-out 0.2s;
        position: relative;
        width: 20px;
        border-radius: 50px;

        svg {
          height: 10px;
          width: 10px;
        }
      }
    }

    .data {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      gap: 3px;
      justify-content: left;

      p {
        text-align: left;
        width: 100%;
        font-weight: 400;
      }

      #fullname {
        font-size: 14px;
      }

      #creationdate {
        font-size: 8px;
        color: #8e8e8e;
      }
    }
  }

  .inputs {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      justify-content: space-between;

      svg {
        width: 20px;
        height: 20px;
      }

      input {
        padding-left: 15px;
        border-radius: 15px;
        border: none;
        outline: none;
        background-color: #d3dfe3;
        font-size: 10px;
        font-weight: 400;
        height: 25px;
        flex: 1;

        &::placeholder {
          transition: padding-left ease-out 0.2s, opacity ease-out 0.2s;
        }

        &:focus-visible::placeholder {
          padding-left: 30px;
          opacity: 0;
          transition: padding-left ease-out 0.2s, opacity ease-out 0.2s;
        }
      }
    }
  }

  .actions {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    button {
      border-radius: 15px;
      padding: 8px 15px;
    }

    #save {
      background-color: #006d77;
      color: #ffffff;
      font-size: 10px;
      font-weight: 700;
      outline: none;
      border: 1px solid #006d77;
    }

    #cancel {
      background: none;
      border: 1px solid #5c6669;
      color: #5c6669;
      font-size: 10px;
      outline: none;
      font-weight: 500;
    }
  }
}

.user-profile {
  width: 90vw;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .user-data {
    padding: 15px;
    gap: 20px;
    width: calc(100% - 30px);
    border-radius: 15px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    .main-data {
      width: 100%;
      display: flex;
      gap: 20px;
      align-items: center;
      flex-direction: row;

      .profile-photo:hover {
        .edit-pen {
          transition: box-shadow ease-out 0.2s;
          box-shadow: 0px 0px 5px #000000;
        }
      }

      .profile-photo {
        height: 60px;
        width: 60px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50px;
        }

        .edit-pen {
          height: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          top: -65px;
          background-color: #edf6f9;
          color: #000000;
          transition: box-shadow ease-out 0.2s;
          position: relative;
          width: 20px;
          border-radius: 50px;

          svg {
            height: 10px;
            width: 10px;
          }
        }
      }

      .data {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        gap: 3px;
        justify-content: left;

        p {
          text-align: left;
          width: 100%;
          font-weight: 400;
        }

        #fullname {
          font-size: 14px;
        }

        #dormitory {
          font-size: 11px;
        }

        #creationdate {
          font-size: 8px;
          color: #8e8e8e;
        }
      }
    }

    .contacts {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: end;
      justify-content: space-between;

      .left-part {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        gap: 5px;
        font-size: 11px;

        p {
          display: flex;
          flex-direction: row;
          flex: 1;
          gap: 10px;
          align-items: center;
          line-height: 20px;
        }

        svg {
          height: 15px;
          width: 15px;
          padding: 2.5px;
        }
      }

      .right-part {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;

        .links {
          gap: 10px;
          display: flex;
          flex-direction: row;

          svg {
            height: 20px;
            width: 20px;
          }
          a {
            text-decoration: none;
            color: black;
          }
        }
      }
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 15px;
  }

  .user-selector {
    background-color: #b8dedc;
    border-radius: 15px;
    padding: 0 15px;
    height: 40px;
    width: calc(100% - 30px);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-size: 16px;
    }

    .select-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      select {
        border: none;
        outline: none;
        font-size: 10px;
        background-color: #b8dedc;
        text-align: right;
      }

      img {
        height: 15px;
        width: 15px;
        padding: 2.5px;
      }
    }
  }
}
</style>