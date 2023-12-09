<template>
  <section class="user-profile">
    <div class="user-section">
      <div class="user-info">
        <img class="avatar" :src="user.avatarUrl" />
        <h3>{{ user.fullName }}</h3>
      </div>
      <div class="user-profile-actions">
        <!-- <button class="change-avatar-button">Змінити фото</button> -->
        <button class="exit-profile-button" @click="signOutMethod()">
          Вийти
        </button>
      </div>
    </div>
    <div class="user-posts-toggle">
      <span
        class="category-selector"
        @click="toggle = 'posts'"
        :class="{ selected: toggle == 'posts' }"
      >
        Оголошення
      </span>
      <span>|</span>
      <span
        class="category-selector"
        @click="toggle = 'work'"
        :class="{ selected: toggle == 'work' }"
        >Робота</span
      >
    </div>
    <div class="user-posts" v-if="toggle == 'posts'">
      <div
        class="user-posts-item"
        v-for="post in posts_list"
        :key="post.id"
        @click="openPost(post.id)"
      >
        <img class="post-image" :src="post.img_url" />
        <h4 class="post-title">{{ post.name }}</h4>
      </div>
    </div>
    <div class="user-posts" v-if="toggle == 'work'">
      <div
        class="user-posts-item"
        v-for="work in works_list"
        :key="work.id"
        @click="openWork(work.id)"
      >
        <img class="post-image" :src="work.img_url" />
        <h4 class="post-title">{{ work.name }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
import { posts, works } from "@/temp_data";
import { mapGetters, mapActions } from "vuex";
import { auth } from "@/firebase-config.js";
import { signOut } from "firebase/auth";
import Token from "@/token-usage.js";

export default {
  data() {
    return {
      toggle: "posts",
      posts_list: [],
      works_list: [],
    };
  },
  methods: {
    ...mapActions('user',['changeIsLoggedIn']),
    openPost(id) {
      this.$router.push({ name: "post", params: { id: id } });
    },
    openWork(id) {
      this.$router.push({ name: "work", params: { id: id } });
    },
    signOutMethod() {
      signOut(auth)
        .then(() => {
          Token.removeAccessTokenCookie();
          console.log("SignOut successful");
          sessionStorage.clear();
          this.changeIsLoggedIn(false);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.posts_list = posts;
    this.works_list = works;
  },
  computed: {
    ...mapGetters('user',["user"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/main_colors.scss";

* {
  box-sizing: border-box;
}

button {
  padding: 5px;
}

.avatar {
  width: 40px;
  height: 40px;
}

.user-profile {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: $bg-secondary;
  margin-top: 40px;
}

.user-profile {
  border-radius: $default-border-radius;
}

.user-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-default;
  padding: 10px 10px;

  .user-info {
    display: flex;
    align-items: center;

    h3 {
      font-weight: 500;
      font-size: 14px;
      margin-left: 20px;
    }
  }

  .user-profile-actions {
    button {
      height: 35px;
      border-radius: $default-border-radius;
      border: none;
      padding: 0px 20px 0px 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }

    // .change-avatar-button {
    //   background-color: $main;
    // }

    .exit-profile-button {
      background-color: $danger-color;
      color: $bg-secondary;
      font-weight: bold;
      box-shadow: 0px 0px 4px $danger-color;
    }
    .exit-profile-button:hover {
      transition: all 0.3s;
      background-color: #ef8c8c;
    }

    button:hover {
      cursor: pointer;
    }
  }
}

.user-posts-toggle {
  height: 50px;
  line-height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding-left: 20px;
  max-width: 100%;
  gap: 10px;
  border-bottom: 1px solid $border-default;

  .category-selector {
    transition: all ease 0.2s;
  }

  .category-selector:hover {
    cursor: pointer;
  }
}

.exit-profile-button {
  border: 1px solid #ff0000;
  border-radius: 10px;
}

.user-profile-actions button {
  margin-left: 20px;
}

.title {
  margin: 10px auto;
}

.selected {
  font-weight: bold;
  transition: all ease 0.2s;
}

.user-posts {
  margin-bottom: 20px;
  padding-top: 20px;
  grid-gap: 20px;
  height: auto;
  min-height: 20%;
  width: 80vw;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, 17.5vw);
  grid-template-rows: repeat(auto-fit, 15vw);

  .user-posts-item {
    width: 17.5vw;
    height: 15vw;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    img {
      max-width: 100%;
      width: auto;
      object-fit: contain;
      height: 80%;
      border-radius: $default-border-radius;
    }

    h4 {
      height: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-left: 10px;
    }
  }
  .user-posts-item:hover {
    cursor: pointer;
    h4 {
      text-decoration: underline;
    }
  }
}
</style>